'use strict';

interface IRes {
	output?: string;
	ex?: Error;
}

export const doEvalScripts = (input: string, scripts: string): IRes => {
	// @ts-ignore
	const $input = input;
	// @ts-ignore
	const $visualize = <T>(t: T): T => {
		console.log('Visualizing the temp value:', t);
		return t;
	};
	const _scripts = scripts.trim();
	if (!_scripts) {return {};}
	try {
		const output = eval(_scripts);
		if (typeof output === 'function') {
			const final = output($input);
			return {output: final};
		}
		return {output};
	} catch (ex) {
		return {ex};
	}
};