module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['airbnb-base', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['node', 'prettier', '@typescript-eslint'],
	rules: {
		'prettier/prettier': 'error',
		'block-scoped-var': 'error',
		eqeqeq: 'error',
		'no-var': 'error',
		'prefer-const': 'error',
		'eol-last': 'error',
		'prefer-arrow-callback': 'error',
		'no-trailing-spaces': 'error',
		quotes: ['warn', 'single', {avoidEscape: true}],
		'no-restricted-properties': [
			'error',
			{
				object: 'describe',
				property: 'only',
			},
			{
				object: 'it',
				property: 'only',
			},
		],
	},
};
