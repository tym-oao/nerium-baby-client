// src/views/Layout.js
var m = require("mithril")

module.exports = {
    view: function(vnode) {
        return m("main.layout", [
            m("img[style='text-align: center;']", {
                "src": "https://dl.dropboxusercontent.com/s/71rf6yosekslnog/skate.png",
            }),
            m("h1", "Baby Experimental Nerium Client" 
            ),
            m("p",
                [ "Fetches data from a ",
                m("a[href='https://nerium.kzfrb3.pw/v1/test/?greeting=sup']", "Nerium"),
                " instance running on my personal GCP account"]
            ),
            m("section", vnode.children),
            m("p", {"style": "text-align: right;"}, m("a[href='https://github.com/tym-oao/nerium-baby-client']", "Source")
            )
        ])
    }
}