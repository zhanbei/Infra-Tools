'use strict';

import React from 'react';
import {IMenuItem} from '../components/AppSecondaryMenu';
import {LayoutEmbeddedApp} from '../components/LayoutEmbeddedApp';
import {IScriptDefinition} from './ScriptsHome/builtin-scripts/builtin-scripts';
import {ScriptsHome} from './ScriptsHome/ScriptsHome';
import {AppMenus} from './Text-Tailor/AppMenus';

export const AppTextTailor = React.memo(() => {
	const [builtinScripts, setSelectedBuiltinScripts] = React.useState(undefined as IScriptDefinition | undefined);
	const [menuItem, setMenuItem] = React.useState(undefined as IMenuItem | undefined);
	const onMenuItemSelected = (entry: IMenuItem, scripts: IScriptDefinition) => {
		setMenuItem(entry);
		setSelectedBuiltinScripts(scripts);
	};
	return (
		<LayoutEmbeddedApp
			title={'Text Tailor'}
			body={<ScriptsHome builtinScripts={builtinScripts}/>}
			nav={<AppMenus onSelected={onMenuItemSelected} selectedMenuItem={menuItem}/>}
		/>
	);
});
