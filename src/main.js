// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入 全局CSS
import './assets/global.css'

//在 vue 脚手架中使用 element-ui
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
