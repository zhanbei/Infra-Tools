//

import React from 'react';
import {IScriptDefinition} from '../ScriptsHome/builtin-scripts/builtin-scripts';
import {AppMenuScript, IMenuScriptItem, RR} from './AppMenus.resources';

interface IProps {
	selectedMenuItem?: IMenuScriptItem;
	onSelected: (entry: IMenuScriptItem, script?: IScriptDefinition) => any;
}


// The controlled menus for text tailor.
export const AppMenus = React.memo(({selectedMenuItem, onSelected}: IProps) => (
	<AppMenuScript
		sections={RR.sections} color={'#099'}
		selectedMenuItemId={selectedMenuItem?.id || RR.defaultMenuItemId}
		// TODO Make it generic to support more features.
		onSelect={(entryId, entry) => onSelected(entry, RR.getTargetScripts(entryId))}
	/>
));
