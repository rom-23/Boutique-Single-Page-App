<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">
                    Email
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in users"
                :key="item.email"
            >
                <td>{{ item.email }}</td>
            </tr>
            </tbody>
            <v-container>
                <router-link to="/">
                    Home
                </router-link>
            </v-container>
        </template>
    </v-simple-table>
</template>
<script>
import Service from '/assets/service.js';

export default {
    name: 'Table',
    data() {
        return {
            users: []
        };
    },
    created: function () {
        Service.get(
            'https://randomuser.me/api/?results=5',
            (response) => {
                this.users = response.data.results;
            }
        ).catch(error => {
            console.log(error.message);
        });
    }
};
</script>
