'use strict';

import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
	const boxOfPanels = {flex: 1, display: 'flex', flexFlow: 'column'};
	return createStyles({
		boxHolder: {display: 'flex'},
		boxLeftPanels: {...boxOfPanels},
		boxRightPanels: {...boxOfPanels},
		textArea: {width: '100%', minHeight: '80px'},
		textAreaInput: {width: '100%', minHeight: '150px'},
		textAreaResult: {width: '100%', minHeight: '150px'},
		textScripts: {width: '100%', minHeight: '100px', background: 'black', color: 'white'},
	});
});
