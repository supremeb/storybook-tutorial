import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Design System/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary', 'tertiary', 'danger'] },
      description: 'The visual style of the button',
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
      description: 'The size of the button',
    },
    label: {
      control: 'text',
      description: 'Button text content',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
    },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  label: 'Tertiary Button',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  label: 'Danger Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Small Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  label: 'Medium Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Large Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled Button',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  label: 'Loading Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'With Icon',
  icon: <span role="img" aria-label="rocket">🚀</span>,
};
