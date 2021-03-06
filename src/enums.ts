export enum ApiKeys {
  Analytics = 'UA-131052445-1',
}

export enum ShareLinks {
  Facebook = 'https://www.facebook.com/sharer/sharer.php?u=',
  Twitter = 'https://twitter.com/intent/tweet?text=Super%20Linkomanija&url=',
}

export enum LinkomanijaSelectors {
  CommentTextBoxes = 'form > textarea',
  TorrentTable = '#content form[action="browse.php"] > table:not(.bottom)',
  TorrentTableRows = '#content form[action="browse.php"] > table:not(.bottom) tr',
  TorrentTableTitleColumn = '#content form[action="browse.php"] > table tr td[align="left"]:not([class])',
}

export enum ViewModes {
  List,
  Grid,
}

export enum ChromeStorageKeys {
  Locale = 'sm-locale',
  Features = 'sm-features',
  History = 'sm-history',
}

export enum Locales {
  English = 'en',
  Lithuanian = 'lt',
}

export enum Browsers {
  Chrome = 'chrome',
  Firefox = 'firefox',
  Opera = 'opera',
  Vivaldi = 'vivaldi',
  Other = 'other',
}
