'use strict';

import React from 'react';
import Typography from '@material-ui/core/Typography';

interface IProps {
	label: string;
	children: React.ReactNode | React.ReactNode[];
}

export const ScriptsPanel = React.memo(({label, children}: IProps) => (
	<div style={{margin: 8}}>
		<Typography variant="h6" color="inherit" style={{}}>{label}</Typography>
		<div>
			{children}
		</div>
	</div>
));
