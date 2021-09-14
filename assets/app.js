import './css/app.scss';
import './bootstrap.js';
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify.js';
import router from './router.js';
import store from './store';
import vSelect from 'vue-select';

Vue.config.productionTip = false;
Vue.component('v-select', vSelect);
// Vue.use(vSelect);

new Vue({
    router,
    vuetify,
    store,
    render: h => {
        return h(App);
    }
}).$mount('#app');
