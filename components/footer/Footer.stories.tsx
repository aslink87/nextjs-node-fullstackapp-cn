import { ComponentMeta } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = () => <Footer />;
