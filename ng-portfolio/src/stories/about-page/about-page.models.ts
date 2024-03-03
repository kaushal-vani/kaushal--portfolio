export interface Card {
  icon_path: string;
  alt_text: string;
  title: string;
  meta: string;
  description: string;
}

export interface AboutPageCard {
  angular: Card;
  scss: Card;
  html: Card;
  gitHub: Card;
  jest: Card;
  ngrx: Card;
  rxjs: Card;
  storyBook: Card;
  typeScript: Card;
}
