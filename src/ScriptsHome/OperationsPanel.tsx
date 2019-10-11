'use strict';

import React from 'react';

const idDivBlockly = 'div-blockly';

// @see https://github.com/google/blockly/blob/master/demos/toolbox/index.html
export const OperationsPanel = React.memo(() => {

	React.useLayoutEffect(() => {
		// @ts-ignore
		const demoWorkspace = Blockly.inject(idDivBlockly, {
			media: 'http://localhost:8123/media/',
			toolbox: document.getElementById('blockly-toolbox'),
		});
	}, []);

	return (
		<div>
			<div id={idDivBlockly} style={{height: '600px', width: '100%'}}/>
		</div>
	);
});
