const User = require('../models/user');
const Chat = require('../models/chat');

const { dbURI } = require('../config/env');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

User.collection.drop();
Chat.collection.drop();

const userIds = [
  '5b90faba6164a88ac1374928',
  '5b90fb567ac316da4df12cf3',
  '5b90fb667ac316da4df12cf4',
  '5b90fb777ac316da4df12cf5',
  '5b90fb7f7ac316da4df12cf6',
  '5b90fb8c7ac316da4df12cf7',
  '5b90fb947ac316da4df12cf8',
  '5b90fb9e7ac316da4df12cf9',
  '5b90fba57ac316da4df12cfa',
  '5b90fbae7ac316da4df12cfb',
  '5b90fbb77ac316da4df12cfc',
  '5b92684e3683e27f1a51cbc9',
  '5b92685e3683e27f1a51cbca',
  '5b9268693683e27f1a51cbcb',
  '5b9268783683e27f1a51cbcc',
  '5b9268783683e27f1a51cbcd',
  '5b9268783683e27f1a51cbce',
  '5b9268953683e27f1a51cbcf',
  '5b9268983683e27f1a51cbd0',
  '5b9268a93683e27f1a51cbd1',
  '5b9268a93683e27f1a51cbd2',
  '5b9268a93683e27f1a51cbd3',
  '5b9268a93683e27f1a51cbd4',
  '5b9268a93683e27f1a51cbd5',
  '5b9268a93683e27f1a51cbd6',
  '5b9268a93683e27f1a51cbd7',
  '5b9268a93683e27f1a51cbd8',
  '5b9268a93683e27f1a51cbd9'
];

