import 'dart:io';

import 'package:anderson_shop/components/FloatingButtons.dart';
import 'package:anderson_shop/components/Toast.dart';
import 'package:anderson_shop/globals.dart';
import 'package:anderson_shop/utils/Request.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:anderson_shop/components/BounceScroll.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../components/ImageError.dart';
import '../../components/ProductItem.dart';

class BindScrollButton extends StatefulWidget {
  const BindScrollButton({Key? key}) : super(key: key);

  @override
  State<BindScrollButton> createState() => _BindScrollButtonState();
}

class _BindScrollButtonState extends State<BindScrollButton> {
  @override
  Widget build(BuildContext context) {
    return Container(child: Text('AAA'));
  }
}

// home page
class HomeTab extends StatefulWidget {
  final TabController tabBar;

  const HomeTab({required this.tabBar});

  @override
  State<HomeTab> createState() => _HomeTabState();
}

@BindScrollButton()
//a
class _HomeTabState extends State<HomeTab> with AutomaticKeepAliveClientMixin {
  late List<dynamic> sliderList = [];
  late List<dynamic> categorySections = [];
  late List<dynamic> gridSection = [];
  late String subBanner = '';
  final ScrollController _scrollController = ScrollController();

  _HomeTabState() {
    _loadData();
  }

  @override
  bool get wantKeepAlive => true;

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.initState();
  }

  Future<Map> _loadData() async {
    // final url = Uri.parse(globals.serverUrlBase + '?route=common/home/appList');
    final resp = await request.get('common/home/appList');
    // print(response.headers);

    setState(() {
      sliderList = resp['banners_roll'];
      subBanner = resp['banner']['mobile'];
      gridSection = resp['grid'] as List<dynamic>;
      categorySections = resp['products'];
      // print(resp['grid']);
      // print(gridSection);
    });

    return {};
  }

  calcGrid(containerWidth, rowQuantity, itemWidth, betweenMode) {
    double rest = containerWidth - (rowQuantity * itemWidth);

    return betweenMode ? rest / (rowQuantity - 1) : rest / (rowQuantity + 1);
  }

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    var theme = Theme.of(context);
    const double iconR = 50;
    final ScrollController _controller =
        ScrollController(initialScrollOffset: 0.0, keepScrollOffset: true);

    // final gridBlank = screenWidth;
    final Widget gridSectionWidget = Container(
        color: Colors.white,
        padding: EdgeInsets.symmetric(horizontal: 5),
        // margin: EdgeInsets.only(top: 5),
        width: screenWidth,
        child: GridView.count(
          crossAxisCount: 3,
          mainAxisSpacing: 5,
          crossAxisSpacing: 5,
          childAspectRatio: 1,
          controller: new ScrollController(keepScrollOffset: false),
          shrinkWrap: true,
          // scrollDirection: Axis.vertical,
          children: [
            ...gridSection
                .map<Widget>((item) => ClipRRect(
                    borderRadius: BorderRadius.circular(10),
                    child: Container(
                        child: InkWell(
                            child: Image.network(
                              item['image'] ?? '',
                              fit: BoxFit.cover,
                              errorBuilder: (c, e, s) => ImageErrorBuilder(),
                            ),
                            onTap: () {
                              if (item['attr_name'] == 'path') {
                                Navigator.pushNamed(context, '/categorySub',
                                    arguments: {
                                      'id': item['attr_value'],
                                      'name': ''
                                    });
                              } else if (item['attr_name'] ==
                                  'information_id') {
                                Navigator.pushNamed(context, '/webViewContent',
                                    arguments: {'id': item['attr_value']});
                              } else if (item['attr_name'] == 'order') {
                                Navigator.pushNamed(context, '/order');
                              } else if (item['attr_name'] == 'route') {
                                final routeName = item['attr_value'] ?? '';

                                if (routeName.isEmpty) return;
                                Navigator.pushNamed(context, routeName);
                              }
                            }))))
                .toList()
          ],
        ));

    final Widget cateSectionWidgets = Wrap(
        direction: Axis.horizontal,
        children: categorySections
            .map<Widget>((item) => Column(children: [
                  InkWell(
                    // height: 50,
                    child: Container(
                        // color: Colors.red,
                        margin: const EdgeInsets.only(top: 5, bottom: 5),
                        padding:
                            const EdgeInsets.only(top: 5, left: 6, right: 6),
                        child: Image.network(
                          item['cover']['mobile'],
                          // width: 100,
                          // height: 100,
                          fit: BoxFit.cover,
                          errorBuilder: (c, e, s) => ImageErrorBuilder(),
                        )),
                    onTap: () {
                      Navigator.pushNamed(context, '/categorySub', arguments: {
                        'id': item['category_id'].toString(),
                        'name': ''
                      });
                    },
                  ),
                  Container(
                      child: Wrap(
                          spacing: 6,
                          runSpacing: 6,
                          direction: Axis.horizontal,
                          children: [
                        ...item['data']
                            .map((sub) => Container(
                                width: screenWidth * 0.308,
                                child: ProductItemWidget(productData: sub)))
                            .toList()
                      ]))
                ]))
            .toList());

    return Stack(children: [
      Flex(direction: Axis.vertical, children: [
        // blank placeholder
        Container(
            width: screenWidth,
            height: 50,
            // color: Colors.white,
            decoration: BoxDecoration(
                color: theme.backgroundColor,
                border: Border(
                    bottom: BorderSide(width: .5, color: Colors.black12))),
            child: Flex(
              direction: Axis.horizontal,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                IconButton(
                    onPressed: () {
                      Navigator.pushNamed(context, '/search',
                          arguments: {'keyword': ''});
                    },
                    color: Colors.grey,
                    icon: const Icon(
                      Icons.search,
                      size: 28,
                    )),
                Text(
                  // userFirstname + " "+ userLastname,
                  'Anderson Food Supply',
                  textAlign: TextAlign.center,
                  style: theme.textTheme.headlineMedium,
                ),
                IconButton(
                    onPressed: null,
                    // onPressed: () {},
                    icon: const Icon(
                      Icons.qr_code,
                      color: Colors.transparent,
                      size: 28,
                    ))
              ],
            )),
        Expanded(
            child: BounceScroll(
                controller: _scrollController,
                child: Container(
                    // color: Color(0xfff6f5fa),
                    padding: const EdgeInsets.only(bottom: 10),
                    // color: Colors.green,
                    child: Flex(direction: Axis.vertical, children: [
                      CarouselWithIndicator(
                          itemList: sliderList, width: screenWidth),
                      subBanner.isEmpty
                          ? Container()
                          : Container(
                              // margin: const EdgeInsets.only(top: 10),
                              padding: const EdgeInsets.symmetric(vertical: 5),
                              color: Colors.white,
                              child: InkWell(
                                child: Image.network(
                                  subBanner,
                                  errorBuilder: (c, e, s) =>
                                      ImageErrorBuilder(),
                                ),
                                onTap: () {
                                  // print(999);
                                },
                              )),
                      gridSectionWidget,
                      cateSectionWidgets,
                    ])))),
      ]),
      Positioned(
          right: 0,
          bottom: 30,
          child: FloatingButtons(controller: _scrollController))
    ]);
  }
}

