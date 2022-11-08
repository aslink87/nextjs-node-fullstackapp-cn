import { ComponentStory, ComponentMeta } from '@storybook/react';
import PantryCalendarComponent from './PantryCalendar';
import { IPantryCalendarData } from '../../pages/pantryCalendar';
import { mockPantryCalendarProps } from './PantryCalendar.mocks';

export default {
  title: 'components/PantryCalendar',
  component: PantryCalendarComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PantryCalendarComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PantryCalendarComponent> = (args) => (
  <PantryCalendarComponent {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPantryCalendarProps.base,
} as IPantryCalendarData;
