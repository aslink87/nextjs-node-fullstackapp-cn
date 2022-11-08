import { ComponentStory, ComponentMeta } from '@storybook/react';
import BlogComponent from './Blog';
import { mockBlogProps } from './Blog.mocks';
import { IBlogData } from '../../pages/blog';

export default {
  title: 'components/Blog',
  component: BlogComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BlogComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BlogComponent> = (args) => (
  <BlogComponent {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = { ...mockBlogProps.base } as IBlogData;
