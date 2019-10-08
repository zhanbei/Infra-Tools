'use strict';

import {useAppStyles} from '../resources/MuiStyles';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
	const styles = useAppStyles(theme);
	return createStyles({
		toolbar: styles.toolbar,
		mainContentWithPaddingHolder: styles.mainContentWithPaddingHolder,
	});
});
