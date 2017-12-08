import Vue from 'vue'
import VueHt, { htVuexStorage, htAjax } from 'vue-ht'
import config from '@/config'
import store from '@/store'
Vue.use(VueHt)
Vue.prototype.$config = config
Vue.prototype.$gkAjax = htAjax.create()
Vue.prototype.$tkAjax = htAjax.create()
console.log(Vue.prototype.$htAjaxGlobal)
Vue.prototype.$gkAjaxGlobal = Vue.prototype.$gkAjax.instance.defaults
Vue.prototype.$tkAjaxGlobal = Vue.prototype.$tkAjax.instance.defaults
htVuexStorage.init(config.storageKeys, config.sessionKeys, store, function (storage) {
  store.commit('initForm', storage)
})
Object.entries(config.filters).forEach(function (item) {
  Vue.filter(item[0], item[1])
})
Object.entries(config.components).forEach(function (item) {
  Vue.component(item[0], item[1])
})
