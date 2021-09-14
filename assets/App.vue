<template>
    <v-app light>
        <v-navigation-drawer color="secondary" v-model="drawer" app clipped width="40em">
            <v-container>

            </v-container>
        </v-navigation-drawer>
        <v-app-bar app clipped-left>
            <v-btn class="mx-2" small fab color="primary" @click.stop="drawer = !drawer" elevation="2">
                <v-icon>mdi-home-search</v-icon>
            </v-btn>
            <v-toolbar-items class="nav">
                <router-link :to="{ name: 'home'}">Home</router-link>
            </v-toolbar-items>
            <div class="flex-grow-1"></div>
            <v-toolbar-items class="nav navLink">
                <ul class="nav">
                    <router-link :to="{ name: 'table'}">Table</router-link>
                    <router-link :to="{ name: 'datePicker'}">Datepicker</router-link>
                </ul>
            </v-toolbar-items>
        </v-app-bar>
        <v-main>
            <v-content>
                <router-view name="main"/>
            </v-content>
        </v-main>
        <v-footer app>

        </v-footer>
    </v-app>
</template>
<script>
import Service from './service';
// const axios = require('axios');
// import router from '/assets/router.js';
export default {
    name       : 'App',
    components : {},
    props      : {},
    data       : () => {
        return {
            drawer: false

        };
    },
    mounted: function () {

    },
    beforeDestroy() {

    },
    destroyed() {

    },
    methods : {},
    created : function () {
        Service.get(
            'https://randomuser.me/api/?nat=gb',
            (response) => {
                console.log('****** response is *******', response.data.results);
            }
        ).catch(error => {
            console.log(error.message);
        });
    }
};
</script>

<style scoped>

</style>
