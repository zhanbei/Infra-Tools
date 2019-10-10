'use strict';

export interface IStringifyOptions {
	minified?: boolean;

	// separator: string;
	useTabs?: boolean;
	useSpaces?: boolean;

	useSingleQuotes?: boolean;
	noQuotesForKeys?: boolean;
}

export const jsonStringifyWithOptions = (o: object, {minified, useTabs, useSpaces, useSingleQuotes, noQuotesForKeys}: IStringifyOptions): string => {
	const separator = minified ? undefined : (
		useTabs ? '\t' : (
			useSpaces ? ' '.repeat(4) : '\t'
		)
	);
	// TO-DO Check out the usage of replacer.
	let json = JSON.stringify(o, undefined, separator);
	if (noQuotesForKeys) {
		json = json.replace(/":/g, ':');
		if (minified) {json = json.replace(/,"/g, ',');}
		if (useTabs) {json = json.replace(/\t"/g, '\t');}
		if (useSpaces) {json = json.replace(/ "/g, ' ');}
	}
	if (useSingleQuotes) {json = json.replace(/"/g, '\'');}
	return json;
};
