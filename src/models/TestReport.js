// src/models/TestReport.js
const m = require("mithril")

const TestReport = {
    resultSet: [],
    loadResult: function (greeting) {
        return m.request({
            method: "GET",
            url: "https://nerium.kzfrb3.pw/v1/test/?greeting=" + greeting,
        })
            .then(function (result) {
                TestReport.resultSet = result.data
                console.log(TestReport.resultSet)
            })
    },
}

module.exports = TestReport