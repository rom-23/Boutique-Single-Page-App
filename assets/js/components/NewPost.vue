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
                <v-subheader>Selected Value: {{ selected}}</v-subheader>
                <v-col
                    cols="12"
                    md="12"
                >
                    <v-select v-model="selected" :options="categories" :value="selected" label="name" :reduce="name => name.name"></v-select>
<!--                    <v-select v-model="dbSelect" :items="categories" item-text="name" item-value="id" single-line label="Select category"></v-select>-->
                </v-col>
            </v-row>
            <v-btn @click="addPost"
                   class="mr-4"
                   type="submit"
            >
                submit
            </v-btn>
        </v-container>
    </v-form>
</template>
<script>
import Service from '/assets/service.js';

export default {
    name: 'NewPost',
    data() {
        return {
            selected   : null,
            categories : [],
            title      : '',
            slug       : '',
            content    : '',
            category   : ''
        };
    },
    computed: {},
    mounted() {
    },
    created() {
        Service.get(
            'http://127.0.0.1:8000/api/categories',
            (response) => {
                this.categories = response.data['hydra:member'];
            }
        ).catch(error => {
            console.log(error.message);
        });

    },
    methods: {
        addPost() {
            let params = {
                'title'    : this.title,
                'slug'     : this.slug,
                'content'  : this.content,
                'category' : {
                    'name': this.selected
                }
            };
            this.$store.dispatch('setPost', params);
        }
    }
}
;
</script>
