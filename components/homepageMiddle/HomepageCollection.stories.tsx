import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomepageCollection from './HomepageCollection';

export default {
  title: 'components/HomepageCollection',
  component: HomepageCollection,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HomepageCollection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomepageCollection> = () => (
  <HomepageCollection />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
