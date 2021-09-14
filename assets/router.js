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
            }
            // children: [
            //     {
            //         path       : 'table',
            //         name       : 'home.table',
            //         components : {
            //             main: () => {
            //                 return import('./js/components/Table.vue');
            //             },
            //             right: () => { return import('./js/components/NewPost.vue'); }
            //         }
            //     },
            //     {
            //         path       : 'date-picker',
            //         name       : 'home.date-picker',
            //         components : {
            //             main: () => {
            //                 return import('./js/components/DatePicker.vue');
            //             }
            //         }
            //     }
            // ]
        },
        {
            path     : '*',
            redirect : '/'
        }
    ]
});
