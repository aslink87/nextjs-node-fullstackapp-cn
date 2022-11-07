import { ComponentMeta } from '@storybook/react';
import ChurchPartners from './ChurchPartners';

export default {
  title: 'components/ChurchPartners',
  component: ChurchPartners,
} as ComponentMeta<typeof ChurchPartners>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = () => <ChurchPartners />;
