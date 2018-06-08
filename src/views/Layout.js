// src/views/Layout.js
var m = require("mithril")

module.exports = {
    view: function(vnode) {
        return m("main.section.container", [
            m(".columns.is-centered",
              m(".column.is-narrow"),
                m("img.is-128x128", {
                "src": "https://dl.dropboxusercontent.com/s/71rf6yosekslnog/skate.png",
            })),
            m("h1.title", "Baby Experimental Nerium Client" 
            ),
            m("p.subtitle",
                [ "Fetches data from a ",
                m("a[href='https://nerium.kzfrb3.pw/v1/test/?greeting=sup']", "Nerium"),
                " instance running on my personal GCP account"]
            ),
            m("section", vnode.children),
            m("footer",
                m("p.has-text-right", 
                    m("a[href='https://github.com/tym-oao/nerium-baby-client']", "Source")
            ))
        ])
    }
}