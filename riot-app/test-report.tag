<test-report>
<div class='result'>
<div class='row' each='{ row in resultSet }'>
        <p each='{ entry, e in row }'><strong>{ e + ": "}</strong>{ entry }</p>
    </div>
</div>

var self = this
this.resultSet = []

var req = new XMLHttpRequest()
req.open('GET', 'https://nerium.kzfrb3.pw/v1/test/?greeting=sup', true)
req.onload = () => {
    self.resultSet = JSON.parse(req.responseText).data
    self.resultKeys = JSON.stringify(self.resultSet.keys())
    console.log(self.resultSet)
    self.update()
}
req.send()


</test-report>