import sina from '../assets/sinaLogo.png'
import sigbit from '../assets/sigbit.png'
import ankai from '../assets/ankai.png'
import angular from '../assets/angularjs.png'
import react from '../assets/react.png'

export const data: TimelineNode[] = [
  {
    year: '2024',
    description: 'hello world3',
    data: []
  },
  {
    year: '2023',
    description: 'Very First time',
    data: [],
  },
  {
    year: '2022',
    description: 'Very First time',
    data: [],
  },
  {
    year: '2021',
    description: 'Very First time',
    data: [],
  },
  {
    year: '2020',
    description: 'Very First time',
    data: [],
  },
  {
    year: '2019',
    description: 'Very First time',
    data: [],
  },
  {
    year: '2018',
    description: 'Very First time',
    data: [
      {
        type: 'simple',
        description: 'Getting involved in React',
        demo: {
          link: 'https://react.dev/learn',
          linkText: 'Official website',
          media: 'l'
        },
        icon: react
      }
    ],
  },
  {
    year: '2017',
    description: 'Very First time',
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
        media: 's',
        description: 'Imitated a garment industry website for job interview',
        demo: {
          stacks: 'AngularJs, Ui-router, Gulp, Sass, and Python(data scraping)',
          link: '/fzwjg/dist/',
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
        description: 'diving deeper into AngularJs ecosystem, developed',
        demo: {
          link: 'https://angularjs.org/',
          linkText: 'Official website',
          media: 'l'
        },
        icon: angular
      },
    ],
  },
  {
    year: '2015',
    description: 'Very First time',
    data: [
      {
        type: 'simple',
        description: 'Getting involved in AngularJs',
        demo: {
          link: 'https://angularjs.org/',
          linkText: 'Official website',
          media: 'l'
        }
        ,
        icon: angular
      },
      {
        type: 'cluster',
        description: `Started working for SIGBIT Computer Co. Ltd. in Guangzhou. Making a bunch of HTML5 pages`,
        list: [
          {link: '/wireless/dengmiSubPage/', media: 's'},
          {link: '/wireless/leshihuiyuanmianfeiling/', media: 's'},
          {link: '/wireless/LiRongHao/', media: 's'},
          {link: '/wireless/muqinjie/', media: 's'},
          {link: '/wireless/olduserhuikui/', media: 's'},
          {link: '/wireless/qiandaosonghaoli/', media: 's'},
          {link: '/wireless/tianjinmobiledownload2016chunjie/', media: 's'},
          {link: '/wireless/tuniu/', media: 's'},
        ],
        icon: sigbit
      },
      {
        type: "simple",
        description: 'An imitation for my first Frontend developer job interview',
        demo: {
          stacks: 'HTML, CSS, JavaScript, JQuery',
          // icon: sina,
          media: 'l',
          link: '/sinaPC/',
          linkText: 'demo link'
        },
        icon: sina,
      },
      {
        type: "simple",
        description: 'Studied HTML, CSS, Javascript and JQuery on W3schools',
      }
    ],
  },
]
