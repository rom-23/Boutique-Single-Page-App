<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model="title"
                        :counter="10"
                        label="gender"
                        required
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model="content"
                        label="E-mail"
                        required
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model="category"
                        label="E-mail"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-btn
                class="mr-4"
                type="submit"
            >
                submit
            </v-btn>
        </v-container>
    </v-form>
</template>
<script>
export default {
    name: 'NewPost',
    data() {
        return {
            title    : '',
            content  : '',
            category : ''
        };
    },
    computed: {
    },
    mounted() {
    },
    created: function () {

    }
}
;
</script>
