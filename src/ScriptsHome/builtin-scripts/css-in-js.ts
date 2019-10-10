'use strict';

import {IScriptConverter} from 'src/ScriptsHome/builtin-scripts/builtin-scripts';

const cssToJs = (s: string) => s.replace(/\W+\w/g, match => match.slice(-1).toUpperCase());

// Parse a set of CSS rules to an JS object.
// FIX-ME Whether to support multiple CSS classes and how.
// @see https://stackoverflow.com/questions/8987550/convert-css-text-to-javascript-object
// @ref https://staxmanade.com/CssToReact/
export const parseCssToObject = (cssText: string): object => {
	const cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, ' ').replace(/\s+/g, ' ');
	const style = {};
	const [, , rule] = cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [, , cssTxt];
	const properties = rule.split(';').map(o => o.split(':').map(x => x && x.trim()));
	for (let [property, value] of properties) {
		style[cssToJs(property)] = value;
	}
	// return {cssText, ruleName, style};
	return style;
};

const stringifyObjectToCss = (style: object): string => {
	const keys = Object.keys(style);
	let css = '';
	keys.map(key => {
		// TO-DO Convert the camel key to '-' separated lowered key.
		css += `${key}: ${style[key]};`;
	});
	return css;
};

export const ScriptCssInJs: IScriptConverter = {
	name: 'CSS IN JS',
	description: '',
	labelInput: 'Plain CSS',
	labelResult: 'JSON/JS Object',
	handleInput: parseCssToObject,
	handleResult: stringifyObjectToCss,
};
