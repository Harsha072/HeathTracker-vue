<template>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
        <v-layout row>
            <v-container>
            <v-col cols="12" sm="12">
            <UserListVue></UserListVue>
            </v-col>
           </v-container>

        </v-layout>
    </v-app>
</template>
<script>
import UserListVue from '../components/UserList.vue';
export default {
    components: { UserListVue },
    computed: {
        theme() {
            return this.$vuetify.theme.dark ? "dark" : "light";
        }
    }
}
</script>