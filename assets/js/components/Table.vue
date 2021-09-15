<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
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
                v-for="post in allPosts"
                :key="post.id"
            >
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
        ...mapGetters(['allPosts'])
        // post() {
        //     return this.$store.getters.allPosts;
        // }
    },
    mounted() {
        this.$store.dispatch('getPosts');
    },
    created: function () {
    }
}
;
</script>
