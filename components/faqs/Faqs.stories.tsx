import { ComponentMeta } from '@storybook/react';
import Faqs from './Faqs';

export default {
  title: 'components/Faqs',
  component: Faqs,
} as ComponentMeta<typeof Faqs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = () => <Faqs />;