const userData = [
  {
    _id: userIds[0],
    firstName: 'Ellie',
    email: 'ellie@platyp.com',
    password: 'Pass1234',
    passwordConfirmation: 'Pass1234',
    dateOfBirth: '1995-02-22',
    postcode: 'HP5 2RY',
    gender: 'woman',
    sexuality: ['man'],
    minAgeRange: 24,
    maxAgeRange: 32,
    profilePic: 'https://i.imgur.com/cgUj7q6.png',
    occupation: 'Junior Web Developer',
    languages: [ 'English', 'French', 'Italian', 'Dutch' ],
    bio: 'Classical musician turned JavaScript developer. 5ft2, ENTP, and very proud Brit. Proud mummy of a black labrador. If you don\'t like Patisserie Valerie and the Oxford comma, we won\'t get on.',
    swipes: [
      { userId: userIds[1], status: 'right', mutual: true, messaged: true },
      { userId: userIds[2], status: 'right', mutual: true, messaged: true },
      { userId: userIds[3], status: 'left' },
      { userId: userIds[4], status: 'left' },
      { userId: userIds[5], status: 'right', mutual: true },
      { userId: userIds[11], status: 'right', mutual: true },
      { userId: userIds[8], status: 'right', mutual: true },
      { userId: userIds[9], status: 'right', mutual: true }
    ],
    extraPhotos: [
      { url: 'https://i.imgur.com/zXxme0i.png' },
      { url: 'https://i.imgur.com/OwcVge8.png' },
      { url: 'https://i.imgur.com/XejETG5.png' },
      { url: 'https://i.imgur.com/GVrEbLB.png' }
    ]
  },
  ////////////////// MEN /////////////////////
  {
    _id: userIds[1],
    firstName: 'Sam',
    email: 'sam@platyp.com',
    password: 'Pass1234',
    passwordConfirmation: 'Pass1234',
    dateOfBirth: '1993-04-02',
    postcode: 'E3 2AX',
    gender: 'man',
    sexuality: ['woman'],
    minAgeRange: 21,
    maxAgeRange: 26,
    profilePic: 'https://i.imgur.com/qUpD4GT.png',
    occupation: 'Market Researcher',
    languages: ['English', 'French', 'Urdu'],
    bio: 'From Manchester, recently moved to London for work. Looking to meet someone chilled out with a great sense of humour.',
    swipes: [
      { userId: userIds[0], status: 'right', mutual: true, messaged: true }
    ]
  },
  {
    _id: userIds[2],
    firstName: 'Harry',
    email: 'harry@platyp.com',
    password: 'Pass1234',
    passwordConfirmation: 'Pass1234',
    dateOfBirth: '1994-11-18',
    postcode: 'BR8 7PT',
    gender: 'man',
    sexuality: ['man', 'woman'],
    minAgeRange: 20,
    maxAgeRange: 24,
    profilePic: 'https://i.imgur.com/tBSRAsB.png',
    occupation: 'Scaffolder',
    languages: [ 'English' ],
    bio: 'Some of my mates use this so thought I\'d give it a go. Just looking for someone to have a laugh with. Not sure what else to say so swipe right and message to find out.',
    swipes: [
      { userId: userIds[0], status: 'right', mutual: true, messaged: true }
    ]
  },
  {
    _id: userIds[3],
    firstName: 'Liam',
    email: 'liam@platyp.com',
    password: 'Pass1234',
    passwordConfirmation: 'Pass1234',
    dateOfBirth: '1989-03-03',
    postcode: 'SE1 4BU',
    gender: 'man',
    sexuality: ['woman'],
    minAgeRange: 23,
    maxAgeRange: 31,
    profilePic: 'https://i.imgur.com/xXcqsMw.png',
    occupation: 'Project Manager',
    languages: [ 'English', 'Mandarin' ],
    bio: 'Professional from south London, looking for something serious and to settle down. Into cooking and keeping fit. If you don\'t like cats, we won\'t get on. I have two fur babies and want more!'
  },
  {
    _id: userIds[4],
    firstName: 'Paul',
    email: 'paul@platyp.com',
    password: 'Pass1234',
    passwordConfirmation: 'Pass1234',
    dateOfBirth: '1987-06-07',
    postcode: 'SL0 0EE',
    gender: 'man',
    sexuality: ['woman'],
    minAgeRange: 22,
    maxAgeRange: 31,
    profilePic: 'https://i.imgur.com/uaMHPp6.png',
    occupation: 'Crypto Currency Miner',
    languages: [ 'English' ],
    bio: 'Greetings, m\'lady. I am a gentleman who treats a lady like a gentleman should. I am a nice guy, why can\'t I get a reply? Sorry I\'m obese, live with my mum, and spend my life on the computer mining XRP 😒',
    swipes: [
      { userId: userIds[0], status: 'right' }
    ]
  },
  {
    _id: userIds[5],
    firstName: 'Alejandro',
    email: 'alejandro@platyp.com',
    password: 'Pass1234',
    passwordConfirmation: 'Pass1234',
    dateOfBirth: '1991-12-09',
    postcode: 'E1 1DB',
    gender: 'man',
    sexuality: ['man', 'woman', 'transgender', 'non-binary', 'other'],
    minAgeRange: 20,
    maxAgeRange: 30,
    profilePic: 'https://i.imgur.com/TxQDSMZ.png',
    occupation: 'Marketing Intern',
    languages: [ 'English', 'Spanish' ],
    bio: 'Don\'t call my name, dont\'t call my name, Alejandro. I\'m not your babe, I\'m not your babe, Fernando. Not much of a Lady Gaga fan.',
    swipes: [
      { userId: userIds[0], status: 'right', mutual: true }
    ]
  },
  {
    _id: userIds[6],
    firstName: 'Vasco',
    email: 'vasco@platyp.com',
    password: 'Pass1234',
    passwordConfirmation: 'Pass1234',
    dateOfBirth: '1999-08-10',
    postcode: 'EC1Y 4SB',
    gender: 'man',
    sexuality: ['man', 'woman', 'transgender'],
    minAgeRange: 18,
    maxAgeRange: 26,
    profilePic: 'https://i.imgur.com/KB0u7wa.png',
    occupation: 'Student',
    languages: [ 'English', 'Portuguese', 'Spanish', 'French' ],
    bio: 'I\'m a Portuguese bassoonist, studying in Moorgate. Swipe right if you know who Stravinsky is. Not sure what I\'m looking for on here, just want to meet people and see where it leads.'
  },
  {
    _id: userIds[7],
    firstName: 'Adam',
    email: 'adam@platyp.com',
    password: 'Pass1234',
    passwordConfirmation: 'Pass1234',
    dateOfBirth: '1990-05-05',
    postcode: 'WD6 3BJ',
    gender: 'man',
    sexuality: ['woman'],
    minAgeRange: 23,
    maxAgeRange: 28,
    profilePic: 'https://i.imgur.com/z7TUnXT.png',
    occupation: 'Musician',
    languages: [ 'English', 'French' ],
    bio: 'I\'m the one in the middle. Composer who writes music for jingles. Only on here so my dad will stop asking if there are any females. If you get any weird messages from me, you can assume it was my brother.',
    extraPhotos: [
      { url: 'https://i.imgur.com/feg1ZmQ.png' },
      { url: 'https://i.imgur.com/VVrUpZk.png' },
      { url: 'https://i.imgur.com/YojcoSM.png' }
    ]
  },
  {
    _id: userIds[8],
    firstName: 'Anthony',
    email: 'anthony@platyp.com',
    password: 'Pass1234',
    passwordConfirmation: 'Pass1234',
    dateOfBirth: '1996-12-12',
    postcode: 'SW2 1HZ',
    gender: 'man',
    sexuality: ['man'],
    minAgeRange: 20,
    maxAgeRange: 25,
    profilePic: 'https://i.imgur.com/oHVVpOS.png',
    occupation: 'Student',
    languages: [ 'English', 'German' ],
    bio: 'Medicine student at Imperial College London and big fan of all things tech and science. I\'ve probably watched every episode of Big Bang Theory more than hundred times hahaha don\'t judge 😂',
    swipes: [
      { userId: userIds[0], status: 'right', mutual: true }
    ]
  },
  {
    _id: userIds[9],
    firstName: 'Marcus',
    email: 'marcus@platyp.com',
    password: 'Pass1234',
    passwordConfirmation: 'Pass1234',
    dateOfBirth: '1988-02-12',
    postcode: 'N17 0DH',
    gender: 'man',
    sexuality: ['man'],
    minAgeRange: 26,
    maxAgeRange: 32,
    profilePic: 'https://i.imgur.com/yvQOjVE.png',
    occupation: 'Stock Image Model',
    languages: ['English'],
    bio: 'I\'m a stock image model. You have probably seen me in the seed files of dating apps, as well as memes on Reddit.',
    swipes: [
      { userId: userIds[0], status: 'right', mutual: true }
    ]
  },
  {
    _id: userIds[10],
    firstName: 'Michael',
    email: 'michael@platyp.com',
    password: 'Pass1234',
    passwordConfirmation: 'Pass1234',
    dateOfBirth: '1996-06-23',
    postcode: 'SW3 1AS',
    gender: 'man',
    sexuality: ['man', 'woman', 'transgender', 'non-binary', 'other'],
    minAgeRange: 18,
    maxAgeRange: 29,
    profilePic: 'https://i.imgur.com/5i04OXV.png',
    occupation: 'Instagram Model',
    languages: ['English', 'Spanish', 'Mandarin'],
    bio: 'Just back from a trip around South East Asia. Had the best time and can\'t wait to go back, maybe with a travel companion! Picture was taken on a boat off the coast of Vietnam. I can\'t actually play guitar 😅'
  },
  {
    _id: userIds[11],
    firstName: 'Jonny',
    email: 'jonny@platyp.com',
    password: 'Pass1234',
    passwordConfirmation: 'Pass1234',
    dateOfBirth: '1993-03-29',
    postcode: 'WD6 1AD',
    gender: 'man',
    sexuality: ['woman'],
    minAgeRange: 24,
    maxAgeRange: 43,
    profilePic: 'https://i.imgur.com/XPxDZgf.png',
    occupation: 'Estate Agent',
    languages: ['English'],
    bio: 'Estate agent who\'s a big fan of whipped cream, less so of salt. You can never meet my family, they\'re very weird. Never available to hang out on Friday nights.',
    swipes: [
      { userId: userIds[0], status: 'right', mutual: true }
    ],
    extraPhotos: [
      {url: 'https://i.imgur.com/b1RD7S0.png'},
      {url: 'https://i.imgur.com/Y7CDbTK.png'}
    ]
  },

  //////// WOMEN //////////
  {
    _id: userIds[12],
    firstName: 'Jasmine',
    email: 'jasmine@platyp.com',
    password: 'Pass1234',
    passwordConfirmation: 'Pass1234',
    dateOfBirth: '1993-07-31',
    postcode: 'W11 1EL',
    gender: 'woman',
    sexuality: ['woman'],
    minAgeRange: 24,
    maxAgeRange: 27,
    profilePic: 'https://i.imgur.com/dsKzIzc.png',
    occupation: 'Writer',
    languages: ['English', 'Dutch'],
    bio: 'I\'m a food critic currently writing my first novel. Huge fan of all food from fine dining to fast food, but I\'m also very creative. Mummy to two cats.'
  }
];

