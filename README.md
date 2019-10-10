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

## Panels and Editors

- Input
- Operations Choices and Combinations
- Visualization of Parsed Results
- Result
	- Compositions of Structured Data
- Raw Script
- Post Script
- Post Result

## Operations

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

Default

- Trim
- Parse JSON if Okay
- Split By Line
- Custom Function
- Stringify


## Renders

## Visualizations

Middle

## Patterns

1. Convert Between
	- Input <-> Result -> Post Result
	- Options
1. Execute
	- Input -> Result
	- Options

Object Panel

- Object -> JSON(Minified/Tabbed/Interactive/Object-in-JS)
- Interactive
- JSON
	- Minified
	- with Tabs
	- with Spaces
- Object-in-JS
	- Minified
	- with Tabs
	- with Spaces
	- Use Single Quotes( for Keys and Values)
	- No Quotes for Keys

## Applications

- Converters Between
	- `Plain CSS` and `CSS-in-JS`
		- JSON Stringify
			- One-line
			- Prettier
		- JS
			- Single Quotes
			- No Key Quotes
			- Sort Key
- Encoders
	- Base64
	- URL Encoder
- Objects to Excel
- Objects to Markdown List

### CSS-in-JS

```js
// @see https://stackoverflow.com/questions/8987550/convert-css-text-to-javascript-object
// @ref https://staxmanade.com/CssToReact/
(cssText) => {
    var cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, " ").replace(/\s+/g, " ");
    var style = {}, [,ruleName,rule] = cssTxt.match(/ ?(.*?) ?{([^}]*)}/)||[,,cssTxt];
    var cssToJs = s => s.replace(/\W+\w/g, match => match.slice(-1).toUpperCase());
    var properties = rule.split(";").map(o => o.split(":").map(x => x && x.trim()));
    for (var [property, value] of properties) style[cssToJs(property)] = value;
    return {cssText, ruleName, style};
}

s = JSON.stringify(o, null, '\t');
s.replace(/\t"/g, '\t').replace(/":/g, ':');
```

## Variables

- $input
- ${1}
- ${1}

## Histories

- Texts Given
- Scripts Executed
- Results Calculated
- Stared Input and Output


## Implementations

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



## References

- EJS
- [Blockly - Google Developers](https://developers.google.com/blockly/)
<sup>[Github](https://github.com/google/blockly)</sup>
<sup>|</sup>
<sup>[China Version](https://developers.google.cn/blockly)</sup>
