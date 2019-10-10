'use strict';

import React from 'react';
import {green, purple} from '@material-ui/core/colors';
import {createColoredButton} from 'src/components/ColoredButton';
import {BuiltinScripts, IScriptDefinition} from 'src/ScriptsHome/builtin-scripts/builtin-scripts';

const PurpleButton = createColoredButton(purple[400], purple[700]);
const GreenButton = createColoredButton(green[400], green[700]);

export interface IProps {
	onSelected: (script?: IScriptDefinition) => any;
}

export const NavButtons = React.memo(({onSelected}: IProps) => {
	const scripts = BuiltinScripts;
	const renderButtons = () => (
		<div style={{display: 'flex', flexFlow: 'column'}}>
			<GreenButton variant='contained' color='primary' onClick={() => onSelected()}>
				Custom Scripts
			</GreenButton>
			<PurpleButton variant='contained' color='primary' onClick={() => onSelected(scripts.cssInJs)}>
				{scripts.cssInJs.name}
			</PurpleButton>
		</div>
	);
	return (
		<div>
			{renderButtons()}
		</div>
	);
});
