import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Design System/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'select', options: ['text', 'password', 'email', 'number', 'tel', 'url'] },
      description: 'The type of input',
    },
    label: {
      control: 'text',
      description: 'Input label',
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the input',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  placeholder: 'Enter your username',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Email',
  type: 'email',
  placeholder: 'Enter your email',
  helperText: 'We\'ll never share your email with anyone else.',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  error: 'Password must be at least 8 characters long',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Full Name',
  placeholder: 'Enter your full name',
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Username',
  placeholder: 'Enter your username',
  disabled: true,
  value: 'johndoe',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Username',
  value: 'johndoe',
};

export const Interactive = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    if (newValue.length < 3 && newValue.length > 0) {
      setError('Input must be at least 3 characters');
    } else {
      setError('');
    }
  };
  
  return (
    <Input
      label="Interactive Input"
      placeholder="Type at least 3 characters"
      value={value}
      error={error}
      onChange={handleChange}
    />
  );
};
