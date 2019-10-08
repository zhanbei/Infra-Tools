'use strict';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {ScriptsHome} from '../ScriptsHome/ScriptsHome';
import {R} from './resources';
import {useStyles} from './styles';

const title = R.title;

export const AppHome = () => {
	const classes = useStyles();

	const renderAppBar = () => (
		<AppBar>
			<Toolbar>
				<Typography variant="h6" color="inherit" style={{flex: 1}}>{title}</Typography>
			</Toolbar>
		</AppBar>
	);

	const renderAppBody = () => (
		<div className={classes.mainContentWithPaddingHolder}>
			<p>{R.description}</p>
			{<ScriptsHome/>}
		</div>
	);

	document.title = title;
	return (
		<div>
			{renderAppBar()}
			<div className={classes.toolbar}/>
			{renderAppBody()}
		</div>
	);
};
