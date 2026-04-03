tgApp.controller('mainCtrl', [
    '$scope',
    '$rootScope',
    '$timeout',
    '$http',
    'ngDialog',
    '$location',
    '$q',
    '$interval',
    '$stickyState',
    'commonFactory',
    'inputValidate',
    '$stateParams',
    '$filter',
    ($scope,
     $rootScope,
     $timeout,
     $http,
     ngDialog,
     $location,
     $q,
     $interval,
     $stickyState,
     commonFactory,
     inputValidate,
     $stateParams,
     $filter) => {
        /*全局化方法与属性*/
        $rootScope.isLogin        = window._ISLOGIN;
        $rootScope.searchKeywords = {value: ''};
        $rootScope.$stickyState   = $stickyState;
        $rootScope.$stateParams   = $stateParams;
        $rootScope.$timeout       = $timeout;
        $rootScope.$http          = $http;
        $rootScope.ngDialog       = ngDialog;
        $rootScope.$location      = $location;
        $rootScope.$q             = $q;
        $rootScope.$interval      = $interval;
        $rootScope.$filter        = $filter;
        $rootScope.commonFactory  = commonFactory;
        $rootScope.inputValidate  = inputValidate;
        $rootScope.rootFontSize   = parseInt(document.getElementsByTagName('html')[0].style.fontSize);
        const isInWeChat = $rootScope.isInWeChat = window.navigator.appVersion.toLowerCase().indexOf('micromessenger') >= 0;

        /*进入页面后关闭动画*/
        $timeout(function () {
            document.getElementById('splash').style.display = 'none';
        }, 10);

        /*加载 native 模块*/
        $rootScope.loadNativeModule = () => {
            let d1 = $q.defer();
            /*如果已经加载*/
            if ($rootScope.nativeModuleLoaded) {
                d1.resolve('loaded');
            } else {
                /*未加载 弹出等待提示层*/

                ngDialog.open({
                    template: '<div class="nativeModuleLoading"><img src="assets/img/public/loading.gif" alt="" /><p>加载模块中...</p></div>'
                });

                /*append Js文件*/
                let loadJsFile = (src, callback) => {
                    let d          = $q.defer();
                    var oNewScript = document.createElement('script');

                    document.querySelector('body').appendChild(oNewScript);
                    oNewScript.src = src;

                    oNewScript.onload  = (event) => {
                        d.resolve(event);
                    };
                    oNewScript.onerror = (faild) => {
                        d.reject(faild);
                    };
                    return d.promise;
                };

                /*需要加载的文件*/
                let aSrcs = [{src: 'assets/js/etc/libs.min.js'}, {src: 'assets/js/etc/libs.extends.js'}];

                /*等待文件加载完成*/
                loadJsFile(aSrcs[0].src)
                    .then((event) => {
                        loadJsFile(aSrcs[1].src)
                            .then(() => {
                                $rootScope.nativeModuleLoaded = true;
                                ngDialog.closeAll();
                                d1.resolve('loaded');
                            });
                    });

            }
            return d1.promise;
        };

        /*获取与更新footer购物车上的提示数*/
        $rootScope.getCountInBag = () => {
            $http.get('cartData.html')
                .success((response) => {
                    if (response.ok) {
                        // console.log(response);
                        $rootScope.cartCount = response.object.amount;
                    }
                })
                .error((error) => {
                    //console.log(error);
                });
        };
        $rootScope.getCountInBag();

        /*加载ctrl时判断是否登陆，并在跳转至登陆页之前保存页面url*/
        $rootScope.savePrevUrlIfNotLog = () => {
            if ($rootScope.isLogin === false) {
                $rootScope.lastPageUrl    = $rootScope.$location.url();
                $rootScope.lastPageAbsUrl = $rootScope.$location.absUrl();
                //console.log('savePrevUrlIfNotLog', $rootScope.$location.url());
                $rootScope.$location.url('login');
                return false;
            }
        };

        /*
         将一个商品添加至购物车
         并弹出提示层
         */
        $rootScope.addToCart = (item) => {
            //console.log(item);
            event.preventDefault();
            event.stopPropagation();
            /*默认为1*/
            var arr = [];
            /*传入的是数组*/
            if (angular.isArray(item)) {
                arr = item.map(val => {
                    val.quantity = val.quantity || 1;
                    return (val.skuId + '-' + val.quantity);
                });
                arr = arr.join();
            } else {
                item.quantity = item.quantity || 1;
                arr           = item.skuId + '-' + item.quantity;
            }
            //console.log(arr);
            $http.post('batchInputProductToCart.html', {
                str: arr
            })
                .success((response) => {
                    if (response.ok) {
                        //console.log('batchInputProductToCart', response);
                        /*当添加成功后 重置购物车view*/
                        $rootScope.$stickyState.reset('index.shoppingCart');
                        $rootScope.cartCount = response.object.amount;
                        $rootScope.normalNotice('添加成功');

                    } else {
                        $rootScope.normalNotice(response.value);
                    }
                }).error((error) => {
            });
        };

        /*分享*/
        $rootScope.shareProduct = (param, showHelp) => {
            /*
             * 本地调用微信分享网页给好友
             * 参数 callback ：分享成功回调函数，必须
             * 参数 title ：标题，必须
             * 参数 content ：分享的摘要，可空
             * 参数 imagePath ：分享连接显示的小图片完整路径，必须
             */

            let shareParam = {};

            /*分享成功*/
            window.onWeixinShareSuccess = () => {
                /*清空*/
                $rootScope.shareParam = {};

                $scope.$apply(() => {
                    $rootScope.isShowShareBox = false;
                });
            };

            $rootScope.shareParam = shareParam = {
                callback   : 'onWeixinShareSuccess',
                content    : param.content,
                title      : param.title,
                imagePath  : param.imagePath,
                clickUrl   : param.clickUrl,
                /*如果in wechat 为true */
                showHelpImg: isInWeChat && showHelp ? true : false
            };

            $rootScope.loadNativeModule()
                .then((val) => {
                    if (val === 'loaded') {
                        /*在 微信内 非点击*/
                        if (isInWeChat && !showHelp) {
                            Native.nativeWeixinShareWebPageFriend(shareParam);

                            $timeout(() => {
                                Native.nativeWeixinShareWebPage(shareParam);
                            }, 1500);
                        }
                        /*在 微信内 点击*/
                        if (isInWeChat && showHelp) {
                            Native.nativeWeixinShareWebPageFriend(shareParam);
                            Native.nativeWeixinShareWebPage(shareParam);
                        }

                        /*不在 微信内 点击*/
                        if (!isInWeChat && showHelp) {
                            $rootScope.isShowShareBox = true;
                        }
                    }
                });
        };

        $rootScope.shareFriend = () => {
            Native.nativeWeixinShareWebPageFriend($rootScope.shareParam);
        };
        $rootScope.shareMoment = () => {
            Native.nativeWeixinShareWebPage($rootScope.shareParam);
        };
        $rootScope.closeShare  = (event) => {
            if (angular.element(event.target).hasClass('shareBoxWrap')) {
                $rootScope.shareParam     = {};
                $rootScope.isShowShareBox = false;
            }
        };
        /*分享块结束*/

        /*短暂出现而自动关闭的弹出层*/
        $rootScope.normalNotice = (str, delay) => {
            let d = $q.defer();
            delay = delay || 700;
            ngDialog.open({
                template: '<div class="dialogContentText">' + str + '</div>'
            });
            $timeout(() => {
                ngDialog.close();
                d.resolve('count down finish');
            }, delay);

            return d.promise;
        };

        /*更新全局用户信息*/
        $rootScope.updateUserInfo = () => {
            let d = $rootScope.$q.defer();
            $rootScope.$http.post('getMemberInfo.html')
                .then(response => {
                    if (response.data.id > 0) {
                        // console.log(response);
                        d.resolve();
                        $rootScope.normalUserInfo = response.data;
                    } else {
                        d.reject();
                    }
                });
            return d.promise;
        };
    }
]);

/*配置弹窗层的默认选项*/
tgApp.config(['ngDialogProvider', function (ngDialogProvider) {
    // alert(document.compatMode)
    let requestAnimFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        undefined;

    ngDialogProvider.setDefaults({
        closeByDocument : false,
        disableAnimation: requestAnimFrame === undefined ? true : false,
        plain           : true,
        width           : '80%',
        showClose       : false
    });
}]);
