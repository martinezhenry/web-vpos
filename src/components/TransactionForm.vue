<template>
  <div class="form">
    <h1>{{ title }}</h1>
    <p>
      Please complete the transaction information
    </p>
    <div class="form" >
      <form v-on:submit.prevent="prepareTx"  method="POST">
        <input class="input" type="text" id="v_amount" v-model="amount" placeholder="Amount"/>
        <select v-model="accTypes" aria-placeholder="Account Type">
          <option v-for="type in accTypes" :key="type.id" :value="type.value">
            {{ type.text }}
          </option>
        </select>
        <input class="button" type="submit" value="Send"/>
      </form>
    </div>
  <div>
    <img :src="qr" alt="">
  </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'TransactionForm',
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
    prepareTx() {

      const url = this.urlBase + '/prepare'

       axios.post(url, this.form)
                 .then((res) => {
                     //Perform Success Action
                    const data = res.data
                    console.log(res)
                    if (res.status == 200) {
                      //const image = data.body.qrImage
                      this.qr = "data:image/jpeg;base64," + data;
                    } else {
                      console.log ("failed")
                    }
                     
                 })
                 .catch((error) => {
                     // error.response.status Check status code
                     console.log(error)
                 }).finally(() => {
                     //Perform action in always
                 });
    }
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
