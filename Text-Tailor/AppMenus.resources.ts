//

import {getAppSecondaryMenu, IMenuItem, IMenuSection, newMenuSection} from '../../components/AppSecondaryMenu';
import {BuiltinScripts, IScriptDefinition} from '../ScriptsHome/builtin-scripts/builtin-scripts';

export interface IMenuScriptItem extends IMenuItem {
	scripts?: IScriptDefinition;
}

export const AppMenuScript = getAppSecondaryMenu<IMenuScriptItem, IMenuSection<IMenuScriptItem>>();

const newMenuItem = (_id: string, name: string, scripts?: IScriptDefinition, color?: string): IMenuScriptItem => ({_id, name, color, scripts});

const scripts = BuiltinScripts;
// const newSection = (id: string, name: string, items: IMenuScriptItem[]): IMenuSection<IMenuScriptItem> => ({id, name, items});
// Tools may be enriched and hence grouped later.
// Currently there is only one default group, named as "Primary Tools" or "Classic Tools".
// The tools may be grouped by professions(domains), like developers/students/accountants/personal.
const secPrimaryTools: IMenuSection = newMenuSection<IMenuScriptItem>('tools', 'Available Tools', [
	newMenuItem('custom', 'Custom Scripts', undefined, 'green'),
	newMenuItem('css-in-js', 'CSS in JS', scripts.cssInJs, '#8a2be2'), // blueviolet
	newMenuItem('base64', 'Base64', scripts.base64Transcoding, '#33f'),
]);
const sections = [secPrimaryTools];
const defaultMenuItemId = sections[0].items[0]._id;

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