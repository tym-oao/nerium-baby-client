<test-report>

<div class='result'>
    <div class='row' each={ row in resultSet }>
        <p each={ col, c in row }><strong>{ c + ": "}</strong>{ col }</p>
    </div>
</div>

var self = this
this.resultSet = []

var req = new XMLHttpRequest()
req.open('GET', 'https://nerium.kzfrb3.pw/v1/test/?greeting=sup', true)
req.onload = () => {
    self.resultSet = JSON.parse(req.responseText).data
    console.log(self.resultSet)
    self.update()
}
req.send()

</test-report>