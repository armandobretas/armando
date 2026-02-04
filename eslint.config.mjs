import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',

      // Forçar aspas simples
      quotes: ['error', 'single'],

      // Forçar semicolon sempre
      semi: ['error', 'always'],

      // Controlar vírgulas trailing - sempre em multi-linha
      'comma-dangle': ['error', 'always-multiline'],

      // Forçar parênteses em arrow functions
      'arrow-parens': ['error', 'always'],

      // Comprimento máximo de linha
      'max-len': [
        'error',
        {
          code: 120,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreComments: true,
        },
      ],

      // Temporariamente desabilitar aspas duplas não escapadas
      'react/no-unescaped-entities': 'off',

      // Bloquear console.log e métodos perigosos
      'no-console': [
        'error',
        {
          allow: ['warn', 'info', 'debug'],
        },
      ],

      // Bloquear alert e confirm (forçar uso do Sonner)
      'no-restricted-globals': [
        'error',
        {
          name: 'alert',
          message:
            'Use toast.success() ou toast.error() do Sonner em vez de alert()',
        },
        {
          name: 'confirm',
          message:
            'Use toast com ação ou Dialog do shadcn/ui em vez de confirm()',
        },
      ],

      // Bloquear URLs hardcoded específicas
      'no-restricted-syntax': [
        'error',
        {
          selector:
            'CallExpression[callee.object.name="window"][callee.property.name="open"] > Literal[value*="https://"]',
          message:
            'URLs hardcoded em window.open() não são permitidas. Use variáveis de ambiente (process.env.NEXT_PUBLIC_*)',
        },
        {
          selector:
            'CallExpression[callee.object.name="window"][callee.property.name="open"] > Literal[value*="http://"]',
          message:
            'URLs hardcoded em window.open() não são permitidas. Use variáveis de ambiente (process.env.NEXT_PUBLIC_*)',
        },
        {
          selector:
            'CallExpression[callee.name="fetch"] > Literal[value*="https://"]',
          message:
            'URLs hardcoded em fetch() não são permitidas. Use variáveis de ambiente (process.env.NEXT_PUBLIC_*)',
        },
        {
          selector:
            'CallExpression[callee.name="fetch"] > Literal[value*="http://"]',
          message:
            'URLs hardcoded em fetch() não são permitidas. Use variáveis de ambiente (process.env.NEXT_PUBLIC_*)',
        },
      ],
    },
  },
];

export default eslintConfig;
