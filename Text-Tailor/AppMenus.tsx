//

import React from 'react';
import {AppSecondaryMenu, IMenuItem} from '../../components/AppSecondaryMenu';
import {IScriptDefinition} from '../ScriptsHome/builtin-scripts/builtin-scripts';
import {RR} from './AppMenus.resources';

interface IProps {
	selectedMenuItem?: IMenuItem;
	onSelected: (entry: IMenuItem, script?: IScriptDefinition) => any;
}

// The controlled menus for text tailor.
export const AppMenus = React.memo(({selectedMenuItem, onSelected}: IProps) => (
	<AppSecondaryMenu
		sections={RR.sections} color={'#099'}
		selectedMenuItemId={selectedMenuItem?.id || RR.defaultMenuItemId}
		// TODO Make it generic to support more features.
		onSelect={(entryId, entry) => onSelected(entry, RR.getTargetScripts(entryId))}
	/>
));
