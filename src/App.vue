<template>
  <div id="app">
     <img alt="Vue logo" src="./assets/logo.png">
     <Menu />
     <Payment />
     <TransactionForm />
     <Footer />
  </div>
</template>

<script>
import TransactionForm from './components/TransactionForm.vue'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import Payment from './components/Payment.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Payment,
    TransactionForm,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
