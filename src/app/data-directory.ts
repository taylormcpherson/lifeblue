import {Article, ArticleParagraphs} from './data-skeletons';
import {ArticlePageComponent} from './article-page/article-page.component';

// ------GENERAL ARTICLE TEMPLATES-------------

// big article template
export const BIGARTICLE: Article[] = [
  {
    title: 'Big Important Article Title',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut' +
      ' enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' +
      ' aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' +
      ' in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ' +
      'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit' +
      ' anim id est laborum.',
    img: 'https://images.ttisi.com/wp-content/uploads/2018/09/18093158/background-light-grey.png',
    alt: 'light-grey-filler-background'
  }
];

// small article template
export const SMALLARTICLE: Article[] = [
  {
    title: 'Article Title',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    img: 'https://images.ttisi.com/wp-content/uploads/2018/09/18093158/background-light-grey.png',
    alt: 'light-grey-filler-background'
  }
];

// dummy paragraph template
export const ARTICLEPARAGRAPH: ArticleParagraphs[] = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut' +
        ' enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' +
        ' aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' +
        ' in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ' +
        'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit' +
        ' anim id est laborum.'
  }
];


// ------LANDING PAGE 5 ARTICLES-------------

// landing page main article
export const LANDINGMIDDLE: Article[] = [
  {
    title: 'With a Little Help From His Friends',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'The Bern Man stays cool with his best pals Ross, Rachel, Chandler, Monica, and Phoebe.',
    img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/690/files/2021/01/screenshot-2021-01-21-bernie-hashtag-on-instagram-photos-and-videos.png',
    alt: 'bernie-with-friends-cast'
  },
];

// landing page small articles on the left
export const LANDINGLEFT: Article[] = [
  {
    title: 'Senator Sanders Takes the Subway',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Uber who? Senator Sanders rides the metro.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  },
  {
    title: 'Senator Sanders Takes the Subway',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Uber who? Senator Sanders rides the metro.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  },
];

// landing page small articles on the right
export const LANDINGRIGHT: Article[] = [
  {
    title: 'Elon Could Never',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Bernie is cozy on Saturn.',
    img: 'https://cdn.mos.cms.futurecdn.net/vfTtT6y3CE373NCAYWWeUK-1024-80.jpg.webp',
    alt: 'bernie-on-saturn'
  },
  {
    title: 'Elon Could Never',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Bernie is cozy on Saturn.',
    img: 'https://cdn.mos.cms.futurecdn.net/vfTtT6y3CE373NCAYWWeUK-1024-80.jpg.webp',
    alt: 'bernie-on-saturn'
  },
];


// ---------POPULAR CONTENT-------------
// 10 most viewed articles
export const MOSTVIEWED: Article[] = [
  {
    title: 'With a Little Help From His Friends',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/690/files/2021/01/screenshot-2021-01-21-bernie-hashtag-on-instagram-photos-and-videos.png',
    alt: 'bernie-with-friends-cast'
  },
  {
    title: 'With a Little Help From His Friends',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/690/files/2021/01/screenshot-2021-01-21-bernie-hashtag-on-instagram-photos-and-videos.png',
    alt: 'bernie-with-friends-cast'
  },
  {
    title: 'With a Little Help From His Friends',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/690/files/2021/01/screenshot-2021-01-21-bernie-hashtag-on-instagram-photos-and-videos.png',
    alt: 'bernie-with-friends-cast'
  },
  {
    title: 'With a Little Help From His Friends',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/690/files/2021/01/screenshot-2021-01-21-bernie-hashtag-on-instagram-photos-and-videos.png',
    alt: 'bernie-with-friends-cast'
  },
  {
    title: 'With a Little Help From His Friends',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/690/files/2021/01/screenshot-2021-01-21-bernie-hashtag-on-instagram-photos-and-videos.png',
    alt: 'bernie-with-friends-cast'
  },
  {
    title: 'With a Little Help From His Friends',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/690/files/2021/01/screenshot-2021-01-21-bernie-hashtag-on-instagram-photos-and-videos.png',
    alt: 'bernie-with-friends-cast'
  },
  {
    title: 'With a Little Help From His Friends',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/690/files/2021/01/screenshot-2021-01-21-bernie-hashtag-on-instagram-photos-and-videos.png',
    alt: 'bernie-with-friends-cast'
  },
  {
    title: 'With a Little Help From His Friends',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/690/files/2021/01/screenshot-2021-01-21-bernie-hashtag-on-instagram-photos-and-videos.png',
    alt: 'bernie-with-friends-cast'
  },
  {
    title: 'With a Little Help From His Friends',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/690/files/2021/01/screenshot-2021-01-21-bernie-hashtag-on-instagram-photos-and-videos.png',
    alt: 'bernie-with-friends-cast'
  },
  {
    title: 'With a Little Help From His Friends',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/690/files/2021/01/screenshot-2021-01-21-bernie-hashtag-on-instagram-photos-and-videos.png',
    alt: 'bernie-with-friends-cast'
  },
];