const chatData = [
  {
    userOne: '',
    userTwo: '',
    messages: [
      {
        sentBy: '',
        content: 'Hi there, how are you doing?',
        timestamps: '2018-09-06 17:11'
      },
      {
        sentBy: '',
        content: 'I\'m good thank you! Yourself?',
        timestamps: '2018-09-06 17:20'
      },
      {
        sentBy: '',
        content: 'Good thanks! What a riveting conversation this is',
        timestamps: '2018-09-06 17:22'
      }
    ]
  },

  {
    userOne: '',
    userTwo: '',
    messages: [
      {
        sentBy: '',
        content: 'Hi, how are you? Been up to much today',
        timestamps: '2018-09-06 17:15'
      },
      {
        sentBy: '',
        content: 'Not much, just building the app you\'re using right now and reading all your data :)',
        timestamps: '2018-09-06 17:24'
      }
    ]
  }
];

User
  .create(userData)
  .then(users => {
    console.log(`Created ${users.length} users`);
    chatData[0].userOne = users[0]._id;
    chatData[0].userTwo = users[1]._id;
    chatData[1].userOne = users[0]._id;
    chatData[1].userTwo = users[2]._id;

    chatData[0].messages[0].sentBy = users[0]._id;
    chatData[0].messages[1].sentBy = users[1]._id;
    chatData[0].messages[2].sentBy = users[0]._id;
    chatData[1].messages[0].sentBy = users[2]._id;
    chatData[1].messages[1].sentBy = users[0]._id;
    return Chat.create(chatData);
  })
  .then(chats => console.log(`Created ${chats.length} chats`))
  .catch(err => console.log('There was an error', err))
  .finally(() => mongoose.connection.close());
