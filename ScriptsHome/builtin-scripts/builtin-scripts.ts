'use strict';

import {ScriptCssInJs} from './css-in-js';
import {Base64Transcoding} from './transcoding-base64';

export interface IBaseScript {
	name: string;
	description: string;
	labelInput: string;
	labelResult: string;
}

// Base64Encoding: Encoder & Decoder
// Parse & Stringify
export interface IScriptConverter extends IBaseScript {
	handleInput: (input: string) => object | string,
	handleResult: (result: object | string) => string,
}

export type IScriptDefinition = IScriptConverter

export const BuiltinScripts = {
	cssInJs: ScriptCssInJs,
	base64Transcoding: Base64Transcoding,
};
