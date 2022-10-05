import { ComponentMeta } from '@storybook/react';
import AboutC from './AboutC';

export default {
  title: 'components/AboutC',
  component: AboutC,
} as ComponentMeta<typeof AboutC>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = () => <AboutC />;
