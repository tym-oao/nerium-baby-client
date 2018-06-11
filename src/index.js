// src/index.js
const m = require("mithril")
const Layout = require("./views/Layout")
const TestReportView = require("./views/TestReportView")
const VersionReportView = require("./views/VersionReportView")

m.route(document.body, "/test", {
    "/test": {
        render: function() {
            return m(Layout, m(TestReportView))
        }
    },
    "/version": {
        render: function() {
            return m(Layout, m(VersionReportView))
        }
    }
})