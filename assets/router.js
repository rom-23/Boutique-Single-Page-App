import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode   : 'history',
    base   : process.env.BASE_URL,
    routes : [
        {
            path       : '/',
            name       : 'home',
            components : {
                main: () => {
                    return import('./js/components/Home.vue');
                }
            },
            children: [
                {
                    path      : 'table',
                    name      : 'home.table',
                    component : () => {
                        return import('./js/components/Table.vue');
                    }
                },
                {
                    path      : 'date-picker',
                    name      : 'home.date-picker',
                    component : () => {
                        return import('./js/components/DatePicker.vue');
                    }
                }
            ]
        },
        {
            path     : '*',
            redirect : '/'
        }
    ]
});
