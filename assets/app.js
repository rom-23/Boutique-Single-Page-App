import './css/app.scss';
import './bootstrap.js';
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify.js';
import router from './router.js';
import store from './store';

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    store,
    render: h => {
        return h(App);
    }
}).$mount('#app');
