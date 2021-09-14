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
                        label="Title"
                        required
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model="slug"
                        :counter="10"
                        label="Slug"
                        required
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model="content"
                        label="email"
                        required
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model="category"
                        label="Category"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-btn @click="submitMe"
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
            slug     : '',
            content  : '',
            category : ''
        };
    },
    computed: {
    },
    mounted() {
    },
    methods: {
        submitMe() {
            this.$store.dispatch('setPost');
        }
    }
}
;
</script>
