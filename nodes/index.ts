import sinaPcPng from '../assets/sinePc.png'
import sigbitPng from '../assets/sigbit.jpg'
import {FeedNodeData} from "../components/type";

export const data: FeedNodeData[] = [
  {
    year: '2024',
    title: 'hello world3',
    list: [
      {
        content: '',
        // poster: '',
        link: ''
      }
    ]
  },
  {
    year: '2023',
    title: 'Very First time',
    list: [],
  },
  {
    year: '2022',
    title: 'Very First time',
    list: [],
  },
  {
    year: '2021',
    title: 'Very First time',
    list: [],
  },
  {
    year: '2020',
    title: 'Very First time',
    list: [],
  },
  {
    year: '2019',
    title: 'Very First time',
    list: [],
  },
  {
    year: '2018',
    title: 'Very First time',
    list: [],
  }, {
    year: '2017',
    title: 'Very First time',
    list: [],
  }, {
    year: '2016',
    title: 'Very First time',
    list: [],
  },
  {
    year: '2015',
    title: 'Very First time',
    list: [
      {
        content: 'Started working for SIGBIT Computer Co. Ltd. in Guangzhou',
        link: '',
        poster: sigbitPng
      },
      {
        content: 'Copied a China\'s biggest portal website for my first Frontend developer job interview',
        stacks: 'HTML, CSS, JavaScript, JQuery',
        poster: sinaPcPng,
        link: './sinaPC/'
      },
      {
        content: 'Studied HTML, CSS, Javascript and JQuery on W3schools',
        link: ''
      }
    ],
  },
]
