'use strict';

import React from 'react';
import {ScriptsPanel} from './ScriptsPanels';
import {doEvalScripts} from './eval-scripts';
import {R} from './resources';
import {useStyles} from './styles';

const title = R.title;

const pausingTime = 500;
let latestTime = +new Date();

// Support visualization of statuses.
type STATUSES = 'initialized' | 'no_input' | 'no_scripts' | 'waiting' | 'calculated' | 'error'
const STATUS_INITIALIZED: STATUSES = 'initialized';
const STATUS_NO_INPUT: STATUSES = 'no_input';
const STATUS_NO_SCRIPTS: STATUSES = 'no_scripts';
const STATUS_WAITING: STATUSES = 'waiting';
const STATUS_CALCULATED: STATUSES = 'calculated';
const STATUS_ERROR_ENCOUNTERED: STATUSES = 'error';

export const ScriptsHome = React.memo(() => {
	const classes = useStyles();

	const [input, setInput] = React.useState('');
	const [rawScripts, setRawScripts] = React.useState('');
	// const [useRawScripts, setUseRawScripts] = React.useState(false);
	const [results, setResults] = React.useState('');
	const [editedResults, setEditedResults] = React.useState('');
	const [status, setStatus] = React.useState(STATUS_INITIALIZED as STATUSES);

	const renderAppBody = () => (
		<div>
			<div className={classes.boxHolder}>
				<div className={classes.boxLeftPanels}>
					{renderUserInput()}
					{renderOperations()}
				</div>
				<div className={classes.boxRightPanels}>
					{renderResults()}
				</div>
			</div>
			{renderRawScripts()}
		</div>
	);

	const onTextChanged = (id: string, value: string) => {
		switch (id) {
			case 'input':
				setInput(value);
				doCalculate(value, rawScripts);
				break;
			case 'scripts':
				setRawScripts(value);
				// setUseRawScripts(true);
				doCalculate(input, value);
				break;
			case 'results':
				setEditedResults(value);
				break;
		}
	};

	// const [needCalculate, setNeedCalculate] = React.useState(false);
	// Consider implementations of post calculation.
	const doCalculate = (input: string, scripts: string) => {
		latestTime = +new Date();
		if (!input || !input.trim()) {return setStatus(STATUS_NO_INPUT);}
		if (!scripts || !scripts.trim()) {return setStatus(STATUS_NO_SCRIPTS);}
		setStatus(STATUS_WAITING);

		setTimeout(() => {
			if (+new Date() < latestTime + pausingTime) {return;}
			const res = doEvalScripts(input, scripts);
			if (res.output) {
				setStatus(STATUS_CALCULATED);
				setResults(res.output);
				console.log('calculated:', input, scripts, res);
			} else if (res.ex) {
				setStatus(STATUS_ERROR_ENCOUNTERED);
				setResults(res.ex.name + ': ' + res.ex.message);
				console.log('error:', input, scripts, res.ex.name, res.ex.message, res.ex.stack);
			}
		}, pausingTime);
	};

	const renderUserInput = () => (
		<ScriptsPanel
			label={'Input'}
			children={(
				<textarea className={classes.textArea} onChange={(event) => onTextChanged('input', event.target.value)} value={input}/>
			)}
		/>
	);
	const renderOperations = () => (
		<ScriptsPanel
			label={'Operations'}
			children={(
				<textarea className={classes.textArea}/>
			)}
		/>
	);
	const renderRawScripts = () => (
		<ScriptsPanel
			label={'Raw Scripts'}
			children={(
				<textarea className={classes.textScripts} onChange={(event) => onTextChanged('scripts', event.target.value)} value={rawScripts}/>
			)}
		/>
	);
	const _res: React.ReactNode[] = [];
	_res.push(<textarea className={classes.textArea} onChange={(event) => onTextChanged('results', event.target.value)} value={editedResults || results || ''}/>);
	if (results && status === STATUS_CALCULATED) {
		if (typeof results === 'object') {
			_res.push(<textarea className={classes.textArea} value={JSON.stringify(results)}/>);
			_res.push(<textarea className={classes.textArea} value={JSON.stringify(results, undefined, '\t')}/>);
		}
	}
	const renderResults = () => (
		<ScriptsPanel
			label={`Raw Results(${status})`}
			children={_res}
		/>
	);


	document.title = title;
	return (
		<div>
			{renderAppBody()}
		</div>
	);
});
