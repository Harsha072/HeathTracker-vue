<template>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
        <v-layout row>
           <v-container>
            <v-col cols="12" sm="12">
             <UserNotesVue></UserNotesVue>
            </v-col>
        </v-container>
        </v-layout>
    </v-app>
</template>
<script>

import UserNotesVue from '../components/UserNotes.vue'; 
export default {
    components: { UserNotesVue },
    computed: {
        theme() {
            return this.$vuetify.theme.dark ? "dark" : "light";
        }
    }
}
</script>