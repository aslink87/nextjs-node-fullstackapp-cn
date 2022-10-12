import { ComponentMeta } from '@storybook/react';
import Assistance from './Assistance';

export default {
  title: 'components/Assistance',
  component: Assistance,
} as ComponentMeta<typeof Assistance>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = () => <Assistance />;
