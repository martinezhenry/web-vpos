<template>
  <div id="home">
      <h1>Home</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      title: "Transaction Information",
      urlBase: "http://localhost:8082/1/transaction",
      qr: "data:image/jpeg;base64,",
      amount: "",
      accType: 10,
      accTypes: [
        { text: "Savings", value: 10},
        { text: "Credit", value: 30},
        { text: "Check", value: 20},
      ]

    }
  },
  methods: {
   
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