// 10 most commented articles
export const MOSTCOMMENTED: Article[] = [
  {
    title: 'Elon Could Never',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://cdn.mos.cms.futurecdn.net/vfTtT6y3CE373NCAYWWeUK-1024-80.jpg.webp',
    alt: 'bernie-on-saturn'
  },
  {
    title: 'Elon Could Never',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://cdn.mos.cms.futurecdn.net/vfTtT6y3CE373NCAYWWeUK-1024-80.jpg.webp',
    alt: 'bernie-on-saturn'
  },
  {
    title: 'Elon Could Never',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://cdn.mos.cms.futurecdn.net/vfTtT6y3CE373NCAYWWeUK-1024-80.jpg.webp',
    alt: 'bernie-on-saturn'
  },
  {
    title: 'Elon Could Never',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://cdn.mos.cms.futurecdn.net/vfTtT6y3CE373NCAYWWeUK-1024-80.jpg.webp',
    alt: 'bernie-on-saturn'
  },
  {
    title: 'Elon Could Never',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://cdn.mos.cms.futurecdn.net/vfTtT6y3CE373NCAYWWeUK-1024-80.jpg.webp',
    alt: 'bernie-on-saturn'
  },
  {
    title: 'Elon Could Never',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://cdn.mos.cms.futurecdn.net/vfTtT6y3CE373NCAYWWeUK-1024-80.jpg.webp',
    alt: 'bernie-on-saturn'
  },
  {
    title: 'Elon Could Never',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://cdn.mos.cms.futurecdn.net/vfTtT6y3CE373NCAYWWeUK-1024-80.jpg.webp',
    alt: 'bernie-on-saturn'
  },
  {
    title: 'Elon Could Never',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://cdn.mos.cms.futurecdn.net/vfTtT6y3CE373NCAYWWeUK-1024-80.jpg.webp',
    alt: 'bernie-on-saturn'
  },
  {
    title: 'Elon Could Never',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://cdn.mos.cms.futurecdn.net/vfTtT6y3CE373NCAYWWeUK-1024-80.jpg.webp',
    alt: 'bernie-on-saturn'
  },
  {
    title: 'Elon Could Never',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://cdn.mos.cms.futurecdn.net/vfTtT6y3CE373NCAYWWeUK-1024-80.jpg.webp',
    alt: 'bernie-on-saturn'
  }
];

// 10 most shared articles
export const MOSTSHARED: Article[] = [
  {
    title: 'Senator Sanders Takes the Subway',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  },
  {
    title: 'Senator Sanders Takes the Subway',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  },
  {
    title: 'Senator Sanders Takes the Subway',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  },
  {
    title: 'Senator Sanders Takes the Subway',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  },
  {
    title: 'Senator Sanders Takes the Subway',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  },
  {
    title: 'Senator Sanders Takes the Subway',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  },
  {
    title: 'Senator Sanders Takes the Subway',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  },
  {
    title: 'Senator Sanders Takes the Subway',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  },
  {
    title: 'Senator Sanders Takes the Subway',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  },
  {
    title: 'Senator Sanders Takes the Subway',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  }
];
