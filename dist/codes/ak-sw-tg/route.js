tgApp.config([
    "$stateProvider",
    "$urlRouterProvider",
    "$locationProvider",
    "$stickyStateProvider",
    (
        $stateProvider,
        $urlRouterProvider,
        $locationProvider,
        $stickyStateProvider) => {

        // $locationProvider.htm5Mode(false);
        // $locationProvider.hashPrefix()
        // $urlRouterProvider.otherwise('/');

        $urlRouterProvider.otherwise('home');
        // $stickyStateProvider.enableDebug(true);

        /*定义index abstract*/
        $stateProvider
            .state('index', {
                // abstract: true,
                url: '/',
                templateUrl: 'main.htm',
                controller: 'mainCtrl'
            })
            /*search*/
            .state('index.search', {
                url: 'search?:keywords:sid:brandid',
                sticky: true,
                dsr: true,
                views: {
                    'search': {
                        controller: 'searchCtrl',
                        templateUrl: 'assets/tpls/search/search.htm'
                    }
                }
            })
            /*category*/
            .state('index.category', {
                url: 'category',
                sticky: true,
                dsr: true,
                views: {
                    'category': {
                        controller: 'categoryCtrl',
                        templateUrl: 'assets/tpls/category/category.htm'
                    }
                }
            })
            //shoppingCart
            .state('index.shoppingCart', {
                url: 'shoppingCart',
                views: {
                    'shoppingCart': {
                        controller: 'shoppingCartCtrl',
                        templateUrl: 'assets/tpls/shoppingCart/shoppingCart.htm'
                    }
                }
            })
            .state('index.detail', {
                url: 'detail?:id:recommendId',
                sticky: true,
                dsr: true,
                views: {
                    'detail': {
                        controller: 'detailCtrl',
                        templateUrl: 'assets/tpls/detail/detail.htm'
                    }
                }
            })
            .state('index.ensureorder', {
                url: 'ensureorder',
                views: {
                    'ensureorder': {
                        templateUrl: 'assets/tpls/ensureorder/ensureorder.htm',
                        controller: 'ensureorderCtrl'
                    }
                }
            })
            //限时购
            .state('index.xianshigou', {
                url: 'xianshigou',
                sticky: true,
                dsr: true,
                views: {
                    'xianshigou': {
                        templateUrl: 'assets/tpls/xianshigou/xianshigou.htm',
                        controller: 'xianshigouCtrl'
                    }
                }
            })
            //限时购
            .state('index.cddt', {
                url: 'cddt?:id',
                // sticky: true,
                // dsr: true,
                views: {
                    'cddt': {
                        templateUrl: 'assets/tpls/cddt/cddt.htm',
                        controller: 'cddtCtrl'
                    }
                }
            })
            //专场详情页
            .state('index.special', {
                url: 'special?:id',
                sticky: true,
                dsr: true,
                views: {
                    'special': {
                        templateUrl: 'assets/tpls/special/special.htm',
                        controller: 'specialCtrl'
                    }
                }
            })
            .state('index.city', {
                url: 'city',
                sticky: true,
                dsr: true,
                views: {
                    'city': {
                        templateUrl: 'assets/tpls/city/city.htm',
                        controller: 'cityCtrl'
                    }
                }
            })
            .state('index.dietitian', {
                url: 'dietitian?:id',
                sticky: true,
                dsr: true,
                views: {
                    'dietitian': {
                        templateUrl: 'assets/tpls/dietitian/dietitian.htm',
                        controller: 'dietitianCtrl'
                    }
                }
            })
            .state('index.physicalStores', {
                url: 'physicalStores',
                sticky: true,
                dsr: true,
                views: {
                    'physicalStores': {
                        templateUrl: 'assets/tpls/physicalStores/physicalStores.htm',
                        controller: 'physicalStoresCtrl'
                    }
                }
            })
            .state('index.physicalStoresDetail', {
                url: 'physicalStoresDetail?:id',
                sticky: true,
                dsr: true,
                views: {
                    'physicalStoresDetail': {
                        templateUrl: 'assets/tpls/physicalStores/physicalStoresDetail.htm',
                        controller: 'physicalStoresDetailCtrl'
                    }
                }
            });
    }
]);