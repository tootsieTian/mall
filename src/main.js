import Vue from 'vue'
import App from './App.vue'
import router from './router'

//axios要用原型对象
import axios from 'axios'
Vue.prototype.$axios = axios

//vant组件
import flex from 'amfe-flexible'
import {Button, Row, Col} from 'vant'
Vue.use(flex)
Vue.use(Button).use(Row).use(Col)

//mock假接口
import './mock/mock'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
