<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">
                    Email
                </th>
                <th class="text-left">
                    Category
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="post in posts"
                :key="post.id"
            >
                <td>{{ post.title }}</td>
                <td>{{ post.category.name }}</td>
            </tr>
            </tbody>
            <v-container>
            </v-container>
        </template>
    </v-simple-table>
</template>
<script>
export default {
    name: 'Table',
    data() {
        return {
            users: {}
        };
    },
    computed: {
        posts() {
            return this.$store.getters.allPosts;
        }
    },
    mounted() {
        this.$store.dispatch('getPosts');
    },
    created: function () {
        // Service.get(
        //     'http://127.0.0.1:8000/api/posts',
        //     (response) => {
        //         this.users = response.data['hydra:member'];
        //     }
        // ).catch(error => {
        //     console.log(error.message);
        // });
    }
}
;
</script>
