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
                    return import('./components/Home.vue');
                }
            }
        },
        {
            path       : '/table',
            name       : 'table',
            components : {
                main: () => {
                    return import('./components/Table.vue');
                },
                right: () => {
                    return import('./components/NewPost.vue');
                }
            }
        },
        {
            path       : '/date-picker',
            name       : 'date-picker',
            components : {
                main: () => {
                    return import('./components/DatePicker.vue');
                }
            },
            children: [
                {
                    path       : 'info',
                    name       : 'date-picker.info',
                    components : {
                        right: () => { return import('./components/Info.vue'); }
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
