import React from 'react';
import { ComponentMeta } from '@storybook/react';
import NavigationBar from './Navigation';

export default {
  title: 'component/Navigation',
  component: NavigationBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof NavigationBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = () => <NavigationBar />;
