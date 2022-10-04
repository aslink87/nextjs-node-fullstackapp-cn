import { ComponentMeta } from '@storybook/react';
import AboutTop from './AboutTop';

export default {
  title: 'components/AboutTop',
  component: AboutTop,
} as ComponentMeta<typeof AboutTop>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = () => <AboutTop />;
