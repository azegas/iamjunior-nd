import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import parserTypeScript from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      parser: parserTypeScript, // Use the TypeScript parser
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json', // Ensure TypeScript is linked to the tsconfig.json in your project
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginTypeScript.configs.recommended.rules,
      'no-console': 'error',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
