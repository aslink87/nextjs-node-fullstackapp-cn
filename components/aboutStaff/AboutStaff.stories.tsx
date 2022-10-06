import { ComponentMeta } from '@storybook/react';
import AboutStaff from './AboutStaff';

export default {
  title: 'components/AboutStaff',
  component: AboutStaff,
} as ComponentMeta<typeof AboutStaff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = () => <AboutStaff />;
