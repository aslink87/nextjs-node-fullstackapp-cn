import { ComponentMeta } from '@storybook/react';
import AdminComponent from './Admin';

export default {
  title: 'components/Admin',
  component: AdminComponent,
} as ComponentMeta<typeof AdminComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = () => <AdminComponent />;
