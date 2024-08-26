const xlsx = require('xlsx');
const { intToExcelCol, excelColToInt } = require("excel-column-name")

module.exports = async (filePath, opts) => {
    const wb = xlsx.readFile(filePath);
    const ws = wb.Sheets[wb.SheetNames[0]];
    if (!ws) { return [] }

    const range = ws['!ref'].split(":").map(c => ({
        column: excelColToInt(c.match(/[A-Z]+/)[0])
      , row: +c.match(/\d+/)[0]
    }))

    const countRows = range[1].row
    const firstColumn = range[0].column
    const lastColumn = range[1].column

    const rows = []

    const getRowArr = r => {
        const arr = []
        for (let i = firstColumn; i <= lastColumn; ++i) {
            arr.push(String(Object(ws[`${intToExcelCol(i)}${r}`]).v || "").trim())
        }
        return arr
    }

    const firstRow = getRowArr(1).filter(c => c !== "")
    const secondRow = getRowArr(2).filter(c => c !== "")
    let headers = firstRow

    let startIndex = 2
    if (secondRow.length > firstRow.length) {
        headers = secondRow
        startIndex = 3
    }

    for (let i = startIndex; i <= countRows; ++i) {
        const obj = getRowArr(i).reduce((acc, c, index) => {
            acc[headers[index]] = c
            return acc
        }, {})
        rows.push(obj)
    }

    return rows
}
