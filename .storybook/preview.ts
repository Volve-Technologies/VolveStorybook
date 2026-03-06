import type { Preview } from '@storybook/react-vite';
import '../src/app/ui/style.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: { autodocs: 'tag' },
    a11y: {
      test: 'todo',
    },
  },
  argTypes: {
    children: { control: false },
  },
};

export default preview;
