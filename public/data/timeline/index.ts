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
          link: 'https://github.com/lucasischow/lucasischow.github.io',
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
    data: []
  },
  {
    year: "2021",
    description: "",
    data: []
  },
  {
    year: '2020',
    description: "",
    data: []
  },
  {
    year: '2019',
    description: "",
    data: [
      {
        type: "simple",
        description: "Started working for Naozhixin Technologies",
        assets: [
          {
            type: 'text',
            data: 'in charge of '
          },
          {
            type: 'text',
            data: 'in charge of '
          }

        ],
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
      }
    ]
  },
  {
    year: "2018",
    description: "",
    data: [
      {
        type: "cluster",
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
        list: [
          {
            link: "/demos/misc/ak-sw-drag-edit-page/public/",
            linkText: "[Static Page] Drag and drop to generate portrait page",
            media: "l"
          }
        ],
        stacks: "React, Redux, Material-UI, Webpack"
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
            linkText: "Touch events module(mobile access needed)",
            media: "l"
          }
        ],
        stacks: 'Javascript HTML CSS'
      }
    ]
  },
  {
    year: "2015",
    description: "",
    data: [
      {
        type: "cluster",
        description: "Started working as a front-end developer at SIGBIT Computer Co. Ltd. in Guangzhou, Responsible for all front-end-related work.",
        list: [
          {
            link: "/demos/wireless/dengmiSubPage/",
            media: "s"
          },
          {
            link: "/demos/wireless/leshihuiyuanmianfeiling/",
            media: "s"
          },
          {
            link: "/demos/wireless/LiRongHao/",
            media: "s"
          },
          {
            link: "/demos/wireless/muqinjie/",
            media: "s"
          },
          {
            link: "/demos/wireless/olduserhuikui/",
            media: "s"
          },
          {
            link: "/demos/wireless/qiandaosonghaoli/",
            media: "s"
          },
          {
            link: "/demos/wireless/tianjinmobiledownload2016chunjie/",
            media: "s"
          },
          {
            link: "/demos/wireless/tuniu/",
            media: "s"
          }
        ],
        icon: "imgs/sigbit.png",
        stacks: "HTML, CSS, JavaScript, JQuery, Zepto, AngularJs, Bootstrap, etc."
      },
      {
        type: "simple",
        description: "An imitated page for my first Frontend developer job interview,",
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


