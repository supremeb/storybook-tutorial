import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'Design System/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: 'text',
      description: 'Avatar image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the avatar image',
    },
    initials: {
      control: 'text',
      description: 'Fallback initials when image is not available',
    },
    size: {
      control: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
      description: 'The size of the avatar',
    },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'https://randomuser.me/api/portraits/women/44.jpg',
  alt: 'Jane Doe',
  size: 'md',
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  initials: 'JD',
  size: 'md',
};

export const Fallback = Template.bind({});
Fallback.args = {
  size: 'md',
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  initials: 'XS',
  size: 'xs',
};

export const Small = Template.bind({});
Small.args = {
  initials: 'SM',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  initials: 'MD',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  initials: 'LG',
  size: 'lg',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  initials: 'XL',
  size: 'xl',
};

export const Clickable = Template.bind({});
Clickable.args = {
  initials: 'JD',
  size: 'md',
  onClick: () => alert('Avatar clicked!'),
};

export const AvatarGroup = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ marginRight: '-8px', zIndex: 5 }}>
      <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" size="md" />
    </div>
    <div style={{ marginRight: '-8px', zIndex: 4 }}>
      <Avatar src="https://randomuser.me/api/portraits/men/43.jpg" size="md" />
    </div>
    <div style={{ marginRight: '-8px', zIndex: 3 }}>
      <Avatar initials="AB" size="md" />
    </div>
    <div style={{ marginRight: '-8px', zIndex: 2 }}>
      <Avatar initials="CD" size="md" />
    </div>
    <div style={{ zIndex: 1 }}>
      <Avatar initials="+3" size="md" />
    </div>
  </div>
);
