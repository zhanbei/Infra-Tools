'use strict';

import React from 'react';
import {LayoutAppHeader} from 'src/mui-views/app/LayoutAppHeader';
import {ScriptsHome} from '../ScriptsHome/ScriptsHome';
import {AppMenus} from '../Text-Tailor/AppMenus';
import {IMenuScriptItem} from '../Text-Tailor/AppMenus.resources';
import {R} from './resources';
import {useStyles} from './styles';

const title = R.title;

export const AppHome = () => {
	const classes = useStyles();
	const [menuItem, setMenuItem] = React.useState(undefined as IMenuScriptItem | undefined);

	const renderAppBody = () => (
		<div className={classes.mainContentWithPaddingHolder}>
			<p>{R.description}</p>
		</div>
	);

	const renderRealBody = () => (
		<div>
			{renderAppBody()}
			{<ScriptsHome builtinScripts={menuItem?.scripts}/>}
		</div>
	);

	document.title = title;
	return (
		<LayoutAppHeader
			title={title}
			body={renderRealBody()}
			nav={<AppMenus onSelected={setMenuItem} selectedMenuItem={menuItem}/>}
		/>
	);
};
