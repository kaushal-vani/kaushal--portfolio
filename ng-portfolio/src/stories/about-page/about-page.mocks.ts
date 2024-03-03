import type { Card } from './about-page.models';

const AngularCardMock: Card = {
  icon_path: '../../assets/angular.svg',
  alt_text: 'Angular Card Logo',
  title: 'Angular',
  meta: 'TypeScript-based open-source web application framework',
  description:
    'Angular is a  application framework that empowers developers to build dynamic, single-page applications with a strong emphasis on modular and declarative programming. It provides a robust structure for creating scalable and maintainable web applications.',
};

const ScssCardMock: Card = {
  icon_path: '../../assets/scss.svg',
  alt_text: 'Scss Card Logo',
  title: 'Scss',
  meta: 'Stylesheet Enhancement',
  description:
    'SCSS is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It adds functionality such as variables, nesting, and mixins to improve the organization and maintainability of stylesheets.',
};

const HtmlCardMock: Card = {
  icon_path: '../../assets/html.svg',
  alt_text: 'HTML',
  title: 'HTML',
  meta: 'Web Markup Language',
  description:
    'HTML, or HyperText Markup Language, is the standard language for creating and structuring web content. It uses tags to define elements, ensuring the proper display and organization of text, images, links, and other resources on the internet.',
};

const GitHubCardMock: Card = {
  icon_path: '../../assets/github.svg',
  alt_text: 'GitHub Card Logo',
  title: 'GitHub',
  meta: 'Collaborative Version Control',
  description:
    'GitHub is a web-based platform for version control and collaborative software development using Git. It provides features for code hosting, project management, and collaboration tools, fostering teamwork and streamlined development workflows.',
};

const JestCardMock: Card = {
  icon_path: '../../assets/jest.svg',
  alt_text: 'Jest Card Logo',
  title: 'Jest',
  meta: 'JavaScript Testing',
  description:
    'Jest is a JavaScript testing framework renowned for its simplicity and ease of use. It streamlines unit and integration testing with a zero-config approach, offering a comprehensive testing environment. Jest enhances code reliability through features like snapshot testing and parallel test execution.',
};

const NgrxCardMock: Card = {
  icon_path: '../../assets/ngrx.svg',
  alt_text: 'Ngrx Card Logo',
  title: 'Ngrx',
  meta: 'Angular State Management.',
  description:
    'NgRx is a state management library for Angular applications, implementing reactive programming principles with a unidirectional data flow. It centralizes and manages the state of an application, enhancing predictability and maintainability in complex Angular projects.',
};

const RxjsCardMock: Card = {
  icon_path: '../../assets/rxjs.svg',
  alt_text: 'Rxjs Card Logo',
  title: 'Rxjs',
  meta: 'Reactive Programming',
  description:
    'RxJS is a reactive programming library for JavaScript, facilitating the creation of asynchronous and event-driven applications through Observables. It simplifies complex asynchronous code by providing a powerful and composable way to handle events, sequences, and data streams.',
};

const StoryBookCardMock: Card = {
  icon_path: '../../assets/storybook.svg',
  alt_text: 'Storybook Card Logo',
  title: 'Storybook',
  meta: 'Component Development & Documentation.',
  description:
    'Storybook is an open-source tool for developing UI components in isolation, providing a sandbox environment for building and testing interactive user interface elements. It enhances component development by facilitating design, documentation, and collaboration.',
};

const TypeScriptCardMock: Card = {
  icon_path: '../../assets/typescript.svg',
  alt_text: 'Typescript Card Logo',
  title: 'Typescript',
  meta: 'Static Typing',
  description:
    'TypeScript, a statically typed superset of JavaScript, introduces optional static typing and additional features for enhanced code reliability. It aids in early error detection and strengthens the robustness of JavaScript applications.',
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
