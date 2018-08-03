import Vue from 'vue'
import App from './index'
import Request from '../../../comm/request'
import MsgBox from '../../../comm/MsgBox'

const app = new Vue(App)
app.$mount();
Vue.prototype.$Request = Request;
Vue.prototype.$MsgBox = MsgBox;

export default {
  config: {
    navigationBarTitleText: '查看启动日志'
  }
}
