import sina from '../assets/sinaLogo.png'
import sigbit from '../assets/sigbit.png'
import ankai from '../assets/ankai.png'
import angular from '../assets/angularjs.png'
import react from '../assets/react.png'

export const data: TimelineNode[] = [
  {
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
  },
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
    data: [],
  },
  {
    year: '2018',
    description: '',
    data: [
      {
        type: 'simple',
        description: 'Getting involved in React',
        icon: react
      }
    ],
  },
  {
    year: '2017',
    description: '',
    data: [
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
        description: 'Continued to sharpen my skills',
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
