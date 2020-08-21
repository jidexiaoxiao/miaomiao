import Vue from 'vue'
import App from './App.vue'
// 这块加文件夹或者改名的时候就需要改 在这引入路由router和store
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')