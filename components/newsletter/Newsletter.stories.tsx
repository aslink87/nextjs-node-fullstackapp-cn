import { ComponentStory, ComponentMeta } from '@storybook/react';
import Newsletter from './Newsletter';
import { INewslettersData } from '../../pages/newsletter';
import { mockNewsletterProps } from './Newsletter.mocks';

export default {
  title: 'components/Newsletter',
  component: Newsletter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Newsletter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Newsletter> = (args) => (
  <Newsletter {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNewsletterProps.base,
} as INewslettersData;
