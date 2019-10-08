'use strict';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
			<h1>{title}</h1>
			<p>{R.description}</p>
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
