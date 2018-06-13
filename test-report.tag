<test-report>


<div class='section form columns is-centered'>
    <div class='column is-4'>
        <form ref='greeting-form' onsubmit={ submit }>
            <input type='text' placeholder='quux' ref='greeting' class='form-field is-size-4'>
            <button ref='submit' class='button is-primary'>Go</button>
        </form>
    </div>
</div>
<div class='result'>
    <div class='row' each={ row in resultSet }>
        <p each={ col, c in row }><strong>{ c + ": "}</strong>{ col }</p>
    </div>
</div>

var self = this
this.resultSet = []

load() {
    var req = new XMLHttpRequest()
    url ='https://nerium.kzfrb3.pw/v1/test/?greeting=' + (opts.greeting || 'sup')
    req.open('GET', url, true)
    req.onload = () => {
        self.resultSet = JSON.parse(req.responseText).data
        console.log(self.resultSet)
        self.update()
    }
    req.send()
}

self.load()

submit(e) {
    e.preventDefault()
    opts.greeting = this.refs.greeting.value
    console.log(opts.greeting)
    self.load()
}
</test-report>