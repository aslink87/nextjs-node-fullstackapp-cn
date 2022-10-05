import { ComponentMeta } from '@storybook/react';
import AboutGrid from './AboutGrid';

export default {
  title: 'components/AboutGrid',
  component: AboutGrid,
} as ComponentMeta<typeof AboutGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = () => <AboutGrid />;
