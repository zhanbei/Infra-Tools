//

import {IMenuItem, IMenuSection} from '../../components/AppSecondaryMenu';
import {BuiltinScripts, IScriptDefinition} from '../ScriptsHome/builtin-scripts/builtin-scripts';

const newSection = (id: string, name: string, items: IMenuItem[]): IMenuSection => ({id, name, items});
const newMenuItem = (id: string, name: string): IMenuItem => ({id, name});
// Tools may be enriched and hence grouped later.
// Currently there is only one default group, named as "Primary Tools" or "Classic Tools".
// The tools may be grouped by professions(domains), like developers/students/accountants/personal.
const secPrimaryTools: IMenuSection = newSection('tools', 'Available Tools', [
	newMenuItem('custom', 'Custom Scripts'),
	newMenuItem('css-in-js', 'CSS in JS'),
	newMenuItem('base64', 'Base64'),
]);
const sections = [secPrimaryTools];
const defaultMenuItemId = sections[0].items[0].id;

const scripts = BuiltinScripts;
const getTargetScripts = (entryId: string): IScriptDefinition | undefined => {
	switch (entryId) {
		case 'css-in-js':
			return scripts.cssInJs;
		case 'base64':
			return scripts.base64Transcoding;
		case 'custom':
		default:
			return;
	}
};

// Resource > General Resource
export const RR = {
	sections,
	defaultMenuItemId,
	getTargetScripts,
};