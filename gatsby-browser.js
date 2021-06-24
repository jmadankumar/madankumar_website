/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { ThemeProvider, useThemeContext } from './src/context/ThemeContext';
import 'tailwindcss/dist/tailwind.css';
import 'prism-themes/themes/prism-atom-dark.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import './src/scss/index.css';

export function wrapRootElement({ element }) {
  return <ThemeProvider>{element}</ThemeProvider>;
}
