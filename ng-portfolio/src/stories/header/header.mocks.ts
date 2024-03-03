import type { HeaderContent, Logo } from './header.models';

const LogoMocks: Logo = {
  icon_url: 'https://img.icons8.com/ios/50/program.png',
  alt_text: 'PortFolio Logo',
};

const ChatBotMocks: Logo = {
  icon_url: 'https://www.svgrepo.com/show/339963/chat-bot.svg',
  alt_text: 'PortFolio Logo',
};

const HeaderContentMocks: HeaderContent = {
  heading: "Kaushal's Portfolio",
  logo: LogoMocks,
  chatBot: ChatBotMocks,
};

export { HeaderContentMocks };
