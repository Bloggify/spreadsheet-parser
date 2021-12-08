"use strict";

const SpreadsheetParser = require("../lib");


(async () => {
    const content = await SpreadsheetParser(`${__dirname}/sample.xlsx`)
    console.log(content)

    const csvContent = await SpreadsheetParser(`${__dirname}/sample.csv`, {
        headers: true
    })
    console.log(csvContent)
})()
