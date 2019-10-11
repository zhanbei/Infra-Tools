'use strict';

import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import {IStringifyOptions} from './builtin-scripts/stringify-object';

interface IProps {
	onChange: (options: IStringifyOptions) => any;
}

const OPTIONS_BASE = {minified: false, useTabs: false, useSpaces: false, useSingleQuotes: false, noQuotesForKeys: false};
const defaultOptions: IStringifyOptions = {useTabs: true, noQuotesForKeys: true};
const OPTIONS_MINIFIED: IStringifyOptions = {...OPTIONS_BASE, minified: true};
const OPTIONS_TABBED: IStringifyOptions = {...OPTIONS_BASE, useTabs: true};
const OPTIONS_JS: IStringifyOptions = {...OPTIONS_BASE, useTabs: true, useSingleQuotes: true, noQuotesForKeys: true};

const getOptionsBySet = (set: string): IStringifyOptions => {
	switch (set) {
		case 'minified':
			return OPTIONS_MINIFIED;
		case 'tabbed':
			return OPTIONS_TABBED;
		case 'js':
			return OPTIONS_JS;
		default:
			return defaultOptions;
	}
};

// type IOptionsSet = 'minified' | 'tabbed' | 'spaced'

const getOptionsByType = (type: string): Partial<IStringifyOptions> => {
	const base = {minified: false, useTabs: false, useSpaces: false};
	switch (type) {
		case 'minified':
			return {...base, minified: true};
		case 'tabs':
			return {...base, useTabs: true};
		case 'spaces':
			return {...base, useSpaces: true};
		default:
			return {};
	}
};

const getTypeByOptions = ({minified, useTabs}: IStringifyOptions): string => {
	return minified ? 'minified' : (
		useTabs ? 'tabs' : 'spaces'
	);
};

export const ResultOptions = React.memo(({onChange}: IProps) => {
	const [set, doSetOptionsSet] = React.useState('tabbed');
	const [options, doSetOptions] = React.useState(getOptionsBySet(set));

	const setOptionsSet = (set: string) => {
		doSetOptionsSet(set);
		updateOptions(getOptionsBySet(set));
	};

	const updateOptions = (p: Partial<IStringifyOptions>) => {
		const p2 = {...options, ...p};
		doSetOptions(p2);
		onChange(p2);
	};

	return (
		<div>
			<Tabs
				value={set} indicatorColor="primary" textColor="primary"
				onChange={(event, tab) => setOptionsSet(tab)}
			>
				<Tab label="Minified JSON" value='minified'/>
				<Tab label="Tabbed JSON" value='tabbed'/>
				<Tab label="JS Object" value='js'/>
			</Tabs>
			<FormControl component='fieldset'>
				<RadioGroup name='options-type' value={getTypeByOptions(options)} onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateOptions(getOptionsByType(event.target.value))} row>
					<FormControlLabel label='Minified JSON' value='minified' control={<Radio color='primary'/>}/>
					<FormControlLabel label='Use Tabs' value='tabs' control={<Radio color='primary'/>}/>
					<FormControlLabel label='Use Spaces' value='spaces' control={<Radio color='primary'/>}/>
				</RadioGroup>
			</FormControl>
			<FormGroup>
				<FormControlLabel
					control={<Checkbox checked={options.noQuotesForKeys || false} onChange={(event) => updateOptions({noQuotesForKeys: event.target.checked})}/>}
					label="No Quotes for Object Keys"
				/>
				<FormControlLabel
					control={<Checkbox checked={options.useSingleQuotes || false} onChange={(event) => updateOptions({useSingleQuotes: event.target.checked})}/>}
					label="Use Single Quotes"
				/>
			</FormGroup>
		</div>
	);
});