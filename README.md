# Design System Toolkit

A comprehensive test project for streamlining design systems, design tokens, Storybook, and Chromatic integration.

![Design System Toolkit](https://via.placeholder.com/800x400?text=Design+System+Toolkit)

## 🚀 Overview

This project serves as a test environment and reference implementation for building scalable design systems with modern tools and workflows. It demonstrates how to:

- Implement and manage design tokens
- Create reusable UI components
- Document components with Storybook
- Test visual regression with Chromatic
- Establish a streamlined workflow for designers and developers

## ✨ Features

- **Design Token System**: Centralized design variables using Style Dictionary
- **Component Library**: Reusable React components built with TypeScript
- **Storybook Integration**: Interactive component documentation and testing
- **Chromatic Testing**: Visual regression testing and review workflows
- **Modern Stack**: Next.js, React, TypeScript, and CSS Modules

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Storybook](https://storybook.js.org/) - Component documentation
- [Style Dictionary](https://amzn.github.io/style-dictionary/) - Design token management
- [Chromatic](https://www.chromatic.com/) - Visual testing platform

## 🏁 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/supremeb/storybook-tutorial.git
cd storybook-tutorial

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Run the Next.js development server
npm run dev
# or
yarn dev

# Run Storybook
npm run storybook
# or
yarn storybook
```

## 📚 Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build the Next.js application
- `npm run storybook` - Start Storybook locally
- `npm run build-storybook` - Build Storybook for deployment
- `npm run chromatic` - Run Chromatic visual tests

## 🧩 Component Library

The component library includes:

- **Buttons**: Various button styles and states
- **Inputs**: Form input components
- **Alerts**: Notification components
- **Modal**: Dialog components
- **Typography**: Text components with consistent styling

## 🎨 Design Tokens

Design tokens are stored in the `src/styles` directory and are transformed using Style Dictionary. These tokens define:

- Colors
- Typography
- Spacing
- Shadows
- Borders
- Z-indices

## 📖 Documentation

Additional documentation is available in the `docs` directory:

- [Design System Guide](./docs/design-system-guide.md)
- Component documentation in Storybook

## 🧪 Testing

- **Component Testing**: Each component includes stories for testing in Storybook
- **Visual Regression**: Chromatic is used to detect visual changes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Storybook](https://storybook.js.org/)
- [Chromatic](https://www.chromatic.com/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Next.js](https://nextjs.org/)
