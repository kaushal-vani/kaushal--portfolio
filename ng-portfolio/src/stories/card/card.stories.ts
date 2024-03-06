import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Portfolio/Card',
  component: CardComponent,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Content: Story = (args: CardComponent) => ({
  props: args,
  template: `
    <app-card
      [imageUrl]="imageUrl"
      [title]="title"
      [altText]="altText"
      [description]="description"
    ></app-card>
  `,
});

Content.args = {
  imageUrl: '../../assets/angular.svg',
  title: 'Angular',
  altText: 'Angular Card Logo',
  description:
    'Angular is a powerful open-source web application framework for building dynamic, single-page applications with a focus on modular and declarative programming.',
};

Content.argTypes = {
  imageUrl: {
    control: {
      type: 'text',
    },
    onChange: (value: string, { args }: { args: CardComponent; argTypes: Record<string, unknown> }) => {
      // Update other args based on imageUrl change if needed
      args.title = `Card with ${value}`;
      args.altText = `Alt Text for ${value}`;
      args.description = `Description for ${value}`;
      return args;
    },
  },
};
