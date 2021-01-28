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
    title: 'Sample Article Title',
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
export const LANDINGMAIN: Article[] = [
  {
    title: 'MET Releases Never-Before-Seen Seurat Painting',
    date: 'Jan 24, 2021 | 6 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsQd6UCXYAMFxAi?format=jpg&name=900x900',
    alt: 'bernie-in-seurat'
  },
];

// landing page small articles on the right
export const LANDINGRIGHT: Article[] = [
  {
    title: 'Why I Wish I was a Scott Tott',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    img: 'https://pbs.twimg.com/media/EsRS1vBXYAMp28p?format=jpg&name=900x900',
    alt: 'bernie-the-office'
  },
  {
    title: 'My Top Picks For Staying Cozy Sustainably',
    date: 'Jan 22, 2021 | 4 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    img: 'https://pbs.twimg.com/media/EsOnqA5XcAIk3f-?format=jpg&name=small',
    alt: 'bernie-ski-lift'
  },
  {
    title: 'Breweries Edward Hopper Would Paint Today',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    img: 'https://pbs.twimg.com/media/EsO5lbtWMAA99-B?format=jpg&name=medium',
    alt: 'bernie-edward-hopper'
  },
  {
    title: 'With a Little Help From His Friends',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/690/files/2021/01/screenshot-2021-01-21-bernie-hashtag-on-instagram-photos-and-videos.png',
    alt: 'bernie-with-friends-cast'
  },
];


// --------- POPULAR CONTENT -------------

// 10 most viewed articles
export const MOSTVIEWED: Article[] = [
  {
    title: 'MET Releases Never-Before-Seen Seurat Painting',
    date: 'Jan 24, 2021 | 6 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsQd6UCXYAMFxAi?format=jpg&name=900x900',
    alt: 'bernie-in-seurat'
  },
  {
    title: 'My Top Picks For Staying Cozy Sustainably',
    date: 'Jan 22, 2021 | 4 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsOnqA5XcAIk3f-?format=jpg&name=small',
    alt: 'bernie-ski-lift'
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
    title: 'MET Releases Never-Before-Seen Seurat Painting',
    date: 'Jan 24, 2021 | 6 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsQd6UCXYAMFxAi?format=jpg&name=900x900',
    alt: 'bernie-in-seurat'
  },
  {
    title: 'My Top Picks For Staying Cozy Sustainably',
    date: 'Jan 22, 2021 | 4 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsOnqA5XcAIk3f-?format=jpg&name=small',
    alt: 'bernie-ski-lift'
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
    title: 'MET Releases Never-Before-Seen Seurat Painting',
    date: 'Jan 24, 2021 | 6 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsQd6UCXYAMFxAi?format=jpg&name=900x900',
    alt: 'bernie-in-seurat'
  },
  {
    title: 'My Top Picks For Staying Cozy Sustainably',
    date: 'Jan 22, 2021 | 4 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsOnqA5XcAIk3f-?format=jpg&name=small',
    alt: 'bernie-ski-lift'
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
    title: 'MET Releases Never-Before-Seen Seurat Painting',
    date: 'Jan 24, 2021 | 6 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsQd6UCXYAMFxAi?format=jpg&name=900x900',
    alt: 'bernie-in-seurat'
  },
];

// 10 most commented articles
export const MOSTCOMMENTED: Article[] = [
  {
    title: 'Why I Wish I was a Scott Tott',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsRS1vBXYAMp28p?format=jpg&name=900x900',
    alt: 'bernie-the-office'
  },
  {
    title: 'Breweries Edward Hopper Would Paint Today',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsO5lbtWMAA99-B?format=jpg&name=medium',
    alt: 'bernie-edward-hopper'
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
    title: 'Why I Wish I was a Scott Tott',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsRS1vBXYAMp28p?format=jpg&name=900x900',
    alt: 'bernie-the-office'
  },
  {
    title: 'Breweries Edward Hopper Would Paint Today',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsO5lbtWMAA99-B?format=jpg&name=medium',
    alt: 'bernie-edward-hopper'
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
    title: 'Why I Wish I was a Scott Tott',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsRS1vBXYAMp28p?format=jpg&name=900x900',
    alt: 'bernie-the-office'
  },
  {
    title: 'Breweries Edward Hopper Would Paint Today',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsO5lbtWMAA99-B?format=jpg&name=medium',
    alt: 'bernie-edward-hopper'
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
    title: 'Why I Wish I was a Scott Tott',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsRS1vBXYAMp28p?format=jpg&name=900x900',
    alt: 'bernie-the-office'
  }
];

// 10 most shared articles
export const MOSTSHARED: Article[] = [
  {
    title: 'My Top 10 Beers After a Long Days Work',
    date: 'Jan 25, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsMzc3UWMAIt0Sp?format=jpg&name=medium',
    alt: 'bernie-1900s'
  },
  {
    title: 'Bernie Does Not Manspread on the L-Train. Neither Should You.',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  },
  {
    title: 'Bernie Tells Us How He Really Feels',
    date: 'Jan 22, 2021 | 5 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsQ4VB2WMAEb8rU?format=jpg&name=medium',
    alt: 'bernie-sits-cartoon'
  },
  {
    title: 'My Top 10 Beers After a Long Days Work',
    date: 'Jan 25, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsMzc3UWMAIt0Sp?format=jpg&name=medium',
    alt: 'bernie-1900s'
  },
  {
    title: 'Bernie Does Not Manspread on the L-Train. Neither Should You.',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  },
  {
    title: 'Bernie Tells Us How He Really Feels',
    date: 'Jan 22, 2021 | 5 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsQ4VB2WMAEb8rU?format=jpg&name=medium',
    alt: 'bernie-sits-cartoon'
  },
  {
    title: 'My Top 10 Beers After a Long Days Work',
    date: 'Jan 25, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsMzc3UWMAIt0Sp?format=jpg&name=medium',
    alt: 'bernie-1900s'
  },
  {
    title: 'Bernie Does Not Manspread on the L-Train. Neither Should You.',
    date: 'Jan 21, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://i.ytimg.com/vi/emOXYuIkFT8/maxresdefault.jpg',
    alt: 'bernie-on-NYC-metro'
  },
  {
    title: 'Bernie Tells Us How He Really Feels',
    date: 'Jan 22, 2021 | 5 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsQ4VB2WMAEb8rU?format=jpg&name=medium',
    alt: 'bernie-sits-cartoon'
  },
  {
    title: 'My Top 10 Beers After a Long Days Work',
    date: 'Jan 25, 2021 | 3 min read',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
        ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: 'https://pbs.twimg.com/media/EsMzc3UWMAIt0Sp?format=jpg&name=medium',
    alt: 'bernie-1900s'
  },
];
