const data: TimelineNode[] = [
  {
    year: "2025",
    description: "",
    data: [
      {
        type: "simple",
        description: "Created the page you’re currently visiting.",
        demo: {
          openInNewTab: true,
          linkText: 'Github Repo',
          link: 'https://github.com/17x/portfolio',
          stacks: 'Next.js, TypeScript, and Tailwind CSS'
        }
      }
    ]
  }, {
    year: "2024",
    description: "",
    data: [
      {
        type: "simple",
        description: "Keep exploring the world. Obtained a visa and moved to Japan."
      }
    ]
  },
  {
    year: "2023",
    description: "",
    data: [
      {
        type: "simple",
        description: "Started a gap period"
      }
    ]
  },
  {
    year: "2022",
    description: "",
    data: [
      {
        type: "cluster",
        description: "data scraping",
        list: [],
        assets: [
          {
            type: 'code',
            data: "codes/facebook-puppeteer/index.js",
          },
          {
            type: 'code',
            data: "codes/88db/taskQueue.js",
          },
          {
            type: 'img',
            data: "imgs/88db-01.png",
          },
        ],
        stacks: 'Selenium, Puppeteer, Node.js'
      },
      {
        type: "simple",
        description: "Developed CRM system and Website Generator system",
        demo: {
          link: '1',
          stacks: 'React, Redux, Typescript, Material-UI'
        },
        assets: [
          {
            type: 'code',
            data: "codes/emedia-page-design/index.tsx",
          },
          {
            type: 'code',
            data: "codes/emedia-platform-fed/App.tsx",
          },
        ],
      },
      {
        type: "cluster",
        description: "Developed mobile Apps and published to stores",
        list: [
          {
            linkText: 'Android APP ( download link )',
            openInNewTab: true,
            link: 'https://shop.andersonfoodsupply.com/download/anderson-shop.apk'
          },
          {
            linkText: 'IOS APP( HongKong Only )',
            openInNewTab: true,
            link: 'https://apps.apple.com/hk/app/%E5%AE%89%E9%81%94%E9%A3%9F%E5%93%81/id1632138590'
          },
          {
            linkText: 'Official website',
            openInNewTab: true,
            link: 'https://shop.andersonfoodsupply.com/'
          },

        ],
        assets: [
          {
            type: 'code',
            data: "codes/anderson-shop/pubspec.yaml",
          },
          {
            type: 'code',
            data: "codes/anderson-shop/home.dart",
          },
        ],
        stacks: 'Flutter'
      },
      {
        type: "simple",
        description: "Started working as a technical partner at Times Interactive Media",
        assets: [],
        icon: "imgs/umem.png"
      },
    ]
  },
  {
    year: "2021",
    description: "",
    data: [
      {
        type: "cluster",
        description: 'Miscellaneous plugins and tools',
        list: [
          {
            link: '/demos/misc/paint-board',
            linkText: 'paint-board',
          },
          {
            link: '/demos/misc/color-picker',
            linkText: 'color-picker',
          }
        ],
        assets: [
          {
            type: 'img',
            data: 'imgs/2021-02.png'
          }
        ]
      }, {
        type: "cluster",
        description: 'Canvas effects',
        list: [
          {
            link: '/demos/misc/canvas-effect-1',
            linkText: '1',
          },
          {
            link: '/demos/misc/canvas-effect-2',
            linkText: '2',
          },
        ],
        assets: [
          {
            type: 'img',
            data: 'imgs/2021-01.png'
          },
        ]
      },
    ]
  },
  {
    year: '2020',
    description: "",
    data: [
      {
        type: 'simple',
        description: 'Web Audio API Sample',
        demo: {
          // linkText: 'audio 3',
          link: '/demos/misc/web-audio-demo/3'
        }
      }
    ]
  },
  {
    year: '2019',
    description: "",
    data: [
      {
        type: "simple",
        description: "Started working as a front-end developer at Naozhixin Technologies",
        assets: [],
        icon: "imgs/nzx.jpg"
      },
      {
        type: "cluster",
        description: [
          "Finished interview questions",
          " 1: right-click to create a dragable square on Canvas, bring it front by left-click.",
          " 2: Render six letters on the Canvas; left-click to change the color of the clicked letter, and right-click to change the color of the three letters that the clicked letter belongs to.",
          " 3: Render an image onto the Canvas and color the nearby pixels that SIMILAR the color of the clicked pixel."
        ],
        list: [
          {
            link: "/demos/misc/nzx/q1",
            linkText: 'Question 1',
            media: "l"
          },
          {
            link: "/demos/misc/nzx/q2",
            linkText: 'Question 2',
            media: "l"
          },
          {
            link: "/demos/misc/nzx/q3",
            linkText: 'Question 3',
            media: "l"
          }
        ],
        assets: [
          {
            type: "img",
            data: "imgs/2019-01.gif"
          }
        ]
      },
      {
        type: "simple",
        description: "Built and published react table plugin to NPM",
        icon: "imgs/nzx.jpg",
        demo: {
          link: 'https://www.npmjs.com/package/rc-table-s',
          linkText: 'NPM Link',
          openInNewTab: true
        },
        assets: [
          {
            type: 'img',
            data: 'imgs/2019-02.png'
          }
        ]
      },
    ]
  },
  {
    year: "2018",
    description: "",
    data: [
      {
        type: "simple",
        description: "Learned React, Webpack, and ES6, applied to new projects",
        icon: "imgs/react.png",
        assets: [
          {
            type: "code",
            data: "codes/ak-sw-drag-edit-page/package.json"
          },
          {
            type: "code",
            data: "codes/ak-sw-drag-edit-page/webpack.config.js"
          },
          {
            type: "code",
            data: "codes/ak-sw-drag-edit-page/index.js"
          },
          {
            type: "code",
            data: "codes/ak-sw-drag-edit-page/reducer.js"
          },
        ],
        demo: {
          link: "/demos/misc/ak-sw-drag-edit-page/public/",
          linkText: "[Static Page] Drag and drop to generate portrait page",
          media: "l",
          stacks: "React, Redux, Material-UI, Webpack"
        }
      }
    ]
  },
  {
    year: "2017",
    description: "",
    data: [
      {
        type: "simple",
        description: "Based on the AngularJS ecosystem, developed numerous SPAs that are compatible with encapsulation into apps and browsers.",
        demo: {},
        assets: [
          {
            type: "code",
            data: "codes/ak-sw-tg/package.json"
          },
          {
            type: "code",
            data: "codes/ak-sw-tg/gulpfile-http.js"
          },
          {
            type: "code",
            data: "codes/ak-sw-tg/mainCtrl.js"
          },
          {
            type: "code",
            data: "codes/ak-sw-tg/route.js"
          },

        ]
      },
      {
        type: "simple",
        description: "Started working for Ankai IT",
        demo: {
          link: "https://www.akxx.tech/",
          linkText: "Company website",
          media: "l"
        },
        icon: "imgs/ankai.png"
      },
      {
        type: "simple",
        description: "A SPA for job interview",
        demo: {
          stacks: "AngularJs, Ui-router, Gulp, Sass, and Python(data scraping)",
          link: "/demos/fzwjg/dist/",
          media: "s",
          linkText: "Demo link"
        }
      }
    ]
  },
  {
    year: "2016",
    data: [
      {
        type: "simple",
        description: "August - Break time until next year"
      },
      {
        type: "simple",
        description: "diving deeper into AngularJs ecosystem",
        icon: "imgs/angularjs.png"
      },
      {
        type: "cluster",
        description: "Continued to sharpen skills",
        list: [
          {
            link: "/demos/misc/z-copy/",
            linkText: "Copy module",
            media: "l"
          },
          {
            link: "/demos/misc/dafeiji/",
            linkText: "Tiny game",
            media: "s"
          },
          {
            link: "/demos/misc/range-comp/",
            linkText: "Range module",
            media: "l"
          },
          {
            link: "/demos/misc/zAnchorMenuScroll/",
            linkText: "Scroll page sample",
            media: "l"
          },
          {
            link: "/demos/misc/zSelect/",
            linkText: "Selection module",
            media: "l"
          },
          {
            link: "/demos/misc/zTouch/",
            linkText: "Touch events module",
            media: "s"
          }
        ],
        stacks: 'HTML, CSS, Javascript'
      }
    ]
  },
  {
    year: "2015",
    description: "",
    data: [
      {
        type: "cluster",
        description: "Started working as a front-end developer at SIGBIT Computer Co. Ltd.",
        list: [
          {
            link: "/demos/sigbits/dengmiSubPage/",
            media: "s"
          },
          {
            link: "/demos/sigbits/leshihuiyuanmianfeiling/",
            media: "s"
          },
          {
            link: "/demos/sigbits/LiRongHao/",
            media: "s"
          },
          {
            link: "/demos/sigbits/muqinjie/",
            media: "s"
          },
          {
            link: "/demos/sigbits/olduserhuikui/",
            media: "s"
          },
          {
            link: "/demos/sigbits/qiandaosonghaoli/",
            media: "s"
          },
          {
            link: "/demos/sigbits/tianjinmobiledownload2016chunjie/",
            media: "s"
          },
          {
            link: "/demos/sigbits/tuniu/",
            media: "s"
          }
        ],
        icon: "imgs/sigbit.png",
        stacks: "HTML, CSS, JavaScript, JQuery, Zepto, AngularJs, Bootstrap, etc."
      },
      {
        type: "simple",
        description: "An imitated page for my first Frontend developer job interview",
        demo: {
          stacks: "HTML, CSS, JavaScript, JQuery",
          media: "l",
          link: "/demos/sinaPC/",
          linkText: "demo link"
        },
        icon: "imgs/sinaLogo.png"
      },
      {
        type: "simple",
        description: "Studied HTML, CSS, Javascript and JQuery from internet"
      }
    ]
  }
]

export default data


