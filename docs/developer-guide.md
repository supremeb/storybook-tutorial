# Developer Guide: Working with the Design System

## Introduction

This guide provides technical information for developers working with our design system. It covers how to use design tokens, implement components, and ensure accessibility compliance.

## Setup and Installation

Our design system is built with:

- **Storybook 8.6.12**: For component development and documentation
- **Next.js 13.5.6**: As the underlying framework
- **CSS Variables**: For design token implementation
- **Chromatic**: For visual testing and review

To get started:

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Publish to Chromatic
npm run chromatic
```

## Design Token Implementation

### CSS Variables Architecture

Our design tokens are implemented as CSS variables in a three-tiered system:

1. **Base/Primitive Tokens**: Raw values (colors, spacing, etc.)
2. **Semantic Tokens**: Meaningful names referencing primitives
3. **Component Tokens**: Component-specific variables referencing semantic tokens

This layering provides flexibility and maintainability:

```css
/* Base token */
--color-blue-500: #0066FF;

/* Semantic token */
--color-brand-primary: var(--color-blue-500);

/* Component token */
--button-primary-background: var(--color-brand-primary);
```

### Using Tokens in Components

Always use the most specific token available for your use case:

```css
/* Good: Using a component token */
.button {
  background-color: var(--button-primary-background);
}

/* Good: Using a semantic token when no component token exists */
.custom-element {
  color: var(--color-text-primary);
}

/* Avoid: Using base tokens directly */
.element {
  color: var(--color-gray-900); /* Should use --color-text-primary instead */
}
```

## Component Development

### Component Structure

Each component follows a consistent structure:

```
components/
└── ComponentName/
    ├── ComponentName.tsx      # Component implementation
    ├── ComponentName.css      # Component styles
    └── ComponentName.stories.tsx  # Storybook stories
```

### Component Implementation Best Practices

1. **Props Interface**: Define a clear props interface with JSDoc comments
2. **Accessibility**: Include appropriate ARIA attributes
3. **Composition**: Use composition over inheritance
4. **CSS Classes**: Follow BEM naming convention
5. **Responsive Design**: Ensure components work across device sizes

Example component implementation:

```tsx
import React from 'react';
import './Button.css';

export interface ButtonProps {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Button label
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Accessible label when needed
   */
  ariaLabel?: string;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  label,
  onClick,
  ariaLabel,
  ...props
}: ButtonProps) => {
  const baseClass = 'ds-button';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`
  ].join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {label}
    </button>
  );
};
```

## Accessibility Implementation

### Accessibility Standards

All components must meet WCAG 2.1 AA standards:

1. **Perceivable**: Information must be presentable to users in ways they can perceive
2. **Operable**: Interface components must be operable
3. **Understandable**: Information and operation must be understandable
4. **Robust**: Content must be robust enough to be interpreted by a variety of user agents

### Accessibility Checklist

For each component, ensure:

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Management**: Focus states are visible and logical
- **Screen Reader Support**: Appropriate ARIA attributes and semantic HTML
- **Color Contrast**: Text meets 4.5:1 contrast ratio (AA)
- **Touch Targets**: Interactive elements have adequate size (at least 44x44px)
- **Text Alternatives**: Images and icons have text alternatives

### Implementing Accessible Components

Example of accessibility features in a component:

```tsx
// Screen reader only text
<div className="sr-only">Additional information for screen readers</div>

// Loading state announcement
<div aria-live="polite" role="status">Loading complete</div>

// Focus management
<button className="ds-button" onFocus={handleFocus}>Click me</button>

// ARIA attributes
<button aria-expanded={isOpen} aria-controls="menu-id">Menu</button>
```

## Testing Components

### Unit Testing

Use Jest and React Testing Library for component testing:

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renders button with correct label', () => {
  render(<Button label="Click me" />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button label="Click me" onClick={handleClick} />);
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Visual Testing

We use Chromatic for visual regression testing:

```bash
npm run chromatic
```

### Accessibility Testing

Use the Storybook a11y addon to test accessibility:

1. View a component in Storybook
2. Navigate to the "Accessibility" tab
3. Review violations and warnings
4. Fix issues in the component implementation

## Extending the Design System

### Adding New Tokens

To add new design tokens:

1. Add the token to `src/styles/tokens.css` in the appropriate section
2. Follow the established naming convention
3. Add documentation comments
4. Update any related components

### Creating New Components

To add a new component:

1. Create a new directory in `components/`
2. Create the component files (TSX, CSS, stories)
3. Use existing design tokens
4. Document the component with JSDoc comments
5. Add Storybook stories for all variants and states
6. Test for accessibility compliance

## Troubleshooting

### Common Issues

1. **CSS Variables Not Applied**: Check for typos in variable names
2. **Component Styling Inconsistencies**: Ensure you're using the correct tokens
3. **Accessibility Violations**: Use the a11y addon to identify and fix issues
4. **Storybook Rendering Issues**: Check for missing dependencies or props

## Conclusion

This design system provides a robust foundation for building accessible, consistent, and maintainable user interfaces. By following these guidelines, you'll contribute to a cohesive product experience while ensuring accessibility for all users.

For more information, refer to the [Design System Guide](./design-system-guide.md) for a designer's perspective on our token system.
