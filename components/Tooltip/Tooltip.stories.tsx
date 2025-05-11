import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

export default {
  title: 'Design System/Tooltip',
  component: Tooltip,
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip content',
    },
    position: {
      control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] },
      description: 'The position of the tooltip',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
        {Story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is a tooltip',
  children: <Button label="Hover me" variant="primary" />,
  position: 'top',
};

export const Top = Template.bind({});
Top.args = {
  content: 'Tooltip on top',
  children: <Button label="Tooltip on top" variant="primary" />,
  position: 'top',
};

export const Right = Template.bind({});
Right.args = {
  content: 'Tooltip on right',
  children: <Button label="Tooltip on right" variant="primary" />,
  position: 'right',
};

export const Bottom = Template.bind({});
Bottom.args = {
  content: 'Tooltip on bottom',
  children: <Button label="Tooltip on bottom" variant="primary" />,
  position: 'bottom',
};

export const Left = Template.bind({});
Left.args = {
  content: 'Tooltip on left',
  children: <Button label="Tooltip on left" variant="primary" />,
  position: 'left',
};

export const WithLongContent = Template.bind({});
WithLongContent.args = {
  content: 'This is a tooltip with a longer description that might wrap to multiple lines. Tooltips are useful for providing additional context or explanations.',
  children: <Button label="Hover for more info" variant="secondary" />,
  position: 'top',
};

export const WithHTMLContent = Template.bind({});
WithHTMLContent.args = {
  content: (
    <div>
      <strong>Rich Tooltip</strong>
      <p>Tooltips can contain formatted content:</p>
      <ul style={{ margin: '0.25rem 0 0 1rem', padding: 0, textAlign: 'left' }}>
        <li>Multiple paragraphs</li>
        <li>Lists of items</li>
        <li>Formatted text</li>
      </ul>
    </div>
  ),
  children: <Button label="Hover for rich tooltip" variant="primary" />,
  position: 'bottom',
};

export const OnDifferentElements = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Tooltip content="Tooltip on a button" position="top">
      <Button label="Button with tooltip" variant="primary" />
    </Tooltip>
    
    <Tooltip content="Tooltip on a text element" position="top">
      <span style={{ cursor: 'help', textDecoration: 'underline', textDecorationStyle: 'dotted' }}>
        Hover this text
      </span>
    </Tooltip>
    
    <Tooltip content="Tooltip on an icon" position="top">
      <span style={{ cursor: 'help', fontSize: '1.5rem' }}>ℹ️</span>
    </Tooltip>
  </div>
);
