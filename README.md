# Infrastructure Tools

<!-- > 2019-10-10T11:06:10+0800 -->

<!-- Keywords: *Infrastructure Tools*, *Efficient & Productive*, *Being Professional*. -->

A collection of tools as infrastructure, for developers and potential people, to be efficient and productive, hence to be professional.

Currently there is only a #Text-Tailor,
a powerful text processor(also see below),
existed here.

---
# Text Tailor

<!-- > 2019-10-08T10:16:13+0800 -->

A collection of tools to tailor texts, parse given texts with built-in formatters, render to text from the structured data, for developers and potential people.

## A. Instructions

Make use of the tools and contribute.

### Available Tools

1. `Plain CSS` TO `CSS-in-JS`( and Back)
1. Base64 Encoder and Decoder
1. URL Encoder and Decoder

### Patterns

There are 2 kinds of use cases:

1. Directional Mode

	Input -> Result -> Post Result

	1. General Mode
		- Execute
		- Render

			May be used as post scripts.

			- Objects to Excel
			- Objects to Markdown List
	1. Special Mode
		- Lines Mode
1. Bidirectional Mode

	Input <-> Result -> Post Result

	- Convert Between
	- Encoder and Decoder

## B. App Structure

Understanding the App.

### Core Panels and Editors

There are basically 3 types of panels to focus on for a specific task:

1. Input

	User Input;
	The Targeted Text;
	Data Source;

	- Plain Text

2. Scripts

	- Reconstruct String By Lines

		To edit text by lines: Split by "\n"; Join with "\n".

		- $handler `function`
		- $no-Empty-Lines `boolean`
		- Split by "\n"; Join with "\n".

	- Operations Choices and Combinations

		Visualized code editor with "Google Blockly".

	- Raw Script
		- Variables
			- `$input` Raw Input
			- `$lines` Split by `$separator`
			- `$_lines` Filtered out Empty Lines
		- Functions
			- `$visualize` Stash and visualize middle results, for potential debugging.
	- Post Script

		Post scripts are used to alter the current results a step further, to make the result more acceptable.

3. Results

	- Result

		Compositions of Structured Data

	- Visualization of Parsed Results

		Interactive or with Syntax

	- Middle Results
	- Post Result

### App Views

While additional views to assist the overall tasks:

1. Tools Selection / Navigation
	- @see [#Available-Tools](#available-tools)
1. Views Options
	- Mode
		- General(Clean) Mode
		- Developer(Verbose) Mode
	- Selections
		- [ ] Raw Scripts
		- [ ] Operations
1. Input Pre-process Options
	- Trim User Input
	- Split by [ \n | ; | , | : ];
	- Join with [ \n | ; | , | : ];
1. Result Options

	Stringify the object result to string following options.

	- Minified ~~| Prettify( with Tabs/Spaces)~~
	- with Tabs
	- with Spaces
	- Sort Keys
	- Use Single Quotes( for Keys and Values)
	- No Quotes for Keys

## C. Investigate On

About the features, designs, development details, and etc.

### Operations

```js
s.split('\n').map(line=>line.trim()).map(line=>line.endsWith(';')?line.substr(0, line.length -1 ): line).join('\n')

s.split('\n').map(line=>line.split(' ')[0].trim()).join('\n')

hello world
world
hola test

$input.split('\n').map(line=>line.split(' ')[0].trim()).join('\n')
```

Operations are ordered, with chaining rules.

- Split
	- By Lines
	- By Space
	- By Spaces
- Array of Results
- Object
	- Name Key
- Custom Function

Default Blockly Flow:

- Trim
- Parse JSON if Okay
- Split By Line
- Custom Function
- Stringify


### Histories

- Texts Given
- Scripts Executed
- Results Calculated
- Stared Input and Output


### Implementations

<!-- > 2019-10-08T14:14:12+0800 -->

- A. App Builder
	1. Develop Tool Builder `develop`
		- Assets Management
			- Manage the custom assets.
		- Lightweight Tools
			- Powerful to visualize.
	1. Create App with Scripts `initialize`
		1. Verify and Stash
		1. Deploy and Route
		1. Modify and Republish
			- Compatible or Not
	1. Develop the Platform with Public Markets `maintain`
- B. Tools with Custom Scripts
	1. Develop the Lightweight Tool `develop`
		1. Manage Scripts
	1. Create Scripts `initialize`
- C. Tools with Built-in Scripts
	1. Develop Tool `develop`
	1. Deploy and Use as Green App


| Comparison | A. App Builder | B. Text Tools | C. Clean and Green Tool |
|  --- | --- | --- | --- |
| **Data** | Data within App | Data within Scripts | No Data |
| **Development** | `+++++` | `++++` | `++` |
| **Relations** | Depend on `#B` and `#C`. | Depend on `#C`. | |
| **Designs** | `---` Over-designed | `+++++` Perfect | `+++` MVP |



## D. References

- EJS
- [Blockly - Google Developers](https://developers.google.com/blockly/)
<sup>[Github](https://github.com/google/blockly)</sup>
<sup>|</sup>
<sup>[China Version](https://developers.google.cn/blockly)</sup>
