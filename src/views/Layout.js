// src/views/Layout.js
var m = require("mithril")

module.exports = {
    view: function(vnode) {
        return m("main.layout", [
            m("h1", "Baby Experimental Nerium Client" 
            ),
            m("p",
                m("span", "Fetches data from a "),
                m("a", {"href": "https://nerium.kzfrb3.pw/v1/test/?greeting=sup"}, "Nerium"),
                m("span", " instance running on my personal GCP account")
            ),
            m("section", vnode.children),
            m("p", {"style": "text-align: right;"}, m("a", {"href": "https://github.com/tym-oao/nerium-baby-client"}, "Source")
            )
        ])
    }
}