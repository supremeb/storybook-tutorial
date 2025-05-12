// Import our design tokens and global styles
import '../src/styles/main.css';

// Import component CSS files
import '../components/Button/Button.css';
import '../components/Alert/Alert.css';
import '../components/Card/Card.css';
import '../components/Modal/Modal.css';
import '../components/Badge/Badge.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'gray',
          value: '#F8F9FA',
        },
        {
          name: 'dark',
          value: '#212529',
        },
      ],
    },
  },
};

export default preview;