import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Design System/Card',
  component: Card,
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the card has a hover effect',
    },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  children: (
    <p>This is a basic card component that can be used to display content in a contained box.</p>
  ),
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  children: (
    <p>This card has no title. It only contains body content.</p>
  ),
};

export const Hoverable = Template.bind({});
Hoverable.args = {
  title: 'Hoverable Card',
  hoverable: true,
  children: (
    <p>Hover over this card to see the elevation effect.</p>
  ),
};

export const Clickable = Template.bind({});
Clickable.args = {
  title: 'Clickable Card',
  hoverable: true,
  children: (
    <p>Click this card to trigger the onClick event.</p>
  ),
  onClick: () => alert('Card clicked!'),
};

export const ComplexContent = Template.bind({});
ComplexContent.args = {
  title: 'Card with Complex Content',
  children: (
    <div>
      <p>Cards can contain various types of content:</p>
      <ul>
        <li>Text and typography</li>
        <li>Images and media</li>
        <li>Lists and tables</li>
        <li>Other components</li>
      </ul>
      <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '0.25rem' }}>
        <code>This is a code block inside a card</code>
      </div>
    </div>
  ),
};
