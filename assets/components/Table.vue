<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">
                    Id
                </th>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Content
                </th>
                <th class="text-left">
                    Category
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="post in all_posts"
                :key="post.id"
            >
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.content }}</td>
                <td>{{ post.category.name }}</td>
            </tr>
            </tbody>
            <v-container>
            </v-container>
        </template>
    </v-simple-table>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'Table',
    data() {
        return {
            users: {}
        };
    },
    computed: {
        ...mapGetters({
            all_posts: 'post/allPosts'
        })
        // post() {
        //     return this.$store.getters.allPosts;
        // }
    },
    mounted() {
        this.$store.dispatch('post/getPosts');
    },
    created: function () {
    }
}
;
</script>
