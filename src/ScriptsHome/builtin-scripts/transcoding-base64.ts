'use strict';

import {Base64} from 'js-base64';
import {IScriptConverter} from './builtin-scripts';

const base64Encode = (input: string): string => Base64.encode(input);
const base64Decode = (input: string): string => Base64.decode(input);

// [ Base64Transcoding | Base64Converter | Base64Encoding | Base64Encoder | EncodersAndDecoders ]
export const Base64Transcoding: IScriptConverter = {
	name: 'Base64',
	description: '',
	labelInput: 'Plain Text',
	labelResult: 'Base64 Encoded Text',
	handleInput: base64Encode,
	handleResult: base64Decode,
};
