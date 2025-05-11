import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

export default {
  title: 'Design System/Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the modal is open',
    },
    title: {
      control: 'text',
      description: 'Modal title',
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg', 'xl'] },
      description: 'The size of the modal',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
    },
    onClose: { action: 'closed' },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);
  
  return (
    <>
      <Button 
        label="Open Modal" 
        variant="primary" 
        onClick={() => setIsOpen(true)} 
      />
      <Modal 
        {...args} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Modal Title',
  children: (
    <div>
      <p>This is a basic modal with a title and content.</p>
      <p>Click outside or press ESC to close.</p>
    </div>
  ),
  size: 'md',
  showCloseButton: true,
};

export const Small = Template.bind({});
Small.args = {
  title: 'Small Modal',
  children: (
    <div>
      <p>This is a small modal.</p>
    </div>
  ),
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  title: 'Large Modal',
  children: (
    <div>
      <p>This is a large modal with more content.</p>
      <p>It has a larger width to accommodate more content.</p>
    </div>
  ),
  size: 'lg',
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  children: (
    <div>
      <p>This modal has no title, only content.</p>
    </div>
  ),
};

export const WithForm = Template.bind({});
WithForm.args = {
  title: 'Contact Form',
  size: 'md',
  children: (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
        <input 
          type="text" 
          style={{ 
            width: '100%', 
            padding: '0.5rem 0.75rem', 
            border: '1px solid #DEE2E6', 
            borderRadius: '0.25rem',
            fontSize: '1rem',
          }} 
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
        <input 
          type="email" 
          style={{ 
            width: '100%', 
            padding: '0.5rem 0.75rem', 
            border: '1px solid #DEE2E6', 
            borderRadius: '0.25rem',
            fontSize: '1rem',
          }} 
        />
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
        <textarea 
          rows={4} 
          style={{ 
            width: '100%', 
            padding: '0.5rem 0.75rem', 
            border: '1px solid #DEE2E6', 
            borderRadius: '0.25rem',
            fontSize: '1rem',
          }} 
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
        <Button label="Cancel" variant="tertiary" />
        <Button label="Submit" variant="primary" />
      </div>
    </div>
  ),
};

export const ConfirmationDialog = Template.bind({});
ConfirmationDialog.args = {
  title: 'Confirm Action',
  size: 'sm',
  children: (
    <div>
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.5rem' }}>
        <Button label="Cancel" variant="tertiary" />
        <Button label="Delete" variant="danger" />
      </div>
    </div>
  ),
};
