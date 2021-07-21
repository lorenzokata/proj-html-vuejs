import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.js';
import "@fortawesome/fontawesome-free/css/all.css";
import 'hooper/dist/hooper.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
