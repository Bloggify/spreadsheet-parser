<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


















# spreadsheet-parser

 [![Version](https://img.shields.io/npm/v/spreadsheet-parser.svg)](https://www.npmjs.com/package/spreadsheet-parser) [![Downloads](https://img.shields.io/npm/dt/spreadsheet-parser.svg)](https://www.npmjs.com/package/spreadsheet-parser)







> Parse spreadsheet files with ease.

















## :cloud: Installation

```sh
# Using npm
npm install --save spreadsheet-parser

# Using yarn
yarn add spreadsheet-parser
```













## :clipboard: Example



```js
const SpreadsheetParser = require("spreadsheet-parser");


(async () => {
    const content = await SpreadsheetParser(`${__dirname}/sample.xlsx`)
    console.log(content)

    const csvContent = await SpreadsheetParser(`${__dirname}/sample.csv`, {
        headers: true
    })
    console.log(csvContent)
})()
```












## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:







## :memo: Documentation


### `spreadsheetParser(filePath, opts)`
Parse spreadsheet files with ease.

#### Params

- **Strings** `filePath`: The spreadsheet file path.
- **Object** `opts`: The options to pass to the processor.

#### Return
- **Promise\<Array>** A promise resolving the array content of the spreadsheet.














## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].
























## :scroll: License

[MIT][license] © [Bloggify][website]






[license]: /LICENSE
[website]: https://bloggify.org
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
