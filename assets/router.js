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
            }
        },
        {
            path       : '/table',
            name       : 'table',
            components : {
                main: () => {
                    return import('./js/components/Table.vue');
                },
                right: () => {
                    return import('./js/components/NewPost.vue');
                }
            }
        },
        {
            path       : '/date-picker',
            name       : 'date-picker',
            components : {
                main: () => {
                    return import('./js/components/DatePicker.vue');
                }
            },
            children: [
                {
                    path       : 'info',
                    name       : 'date-picker.info',
                    components : {
                        right: () => { return import('./js/components/Info.vue'); }
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
