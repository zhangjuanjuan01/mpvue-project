import Vue from 'vue'
import App from './AppH5'
Vue.config.productionTip = false;
App.mpType = 'H5';
const app = new Vue(App);
app.$mount();

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});