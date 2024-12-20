import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {FlatCompat} from '@eslint/eslintrc';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...compat.extends(
		'next/core-web-vitals',
		'next/typescript',
		'eslint:recommended',
		'plugin:unicorn/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	),
	{
		rules: {
			'no-console': 'off',
			'no-plusplus': 'off',
			'no-await-in-loop': 'off',
			'no-restricted-syntax': 'off',
			'import/extensions': 'off',
			'import/prefer-default-export': 'off',
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'],

			'react/jsx-filename-extension': [
				'error',
				{
					extensions: ['.tsx'],
				},
			],

			'react/prop-types': 'off',
			'react/jsx-props-no-spreading': 'off',
			'react/require-default-props': 'off',
		},
	},
];
