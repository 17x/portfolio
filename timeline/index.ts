import sina from '../assets/imgs/sinaLogo.png'
import sigbit from '../assets/imgs/sigbit.png'
import ankai from '../assets/imgs/ankai.png'
import angular from '../assets/imgs/angularjs.png'
import react from '../assets/imgs/react.png'
import nzx from '../assets/imgs/nzx.png'

export const data: TimelineNode[] = [
  /* {
     year: '2024',
     description: '',
     data: [
       {
         type: 'simple',
         description: 'Created the page you’re currently visiting.'
       }
     ]
   },
   {
     year: '2023',
     description: '',
     data: [],
   },*/
  {
    year: '2022',
    description: '',
    data: [],
  },
  {
    year: '2021',
    description: '',
    data: [],
  },
  {
    year: '2020',
    description: '',
    data: [],
  },
  {
    year: '2019',
    description: '',
    data: [
      {
        type: 'simple',
        description: 'Started working for Naozhixin Technologies',
        demo: {
          // link: '',
          // linkText: 'Company website',
          // media: 'l',
        },
        assets: [
          {type: 'text', data: '1'},
          {type: 'text', data: '1'},
          {type: 'text', data: '1'},
          {type: 'text', data: '1'},
          {type: 'text', data: '1'},
          {type: 'text', data: '1'},
          {type: 'text', data: '1'},
        ],
        icon: nzx
      },
      {
        type: 'cluster',
        description: 'Questions for job interview, Canvas only.' +
          '\n 1: right-click to create a dragable square on Canvas, bring it front by left-click.' +
          '\n 2: Render six letters on the Canvas; left-click to change the color of the clicked letter, and right-click to change the color of the three letters that the clicked letter belongs to.' +
          '\n 3: Render an image onto the Canvas and color the nearby pixels that SIMILAR the color of the clicked pixel.'
        ,
        list: [
          {
            link: '/demos/misc/nzx/q1',
            media: 'l'
          },
          {
            link: '/demos/misc/nzx/q2',
            media: 'l'
          },
          {
            link: '/demos/misc/nzx/q3',
            media: 'l'
          }
        ]
      }
    ],
  },
  {
    year: '2018',
    description: '',
    data: [
      {
        type: 'cluster',
        description: 'Learned React, Webpack, and ES6, applied to new projects',
        icon: react,
        list: [
          {
            link: '/demos/misc/ak-sw-drag-edit-page/public/',
            linkText: '[Static Page] Drag and drop to generate portrait page',
            media: 'l'
          }
        ],
        stacks: 'React, Redux, Material-UI, Webpack'
      }
    ],
  },
  {
    year: '2017',
    description: '',
    data: [
      {
        type: 'simple',
        description: 'Based on the AngularJS ecosystem, developed numerous SPAs that are compatible with encapsulation into apps and browsers.',
        demo: {
          // type:'text',
          // data: '1',

        },
        assets: [
          {type: 'text', data: '1'},
          {type: 'text', data: '1'},
          {type: 'text', data: '1'},
          {type: 'text', data: '1'},
          {type: 'text', data: '1'},
          {type: 'text', data: '1'},
          {type: 'text', data: '1'},
        ]
      },
      {
        type: 'simple',
        description: 'Started working for Ankai IT',
        demo: {
          link: 'https://www.akxx.tech/',
          linkText: 'Company website',
          media: 'l'
        },
        icon: ankai
      },
      {
        type: 'simple',
        description: 'An SPA for job interview',
        demo: {
          stacks: 'AngularJs, Ui-router, Gulp, Sass, and Python(data scraping)',
          link: '/demos/fzwjg/dist/',
          media: 's',
          linkText: 'Demo link'
        },
      },
    ],
  },
  {
    year: '2016',
    data: [
      {
        type: 'simple',
        description: 'August - Break time until next year',
      },
      {
        type: 'simple',
        description: 'diving deeper into AngularJs ecosystem',
        icon: angular
      },
      {
        type: 'cluster',
        description: 'Continued to sharpen skills',
        list: [
          {
            link: '/demos/misc/z-copy/',
            linkText: 'Copy module',
            media: 'l'
          },
          {
            link: '/demos/misc/dafeiji/',
            linkText: 'Tiny game',
            media: 's'
          },
          {
            link: '/demos/misc/range-comp/',
            linkText: 'Range module',
            media: 'l'
          },
          {
            link: '/demos/misc/zAnchorMenuScroll/',
            linkText: 'Scroll page sample',
            media: 'l'
          },
          {
            link: '/demos/misc/zSelect/',
            linkText: 'Selection module',
            media: 'l'
          },
          {
            link: '/demos/misc/zTouch/',
            linkText: 'Touch events module(mobile access needed)',
            media: 'l'
          },
        ],
        // icon: angular
      }
    ],
  },
  {
    year: '2015',
    description: '',
    data: [
      {
        type: 'cluster',
        description: `Started working as a front-end developer at SIGBIT Computer Co. Ltd. in Guangzhou, Responsible for all front-end-related work.`,
        list: [
          {link: '/demos/wireless/dengmiSubPage/', media: 's'},
          {link: '/demos/wireless/leshihuiyuanmianfeiling/', media: 's'},
          {link: '/demos/wireless/LiRongHao/', media: 's'},
          {link: '/demos/wireless/muqinjie/', media: 's'},
          {link: '/demos/wireless/olduserhuikui/', media: 's'},
          {link: '/demos/wireless/qiandaosonghaoli/', media: 's'},
          {link: '/demos/wireless/tianjinmobiledownload2016chunjie/', media: 's'},
          {link: '/demos/wireless/tuniu/', media: 's'},
        ],
        icon: sigbit,
        stacks: 'HTML, CSS, JavaScript, JQuery, Zepto, AngularJs, Bootstrap, etc.',
      },
      {
        type: "simple",
        description: 'An imitated page for my first Frontend developer job interview,',
        demo: {
          stacks: 'HTML, CSS, JavaScript, JQuery',
          // icon: sina,
          media: 'l',
          link: '/demos/sinaPC/',
          linkText: 'demo link'
        },
        icon: sina,
      },
      {
        type: "simple",
        description: 'Studied HTML, CSS, Javascript and JQuery from internet',
      }
    ],
  },
]
