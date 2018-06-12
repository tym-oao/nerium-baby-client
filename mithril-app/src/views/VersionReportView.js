// src/views/VersionReportView.js
const m = require("mithril")
const VersionReport = require("../models/VersionReport")


module.exports = {
    oninit: VersionReport.loadResult(),
    view: function() {
        return [m(
            ".result",
            VersionReport.resultSet.map(function(row) {
                return m(".row", 
                Object.entries(row).map(function (field) {
                    return m("p",
                        m("strong", field[0] + ": "),
                        field[1])
                }), m("p", "\u00A0"))
            })
        ),]
    }
}