import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ICalendarProps } from 'pages/calendar';
import Calendar from './Calendar';
import { mockCalendarProps } from './Calendar.mocks';

export default {
  title: 'components/Calendar',
  component: Calendar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Calendar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCalendarProps.base,
} as ICalendarProps;
