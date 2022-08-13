import { ComponentStory, ComponentMeta } from '@storybook/react';
import PrismaFetch, { IPrismaPlaygroundProps } from './PrismaFetch';
import { mockPrismaFetchProps } from './PrismaFetch.mocks';

export default {
  title: 'Prisma/prismafetch',
  component: PrismaFetch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PrismaFetch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrismaFetch> = (args) => (
  <PrismaFetch {...args as IPrismaPlaygroundProps} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPrismaFetchProps.props
};
