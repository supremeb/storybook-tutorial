# Design System Guide

## Introduction

This document provides a comprehensive guide to our design system from a designer's perspective. It covers our token naming conventions, structure, and best practices for maintaining design consistency across our products.

## Design Token Architecture

Our design system follows a three-layered token architecture that creates a clear separation of concerns and makes the system both flexible and maintainable:

1. **Base/Primitive Tokens**: Raw values that form the foundation
2. **Semantic Tokens**: Meaningful names that reference primitive tokens
3. **Component Tokens**: Component-specific variables that reference semantic tokens

This layered approach allows for easy theming, ensures consistency, and creates a clear mental model for both designers and developers.

## Token Naming Conventions

### Prefix-Category-Property Pattern

We use a consistent naming pattern for all tokens:

```
--category-[subcategory]-property[-modifier]
```

Examples:
- `--color-blue-500`
- `--font-size-lg`
- `--spacing-4`
- `--button-primary-background`

### Base/Primitive Tokens

Base tokens use simple, descriptive names that clearly indicate their value:

#### Colors

Colors follow a consistent pattern with a color name and a numeric scale (50-900) indicating lightness/darkness:

```css
--color-blue-50: #E6F0FF;  /* Lightest blue */
--color-blue-500: #0066FF; /* Primary blue */
--color-blue-900: #001433; /* Darkest blue */
```

The numeric scale follows a consistent pattern:
- 50-100: Very light shades, often used for backgrounds
- 200-400: Light to medium shades
- 500: The "primary" shade of the color
- 600-700: Darker shades, often used for hover/active states
- 800-900: Very dark shades, used for text or high contrast elements

#### Typography

Typography tokens are organized by property:

```css
--font-family-sans: 'Inter', -apple-system, ...;
--font-size-md: 1rem;      /* 16px - Base body text */
--font-weight-bold: 700;
--line-height-tight: 1.25;
```

#### Spacing

Spacing follows a numeric scale where each increment represents a consistent step:

```css
--spacing-0: 0;           /* No spacing */
--spacing-1: 0.25rem;     /* 4px - Tiny spacing */
--spacing-4: 1rem;        /* 16px - Base spacing */
```

### Semantic Tokens

Semantic tokens provide meaning to the base tokens and create a vocabulary for your design system:

```css
--color-text-primary: var(--color-gray-900);
--color-background-brand: var(--color-blue-500);
--spacing-component-md: var(--spacing-4);
```

### Component Tokens

Component tokens are specific to individual components and reference semantic tokens:

```css
--button-primary-background: var(--color-brand-primary);
--button-primary-color: var(--color-text-inverse);
--button-size-md-padding: var(--spacing-component-xs) var(--spacing-component-md);
```

## Accessibility Considerations

Our design system prioritizes accessibility with specific tokens for:

- **Focus states**: `--color-focus` ensures visible focus indicators
- **Color contrast**: Color pairings are tested to meet WCAG AA standards
- **Text sizes**: Font sizes maintain readability standards
- **Interactive elements**: Touch targets meet minimum size requirements

## Using Design Tokens in Design Tools

### Figma

Our design tokens are implemented as Figma variables, organized into collections that mirror our token structure:

1. **Base Collection**: Contains all primitive tokens
2. **Semantic Collection**: Contains all semantic tokens
3. **Component Collection**: Contains component-specific tokens

### Design-to-Development Workflow

1. **Design in Figma**: Use variables that correspond to our token system
2. **Export Designs**: Use the Figma Tokens plugin to export token values
3. **Transform**: Use Style Dictionary to transform design tokens into platform-specific variables
4. **Implement**: Developers use the generated CSS variables in components

## Extending the Design System

### Adding New Base Tokens

When adding new base tokens:
1. Ensure they follow the established naming convention
2. Place them in the appropriate category
3. Document their intended use
4. Update both code and design tool implementations

### Adding New Components

When creating new components:
1. Use existing semantic tokens whenever possible
2. Create component-specific tokens that reference semantic tokens
3. Document component variants and states
4. Ensure accessibility compliance

## Best Practices

1. **Never use hard-coded values** in designs or code; always reference tokens
2. **Use semantic tokens** over base tokens whenever possible
3. **Maintain the token hierarchy** to ensure consistency and flexibility
4. **Document token usage** to help the team understand the purpose of each token
5. **Test for accessibility** to ensure all designs meet WCAG standards

## Viewing the Design System

Our design system is available in:

1. **Storybook**: For interactive component exploration and documentation
2. **Chromatic**: For visual testing and review
3. **Figma**: For design assets and token libraries

## Conclusion

This design token system creates a shared language between designers and developers, ensuring consistency across our product while maintaining flexibility for future growth and changes. By following these conventions and best practices, we can create cohesive, accessible, and maintainable user experiences.
