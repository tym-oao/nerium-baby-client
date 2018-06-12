// src/models/VersionReport.js
const m = require("mithril")

const VersionReport = {
    resultSet: [],
    loadResult: function () {
        return m.request({
            method: "GET",
            url: "https://nerium.kzfrb3.pw/v1/version"
        })
            .then(function (result) {
                VersionReport.resultSet = result.data
                console.log(VersionReport.resultSet)
            })
    },
}

module.exports = VersionReport