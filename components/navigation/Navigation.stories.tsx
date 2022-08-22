import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavigationBar, { navLinks } from './Navigation';

export default {
  title: 'component/Navigation',
  component: NavigationBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NavigationBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavigationBar> = () => (
  <NavigationBar />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...navLinks,
};
