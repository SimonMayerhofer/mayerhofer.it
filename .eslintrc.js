module.exports = {
	globals: {
		__PATH_PREFIX__: true,
	},
	"env": {
		"es6": true,
		"browser": true
	},
	"extends": ["airbnb", "prettier", "prettier/react"],
	"plugins": ["prettier"],
	"rules": {
		"no-console": 1,
		"no-unused-vars": 1,
		"prettier/prettier": 2,
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/jsx-filename-extension": 0,
		"no-prototype-builtins": 0,
		"react/prop-types": 0, // disable prop-type warnings and errors.
		"react/forbid-prop-types": 0,
		"react/no-danger": 0,
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"sourceType": "module",
		"allowImportExportEverywhere": false,
		"codeFrame": false
	}
};
