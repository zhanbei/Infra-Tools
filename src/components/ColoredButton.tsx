'use strict';

import {withStyles, Theme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// @see https://material-ui.com/components/buttons/#customized-buttons
export const createColoredButton = (color: string, colorHover: string) => withStyles((theme: Theme) => ({
	root: {
		color: theme.palette.getContrastText(color),
		backgroundColor: color,
		'&:hover': {
			backgroundColor: colorHover,
		},
		textTransform: 'inherit',
	},
}))(Button);