'use strict';

interface IRes {
	output?: string;
	ex?: Error;
}

// Reconstruct string by custom line handler.
export const doReconstructStringByLines = (input: string, handleLineScript: string, noEmptyLine: boolean = false, separator: string = '\n'): IRes => {
	try {
		// $line => '- ' + $line
		const handler = eval(handleLineScript);
		if (typeof handler !== 'function') {
			return {ex: new Error('no line handler specified!')};
		}
		let lines = input.replace(/\r/g, '').split('\n');
		if (noEmptyLine) {lines = lines.filter(line => Boolean(line && line.trim()));}
		lines = lines.map(handler);
		return {output: lines.join(separator)};
	} catch (ex) {
		return {ex};
	}
};

export const doEvalScripts = (input: string, scripts: string): IRes => {
	const $input = input;
	const $lines = $input.replace(/\r/g, '').split('\n');
	// @ts-ignore
	const $_lines = $lines.filter(line => Boolean(line && line.trim()));
	// @ts-ignore
	const $visualize = <T>(t: T): T => {
		console.log('Visualizing the temp value:', t);
		return t;
	};
	const _scripts = scripts.trim();
	if (!_scripts) {return {};}
	try {
		const output = eval(_scripts);
		// Check out the user defined variables, like: $separator, $handleLine, and etc.
		if (typeof output === 'function') {
			const final = output($input);
			return {output: final};
		}
		return {output};
	} catch (ex) {
		return {ex};
	}
};