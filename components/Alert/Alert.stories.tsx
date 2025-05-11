import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from './Alert';

export default {
  title: 'Design System/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['success', 'warning', 'error', 'info'] },
      description: 'The visual style of the alert',
    },
    title: {
      control: 'text',
      description: 'Alert title',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
    onDismiss: { action: 'dismissed' },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  title: 'Success',
  children: 'Your changes have been saved successfully.',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  title: 'Warning',
  children: 'There are unsaved changes that will be lost if you navigate away.',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  title: 'Error',
  children: 'An error occurred while saving your changes. Please try again.',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  title: 'Information',
  children: 'Your account will be updated in the next 24 hours.',
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  variant: 'info',
  children: 'This is an alert without a title.',
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  variant: 'success',
  title: 'Dismissible Alert',
  children: 'Click the X button to dismiss this alert.',
  dismissible: true,
};

export const LongContent = Template.bind({});
LongContent.args = {
  variant: 'info',
  title: 'Alert with Long Content',
  children: (
    <>
      <p>This alert contains a longer message with multiple paragraphs.</p>
      <p>Alerts can contain various types of content, including paragraphs, lists, and other elements.</p>
      <ul>
        <li>Important information</li>
        <li>Warnings about potential issues</li>
        <li>Success messages after completing actions</li>
      </ul>
    </>
  ),
};

export const Interactive = () => {
  const [visible, setVisible] = useState(true);
  
  if (!visible) {
    return (
      <button 
        onClick={() => setVisible(true)}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#0066FF',
          color: 'white',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: 'pointer',
        }}
      >
        Show Alert Again
      </button>
    );
  }
  
  return (
    <Alert
      variant="warning"
      title="Interactive Alert"
      dismissible
      onDismiss={() => setVisible(false)}
    >
      This alert can be dismissed by clicking the X button. You can then show it again with the button.
    </Alert>
  );
};
