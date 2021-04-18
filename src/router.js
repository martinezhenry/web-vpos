import Vue from "vue";
import VueRouter from 'vue-router'

import Payment from './components/Payment'
import Home from './components/Home'

    
Vue.use(VueRouter)


const routes = [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/payment",
      name: "payment",
      component: Payment
    }
  ];
  
  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;