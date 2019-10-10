'use strict';

import {ScriptCssInJs} from 'src/ScriptsHome/builtin-scripts/css-in-js';

export interface IScriptDefinition {
	name: string;
	description: string;
	labelInput: string;
	labelResult: string;
}

// Encoder & Decoder
// Parse & Stringify
export interface IScriptConverter extends IScriptDefinition {
	handleInput: (input: string) => object | string,
	handleResult: (result: object | string) => string,
}

export const BuiltinScripts = {
	cssInJs: ScriptCssInJs,
};