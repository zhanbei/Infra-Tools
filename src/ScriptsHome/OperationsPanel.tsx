'use strict';

import React from 'react';

const idDivBlockly = 'div-blockly';

const options = {
	toolbox: document.getElementById('blockly-toolbox'),
	collapse: true,
	comments: true,
	disable: true,
	maxBlocks: Infinity,
	trashcan: true,
	horizontalLayout: false,
	toolboxPosition: 'start',
	css: true,
	// media: 'https://blockly-demo.appspot.com/static/media/',
	media: 'https://blockly.lovecust.com/media/',
	rtl: false,
	scrollbars: true,
	sounds: true,
	oneBasedIndex: true,
	grid: {
		spacing: 20,
		length: 1,
		colour: '#888',
		snap: false,
	},
	zoom: {
		controls: false,
		wheel: true,
		startScale: 1,
		maxScale: 3,
		minScale: 0.3,
		scaleSpeed: 1.2,
	},
};

interface IProps {
	onCodeChanged: (code: string) => any;
}

// @see https://github.com/google/blockly/blob/master/demos/toolbox/index.html
export const OperationsPanel = React.memo(({onCodeChanged}: IProps) => {

	React.useLayoutEffect(() => {
		// @ts-ignore
		const workspace = Blockly.inject(idDivBlockly, options);

		const workspaceBlocks = document.getElementById('workspaceBlocks');

		/* Load blocks to workspace. */
		// @ts-ignore
		Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

		// @ts-ignore
		Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
		const onBlocksChanged = () => {
			// @ts-ignore
			const code = Blockly.JavaScript.workspaceToCode(workspace);
			onCodeChanged(code);
		};

		// @see https://developers.google.cn/blockly/guides/configure/web/code-generators
		workspace.addChangeListener(onBlocksChanged);
	}, []);

	return (
		<div>
			<div id={idDivBlockly} style={{height: '600px', width: '100%'}}/>
		</div>
	);
});
