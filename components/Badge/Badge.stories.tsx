import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from './Badge';

export default {
  title: 'Design System/Badge',
  component: Badge,
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge text content',
    },
    variant: {
      control: { type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'] },
      description: 'The visual style of the badge',
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'New',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Beta',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  label: 'Completed',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  label: 'Pending',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  label: 'Failed',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  label: 'Info',
};

export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Badge variant="primary" label="Primary" />
    <Badge variant="secondary" label="Secondary" />
    <Badge variant="success" label="Success" />
    <Badge variant="warning" label="Warning" />
    <Badge variant="error" label="Error" />
    <Badge variant="info" label="Info" />
  </div>
);
