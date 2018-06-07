// src/index.js
const m = require("mithril")
const TestReportView = require("./views/TestReportView")
const Layout = require("./views/Layout")

m.route(document.body, "/test", {
    "/test": {
        render: function() {
            return m(Layout, m(TestReportView))
        }
    },
})