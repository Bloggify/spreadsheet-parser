"use strict";


const xlsx = require("./processors/xlsx")
const csv = require("csv-it")

/**
 * spreadsheetParser
 * Parse spreadsheet files with ease.
 *
 * @name spreadsheetParser
 * @function
 * @param {Strings} filePath The spreadsheet file path.
 * @param {Object} opts The options to pass to the processor.
 * @return {Promise<Array>} A promise resolving the array content of the spreadsheet.
 */
module.exports = async (filePath, opts) => {
    const ext = filePath.split(".").pop()
    switch (ext) {
        case "xls":
        case "xlsx":
            return xlsx(filePath, opts)
        case "csv":
            return csv.read(filePath, opts)
        default:
            throw new Error("Extension is not supported.")
    }
};
