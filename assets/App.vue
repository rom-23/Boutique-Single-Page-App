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
                    <router-link :to="{ name: 'date-picker'}">Datepicker</router-link>
                </ul>
            </v-toolbar-items>
        </v-app-bar>
        <v-main>
            <v-row>
                <v-col cols="8" class="p-5">
                    <router-view name="main"></router-view>
                </v-col>
                <v-col cols="4" class="p-5">
                    <router-view name="right"></router-view>
                </v-col>
            </v-row>
        </v-main>
        <v-footer app>

        </v-footer>
    </v-app>
</template>
<script>
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

    }
};
</script>

<style scoped>

</style>
