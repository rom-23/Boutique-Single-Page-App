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
                        label="content"
                        required
                    ></v-text-field>
                </v-col>
                <v-subheader>Selected Value: {{ selected }}</v-subheader>
                <v-col
                    cols="12"
                    md="12"
                >
                    <v-select class="style-chooser" v-model="selected" :options="all_categories" :value="selected" label="name" :reduce="category => category.id" placeholder="Select Category"></v-select>
                </v-col>
            </v-row>
            <v-btn @click="addPost"
                   class="mt-5"
            >
                submit
            </v-btn>
        </v-container>
    </v-form>
</template>
<style>
.style-chooser .vs__selected{
    text-transform: lowercase;
    font-variant: small-caps;
}
.style-chooser .vs__search::placeholder{
    color: #394066;
    text-transform: lowercase;
    font-variant: small-caps;
}
.style-chooser .vs__dropdown-menu{
    padding: 0;
    margin-top: 0.1em;
    background: #ffffff;
    border: none;
    color: #394066;
    text-transform: lowercase;
    font-variant: small-caps;
}
.style-chooser .vs__clear{
    fill: #c42265;
}
.style-chooser .vs__open-indicator {
    fill: rgba(22, 184, 61, 0.67);
}
.style-chooser .vs__dropdown-option--highlight{
    background: rgba(22, 184, 61, 0.67);;
}
</style>
<script>
import Service from '/assets/service.js';
import { mapGetters } from 'vuex';
export default {
    name: 'NewPost',
    data() {
        return {
            selected : null,
            title    : '',
            slug     : '',
            content  : ''
        };
    },
    computed: {
        ...mapGetters({
            all_categories: 'category/allCategories'
        })
        // allCategories() {
        //     return this.$store.getters.allCategories;
        // }
    },
    mounted() {
        this.$store.dispatch('category/getCategories');
    },
    created() {
        // Service.get(
        //     'http://127.0.0.1:8000/api/categories',
        //     (response) => {
        //         this.categories = response.data['hydra:member'];
        //     }
        // ).catch(error => {
        //     console.log(error.message);
        // });
    },
    methods: {
        addPost() {
            let params = {
                'title'    : this.title,
                'slug'     : this.slug,
                'content'  : this.content,
                'category' : '/api/categories/'+this.selected
            };
            this.$store.dispatch('post/setPost', params);
        }
    }
};
</script>
