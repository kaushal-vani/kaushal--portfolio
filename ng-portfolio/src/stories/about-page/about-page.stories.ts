import type { Meta, StoryObj } from '@storybook/angular';
import { AboutPageComponent } from './about-page.component';

const meta: Meta<AboutPageComponent> = {
  title: 'Portfolio/About-Page',
  component: AboutPageComponent,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<AboutPageComponent>;

export const Content: Story = {};
