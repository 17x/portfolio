import sinaPc from '../assets/sinaPc.png'
import sigbit from '../assets/sigbit.png'
import ankai from '../assets/ankai.png'
import angular from '../assets/angularjs.png'
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
    list: [
      {
        content: 'Started working for Ankai IT',
        link: 'https://www.akxx.tech/about.html#gsjj',
        img: ankai
      },
      {
        content: 'Copied a garment industry website for job interview',
        stacks: 'HTML, CSS, AngularJs, Ui-router, Gulp, Sass, and Python(data scraping)',
        img: sinaPc,
        link: './sinaPC/',
        linkText: 'Demo link'
      },
    ],
  },
  {
    year: '2016',
    list: [
      {
        content: 'August - Break time until next year',
      },
      {
        content: 'diving deeper into AngularJs ecosystem',
        link: 'https://angularjs.org/',
        img: angular
      },
    ],
  },
  {
    year: '2015',
    title: 'Very First time',
    list: [
      {
        content: 'Getting involved AngularJs',
        link: 'https://angularjs.org/',
        img: angular
      },
      {
        content: 'Making embedded HTML5 page for Apps',
        link: '',
        img: angular
      },
      {
        content: `Started working for SIGBIT Computer Co. Ltd. in Guangzhou. Making embedded HTML5 page for Apps`,
        link: [''],
        img: sigbit
      },
      {
        content: 'Copied a portal website for my first Frontend developer job interview',
        stacks: 'HTML, CSS, JavaScript, JQuery',
        img: sinaPc,
        link: './sinaPC/',
        linkText: 'Demo link'
      },
      {
        content: 'Studied HTML, CSS, Javascript and JQuery on W3schools',
        link: ''
      }
    ],
  },
]
