// src/views/TestReportView.js
const m = require("mithril")
const TestReport = require("../models/TestReport")
var greeting = 'sup'

module.exports = {
    oninit: TestReport.loadResult(greeting="sup"),
    view: function() {
        return [m(
            ".result",
            TestReport.resultSet.map(function(row) {
                return m(".row", 
                Object.entries(row).map(function (field) {
                    return m("p",
                        m("strong", field[0] + ": "),
                        field[1])
                }), m("p", "\u00A0"))
            })
        ),
                m(".column.is-4.is-offset-4",
                    m("form", {
                        onsubmit: function(e) {
                            e.preventDefault()
                            TestReport.loadResult(greeting)
                        }
                    }, [m(".field", 
                            m("label.label", "Update greeting parameter"),
                            m("input.input[type=text, placeholder=Change greeting]", {
                            oninput: m.withAttr("value", function(value) {greeting = value}),
                            value: greeting
                        })),
                        m("button.button.is-small[type=submit]", "Submit")
                ]))
        ]
    }
}