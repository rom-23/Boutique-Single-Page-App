<template>
    <div class="p-5">
        <div>
            <v-alert
                border="top"
                color="green lighten-2"
                dark
            >
                I'm an alert with a top border and green color<br>
                <v-btn elevation="2" @click="close">Close
                </v-btn>
            </v-alert>
        </div>

    </div>
</template>
<script>
export default {
    name       : 'Info',
    components : {},
    data() {
        return {};
    },
    mounted() {
    },
    methods: {
        close() {
            return this.$router.back();
        }
    },
    created() {
    }
};
</script>
<style>
</style>
