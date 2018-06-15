<template>
  <div id='app'>
    <div class='section form columns is-centered'>
      <div class='column is-4'>
          <form ref='greeting-form' v-on:submit.prevent='updateGreeting'>
              <input type='text' placeholder='quux' v-model='newGreeting' class='form-field is-size-4'></input>
          </form>
      </div>
    </div>
    <div class='result'>
      <div class='row' v-for='row in resultSet'>
          <p v-for='(col, c) in row'><strong>{{ c + ': ' }}</strong>{{ col }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    load() {
    var req = new XMLHttpRequest()
    var url ='https://nerium.kzfrb3.pw/v1/test/?greeting=' + this.greeting
    console.log(url)
    req.open('GET', url, true)
    req.onload = () => {
      this.resultSet = JSON.parse(req.responseText).data
      console.log(this.resultSet)
    }
    req.send()
    },
    updateGreeting() {
      this.greeting = this.newGreeting
      this.load()
      console.log(this.greeting)
    }
  },
  data () {
    return {
      resultSet: [],
      greeting: 'sup',
      newGreeting: '',
    }
  },
  mounted() {
    this.load()
  }
}


</script>
