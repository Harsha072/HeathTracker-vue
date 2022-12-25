<template>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
        <v-layout row>
            <v-container>
            <v-col cols="12" sm="12">
            <WorkoutSessionListVue></WorkoutSessionListVue>
            </v-col>
            </v-container>
        </v-layout>
    </v-app>
</template>
<script>
import WorkoutSessionListVue from '../components/WorkoutSessionList.vue';
export default {
    components: { WorkoutSessionListVue },
    computed: {
        theme() {
            return this.$vuetify.theme.dark ? "dark" : "light";
        }
    }
}
</script>