import { dirname } from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import nextPlugin from 'eslint-config-next/core-web-vitals';
import prettierConfig from 'eslint-config-prettier';
import nextRecommended from 'eslint-plugin-next-recommended';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [
  {
    ignores: [
      '**/.*.js',
      '**/node_modules/**',
      '**/dist/**',
      'tailwind.config.ts',
      'jest.config.ts',
      'eslint.config.mjs',
    ],
  },
  js.configs.recommended,
  ...nextPlugin,
  prettierConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      'next-recommended': nextRecommended,
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      'no-undef': 'off',
      'no-var': 'error',
      'no-multiple-empty-lines': 'error',
      'no-console': 'error',
      'no-unused-vars': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      'next-recommended/require-use-client': 'error',
      'next-recommended/unnecessarily-client-declaration': 'warn',
      'next-recommended/async-component-no-hooks': 'error',
      'next-recommended/async-server-actions': 'error',
      'next-recommended/async-exported-server-actions': 'error',
      'next-recommended/export-server-actions-only': 'error',
    },
  },
];

export default eslintConfig;
