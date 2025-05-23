import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    plugins: {
      js,
      vue: pluginVue,
      prettier: pluginPrettier,
    },
    languageOptions: {
      globals: globals.browser,
      parser: 'vue-eslint-parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: 'vue-eslint-parser',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginVue.configs['flat/recommended'].rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
  },
  {
    ignores: ['node_modules', 'dist'],
  },
]);
