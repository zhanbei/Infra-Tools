'use strict';

import React from 'react';
import {LayoutAppHeader} from 'src/mui-views/app/LayoutAppHeader';
import {ScriptsHome} from './ScriptsHome/ScriptsHome';
import {AppMenus} from './Text-Tailor/AppMenus';
import {IMenuScriptItem} from './Text-Tailor/AppMenus.resources';

export const AppTextTailor = React.memo(() => {
	const [menuItem, setMenuItem] = React.useState(undefined as IMenuScriptItem | undefined);
	return (
		<LayoutAppHeader
			title={'Text Tailor'}
			body={<ScriptsHome builtinScripts={menuItem?.scripts}/>}
			nav={<AppMenus onSelected={setMenuItem} selectedMenuItem={menuItem}/>}
		/>
	);
});
