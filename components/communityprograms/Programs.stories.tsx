import { ComponentMeta } from '@storybook/react';
import Programs from './Programs';

export default {
  title: 'components/Programs',
  component: Programs,
} as ComponentMeta<typeof Programs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = () => <Programs />;
