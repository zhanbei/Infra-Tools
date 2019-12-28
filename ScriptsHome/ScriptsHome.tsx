'use strict';

import React from 'react';
import {jsonStringifyWithOptions} from './builtin-scripts/stringify-object';
import {IScriptDefinition} from './builtin-scripts/builtin-scripts';
import {NavButtons} from './NavButtons';
import {OperationsPanel} from './OperationsPanel';
import {STRINGIFY_OPTIONS_DEFAULT, ResultOptions} from './ResultOptions';
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

interface IProps {
	builtinScripts?: IScriptDefinition;
}

interface IResult {
	raw?: string | object;
	text: string;
}

export const ScriptsHome = React.memo(({builtinScripts}: IProps) => {
	const classes = useStyles();

	const [input, setInput] = React.useState('');
	const [rawScripts, setRawScripts] = React.useState('');
	// const [useRawScripts, setUseRawScripts] = React.useState(false);
	const [results, setResults] = React.useState({text: ''} as IResult);
	const [status, setStatus] = React.useState(STATUS_INITIALIZED as STATUSES);
	const [stringifyOptions, setStringifyOptions] = React.useState(STRINGIFY_OPTIONS_DEFAULT);

	React.useEffect(() => {
		doCalculate(input, rawScripts);
	}, [builtinScripts]);

	const onCodeChanged = (code: string) => {
		setRawScripts(code);
	};

	const renderAppBody = () => (
		<div style={{flex: 1, margin: '0 auto', maxWidth: '960px'}}>
			<div className={classes.boxHolder}>
				<div className={classes.boxLeftPanels}>
					{renderUserInput()}
				</div>
				<div className={classes.boxRightPanels}>
					{renderResults()}
				</div>
			</div>
			{renderRawScripts()}
			{renderOperations()}
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
				setResults({raw: value, text: ''});
				doRevert(value);
				break;
		}
	};

	// const [needCalculate, setNeedCalculate] = React.useState(false);
	// Consider implementations of post calculation.
	const doCalculate = (input: string, scripts: string) => {
		latestTime = +new Date();
		if (!input || !input.trim()) {return setStatus(STATUS_NO_INPUT);}
		if (!builtinScripts && (!scripts || !scripts.trim())) {return setStatus(STATUS_NO_SCRIPTS);}
		setStatus(STATUS_WAITING);

		setTimeout(() => {
			if (+new Date() < latestTime + pausingTime) {return;}
			if (builtinScripts) {
				const result = builtinScripts.handleInput(input);
				setStatus(STATUS_CALCULATED);
				setResults({raw: result, text: ''});
				return;
			}
			const res = doEvalScripts(input, scripts);
			if (res.output) {
				setStatus(STATUS_CALCULATED);
				setResults({raw: res.output, text: ''});
			} else if (res.ex) {
				setStatus(STATUS_ERROR_ENCOUNTERED);
				setResults({raw: res.ex, text: res.ex.name + ': ' + res.ex.message});
			}
		}, pausingTime);
	};

	const doRevert = (input: string) => {
		if (!builtinScripts) {return;}
		const result = builtinScripts.handleResult(input);
		setStatus(STATUS_CALCULATED);
		setInput(result);
	};

	const renderUserInput = () => (
		<ScriptsPanel
			label={builtinScripts ? `Input(${builtinScripts.labelInput})` : 'Input'}
			children={(
				<textarea className={classes.textAreaInput} onChange={(event) => onTextChanged('input', event.target.value)} value={input}/>
			)}
		/>
	);
	//<textarea className={classes.textArea}/>
	const renderOperations = () => window['Blockly'] ? (
		<ScriptsPanel
			label={'Operations'}
			children={(
				<OperationsPanel onCodeChanged={onCodeChanged}/>
			)}
		/>
	) : undefined;
	const renderRawScripts = () => !builtinScripts ? (
		<ScriptsPanel
			label={'Raw Scripts'}
			children={(
				<textarea className={classes.textScripts} onChange={(event) => onTextChanged('scripts', event.target.value)} value={rawScripts}/>
			)}
		/>
	) : undefined;
	if (!results.text || true) {
		if (typeof results.raw === 'object') {
			results.text = jsonStringifyWithOptions(results.raw, stringifyOptions);
		} else {
			results.text = results.raw || '';
		}
	}
	const renderResults = () => (
		<ScriptsPanel
			label={builtinScripts ? `${builtinScripts.labelResult}(${status})` : `Raw Results(${status})`}
			children={<textarea className={classes.textAreaResult} onChange={(event) => onTextChanged('results', event.target.value)} value={results.text || ''}/>}
		/>
	);


	document.title = title;
	return (
		<div style={{display: 'flex'}}>
			{renderAppBody()}
			<ResultOptions onChange={setStringifyOptions}/>
		</div>
	);
});
