'use strict';

import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {green, purple} from '@material-ui/core/colors';
import {createColoredButton} from 'src/components/ColoredButton';
import {BuiltinScripts, IScriptDefinition} from './builtin-scripts/builtin-scripts';

const PurpleButton = createColoredButton(purple[400], purple[700]);
const GreenButton = createColoredButton(green[400], green[700]);

export interface IProps {
	onSelected: (script?: IScriptDefinition) => any;
}

export const useStyles = makeStyles((theme: Theme) => createStyles({
	menuItem: {margin: 8},
}));

export const NavButtons = React.memo(({onSelected}: IProps) => {
	const cls = useStyles();
	const scripts = BuiltinScripts;
	const renderButtons = () => (
		<div style={{display: 'flex', flexFlow: 'column'}}>
			<GreenButton className={cls.menuItem} variant='contained' color='primary' onClick={() => onSelected()}>
				Custom Scripts
			</GreenButton>
			<PurpleButton className={cls.menuItem} variant='contained' color='primary' onClick={() => onSelected(scripts.cssInJs)}>
				{scripts.cssInJs.name}
			</PurpleButton>
			<PurpleButton className={cls.menuItem} variant='contained' color='primary' onClick={() => onSelected(scripts.base64Transcoding)}>
				{scripts.base64Transcoding.name}
			</PurpleButton>
		</div>
	);
	return (
		<div>
			{renderButtons()}
		</div>
	);
});
