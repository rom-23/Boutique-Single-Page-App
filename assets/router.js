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
                },
                children: [
                    { path: '', component: UserHome },
                    { path: 'profile', component: UserProfile },
                    { path: 'posts', component: UserPosts }
                ]
            }
        },
        // {
        //     path       : 'table',
        //     name       : 'table',
        //     components : {
        //         main: () => {
        //             return import('./js/components/Table.vue');
        //         }
        //     }
        // },
        // {
        //     path       : 'date-picker',
        //     name       : 'datePicker',
        //     components : {
        //         main: () => {
        //             return import('./js/components/DatePicker.vue');
        //         }
        //     }
        // },
        {
            path     : '*',
            redirect : '/'
        }
    ]
});
