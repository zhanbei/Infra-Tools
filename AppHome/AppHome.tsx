'use strict';

import React from 'react';
import {LayoutStandaloneApp} from '../../components/LayoutStandaloneApp';
import {ScriptsHome} from '../ScriptsHome/ScriptsHome';
import {R} from './resources';
import {useStyles} from './styles';

const title = R.title;

export const AppHome = () => {
	const classes = useStyles();

	const renderAppBody = () => (
		<div className={classes.mainContentWithPaddingHolder}>
			<p>{R.description}</p>
		</div>
	);

	const renderRealBody = () => (
		<div>
			{renderAppBody()}
			{<ScriptsHome/>}
		</div>
	);

	document.title = title;
	return (
		<LayoutStandaloneApp
			title={title}
			body={renderRealBody()}
		/>
	);
};
