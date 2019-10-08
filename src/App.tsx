'use strict';

import * as React from 'react';
import {AppHome} from 'src/AppHome/AppHome';

// App entrance: a single page without router.
export class App extends React.PureComponent {
	render() {
		return (
			<AppHome/>
		);
	}
}
