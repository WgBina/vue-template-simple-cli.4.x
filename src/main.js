// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './styles/index.scss' // global css

import App from './App'
// import store from './store'
import router from './router'

import './permission' // permission control

import HTTP from '@/api';
import mai from './utils/dictionary.js';

Vue.prototype.$HTTP = HTTP;//赋值使用
//全局埋点方法
Vue.prototype.$mai = mai.mai
Vue.prototype.$maiVisit = mai.maiVisit


Vue.use(Element)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')
