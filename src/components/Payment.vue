<template>
  <div id="payment">
      <h1>Payment</h1>
      <p>Request a Payment</p>
      <select id="amoutType"  @change="displayAmount" v-model="paymentType" >
          <option disabled value='0'>Select payment type</option>
          <option v-for="type in paymentTypes" :key="type.id" :value="type.value">
            {{ type.text }}
          </option>
      </select>
      <input id="amount" :disabled="disabled==1" type="number" placeholder="Amount" v-model="amount" />
      <select id="reqType" v-model="requestType" >
          <option disabled value="-1">Select payment type</option>
          <option v-for="requestType in requestTypes" :key="requestType.id" :value="requestType.value">
            {{ requestType.text }}
          </option>
      </select>
      <input @click="prepareTran" class="button" type="submit" value="Send"/>
      <div>
        
        <img v-if="showQr" :src="data"/>
        <p><a v-if="!showQr" :href="data">{{ data }}</a></p>
      </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'Payment',
  data() {
    return {
      title: "Transaction Information",
      urlBase: "http://localhost:8082/1/transaction",
      data: "",
      amount: "",
      disabled: 1,
      paymentType: 0,
      requestType: "-1",
      showQr: false,
      paymentTypes: [
        { text: "I know the amount", value: 1},
        { text: "I don't know  the amount", value: 2},
      ],
      requestTypes: [
        { text: "QR Code", value: "qr"},
        { text: "Link", value: "lnk"},
      ]

    }
  },
  methods: {
   displayAmount(){
     this.disabled = (this.paymentType != 1)
   },
   prepareTran(){
     const url = this.urlBase + '/prepare'
     const transaction = { 
              amount: this.amount,
              requestType: this.requestType
     
     }
    console.log(transaction)
       axios.post(url, transaction)
                 .then((res) => {
                     //Perform Success Action
                    const data = res.data
                    console.log(res)
                    if (res.status == 200) {
                      //const image = data.body.qrImage
                      console.log(this.requestType)
                      if (this.requestType == "qr") {
                        this.data = "data:image/jpeg;base64," + data;
                        this.showQr = true
                      } else {
                        this.showQr = false
                        this.data = data
                      }
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
  mounted: function() {
    const parameters = this.$route.query
    console.log(parameters)

    const tranId = this.$route.query.tranId
    console.log(tranId)
  }
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
