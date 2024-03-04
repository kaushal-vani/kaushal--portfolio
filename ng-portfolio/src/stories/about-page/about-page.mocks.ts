import type { Card } from './about-page.models';

const AngularCardMock: Card = {
  icon_path: '../../assets/tech-stack/angular.svg',
  alt_text: 'Angular Card Logo',
  title: 'Angular',
  meta: 'TypeScript-based open-source web application framework',
  description: '',
};

const ScssCardMock: Card = {
  icon_path: '../../assets/tech-stack/scss.svg',
  alt_text: 'Scss Card Logo',
  title: 'Scss',
  meta: 'Stylesheet Enhancement',
  description: '',
};

const HtmlCardMock: Card = {
  icon_path: '../../assets/tech-stack/html.svg',
  alt_text: 'HTML',
  title: 'HTML',
  meta: 'Web Markup Language',
  description: '',
};

const GitHubCardMock: Card = {
  icon_path: '../../assets/tech-stack/github.svg',
  alt_text: 'GitHub Card Logo',
  title: 'GitHub',
  meta: 'Collaborative Version Control',
  description: '',
};

const JestCardMock: Card = {
  icon_path: '../../assets/tech-stack/jest.svg',
  alt_text: 'Jest Card Logo',
  title: 'Jest',
  meta: 'JavaScript Testing',
  description: '',
};

const NgrxCardMock: Card = {
  icon_path: '../../assets/tech-stack/ngrx.svg',
  alt_text: 'Ngrx Card Logo',
  title: 'Ngrx',
  meta: 'Angular State Management.',
  description: '',
};

const RxjsCardMock: Card = {
  icon_path: '../../assets/tech-stack/rxjs.svg',
  alt_text: 'Rxjs Card Logo',
  title: 'Rxjs',
  meta: 'Reactive Programming',
  description: '',
};

const StoryBookCardMock: Card = {
  icon_path: '../../assets/tech-stack/storybook.svg',
  alt_text: 'Storybook Card Logo',
  title: 'Storybook',
  meta: 'Component Development & Documentation.',
  description: '',
};

const TypeScriptCardMock: Card = {
  icon_path: '../../assets/tech-stack/typescript.svg',
  alt_text: 'Typescript Card Logo',
  title: 'Typescript',
  meta: 'Static Typing',
  description: '',
};

const AboutPageCardMocks: Card[] = Object.values({
  html: HtmlCardMock,
  scss: ScssCardMock,
  typeScript: TypeScriptCardMock,
  angular: AngularCardMock,
  storyBook: StoryBookCardMock,
  gitHub: GitHubCardMock,
  jest: JestCardMock,
  ngrx: NgrxCardMock,
  rxjs: RxjsCardMock,
});

export { AboutPageCardMocks };
