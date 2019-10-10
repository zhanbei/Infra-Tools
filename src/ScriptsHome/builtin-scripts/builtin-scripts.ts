'use strict';

import {ScriptCssInJs} from './css-in-js';

export interface IBaseScript {
	name: string;
	description: string;
	labelInput: string;
	labelResult: string;
}

// Encoder & Decoder
// Parse & Stringify
export interface IScriptConverter extends IBaseScript {
	handleInput: (input: string) => object | string,
	handleResult: (result: object | string) => string,
}

export type IScriptDefinition = IScriptConverter

export const BuiltinScripts = {
	cssInJs: ScriptCssInJs,
};