class CarouselWithIndicator extends StatefulWidget {
  const CarouselWithIndicator(
      {Key? key, required this.itemList, required this.width})
      : super(key: key);
  final List itemList;
  final double width;

  @override
  State<StatefulWidget> createState() {
    return _CarouselWithIndicatorState();
  }
}

class _CarouselWithIndicatorState extends State<CarouselWithIndicator> {
  int _current = 0;
  final CarouselController _controller = CarouselController();

  @override
  Widget build(BuildContext context) {
    var screenWidth = MediaQuery.of(context).size.width;

    return Stack(children: [
      CarouselSlider(
        items: widget.itemList.map((i) {
          return Builder(
            builder: (BuildContext context) {
              return Container(
                  width: MediaQuery.of(context).size.width,
                  decoration: const BoxDecoration(color: Colors.white),
                  child: InkWell(
                    child: Image.network(
                      i['image'],
                      errorBuilder: (c, e, s) => ImageErrorBuilder(),
                    ),
                    onTap: () async {
                      var uri = Uri.parse(i['link'].replaceAll('amp;', ''));
                      var params = uri.queryParameters;
                      var itemUrl = uri.scheme + '://' + uri.host + uri.path;
                      var isSameHost = serverWithPath == itemUrl;

                      if (isSameHost && params.containsKey('route')) {
                        switch (params['route']) {
                          // webview 內容頁面
                          case 'information/information':
                            if (params.containsKey('information_id')) {
                              Navigator.pushNamed(context, '/webViewContent',
                                  arguments: {'id': params['information_id']});
                            }
                            break;

                          // 分類頁面
                          case 'product/category':
                            if (params.containsKey('path')) {
                              Navigator.pushNamed(context, '/categorySub',
                                  arguments: {
                                    'id': params['path'],
                                    'name': ''
                                  });
                            }
                            break;

                          // 商品詳情
                          case 'product/product':
                            if (params.containsKey('path')) {
                              Navigator.pushNamed(context, '/detail',
                                  arguments: {
                                    'id': params['product_id'],
                                  });
                            }

                            break;
                        }
                      } else if (i['link'].indexOf('whatsapp.com/send') != -1) {
                        var url;
                        final String phone = params['phone'].toString();

                        if (Platform.isAndroid) {
                          url = Uri.parse(
                              "whatsapp://send?phone=${Uri.parse(phone)}");
                        } else {
                          url = Uri.parse("https://wa.me/${phone}");
                        }

                        final bool _can = await canLaunchUrl(url);

                        if (!_can) {
                          toast('打開 Whatsapp 失敗!');
                          return;
                        }

                        final bool result = await launchUrl(url);

                        if (!result) {
                          toast('無法打開');
                        }
                      } else {
                        // 外部連結
                        Navigator.pushNamed(context, '/webView', arguments: {
                          'link': uri.toString(),
                          'title': i['title'] ?? 'Anderson Food Supply'
                        });
                      }
                    },
                  ));
            },
          );
        }).toList(),
        carouselController: _controller,
        options: CarouselOptions(
            height: (screenWidth / 2.533) + 0,
            viewportFraction: 1,
            autoPlay: true,
            // enlargeCenterPage: true,
            // aspectRatio: 2.0,
            onPageChanged: (index, reason) {
              setState(() {
                _current = index;
              });
            }),
      ),
      Positioned(
          width: widget.width,
          bottom: 0,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: widget.itemList.asMap().entries.map((entry) {
              return GestureDetector(
                onTap: () => _controller.animateToPage(entry.key),
                child: Container(
                  width: 5.0,
                  height: 5.0,
                  margin: const EdgeInsets.symmetric(
                      vertical: 8.0, horizontal: 3.0),
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(6),
                      color: (Theme.of(context).brightness == Brightness.dark
                              ? Colors.white
                              : Colors.black)
                          .withOpacity(_current == entry.key ? 0.5 : 0.2)),
                ),
              );
            }).toList(),
          )),
    ]);
  }
}
