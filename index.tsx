'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {appMuiTheme} from './resources/AppTheme';
import {App} from '../../App';

// @see https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

console.log('appMuiTheme', appMuiTheme);

// The Webpack entrance.
ReactDOM.render((
		<MuiThemeProvider theme={appMuiTheme}>
			<App/>
		</MuiThemeProvider>
	), document.getElementById('root'),
);
