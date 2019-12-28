'use strict';

import React from 'react';
import {LayoutEmbeddedApp} from '../components/LayoutEmbeddedApp';
import {ScriptsHome} from './ScriptsHome/ScriptsHome';
import {AppMenus} from './Text-Tailor/AppMenus';
import {IMenuScriptItem} from './Text-Tailor/AppMenus.resources';

export const AppTextTailor = React.memo(() => {
	const [menuItem, setMenuItem] = React.useState(undefined as IMenuScriptItem | undefined);
	const onMenuItemSelected = (entry: IMenuScriptItem) => {
		setMenuItem(entry);
	};
	return (
		<LayoutEmbeddedApp
			title={'Text Tailor'}
			body={<ScriptsHome builtinScripts={menuItem?.scripts}/>}
			nav={<AppMenus onSelected={onMenuItemSelected} selectedMenuItem={menuItem}/>}
		/>
	);
});
