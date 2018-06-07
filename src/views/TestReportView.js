// src/views/TestReportView.js
const m = require("mithril")
const TestReport = require("../models/TestReport")


module.exports = {
    oninit: TestReport.loadResult,
    view: function() {
        return m(
            ".result",
            TestReport.resultSet.map(function(row) {
                return m(".row", 
                Object.entries(row).map(function (field) {
                    return m("p",
                        m("strong", field[0] + ": "),
                        m("span", field[1]))
                }), m("p", "\u00A0"))
            })
        )
    }
}