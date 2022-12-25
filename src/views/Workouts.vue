<template>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
        <v-layout row>
            <v-container>
            <v-col cols="12" sm="12">
            <workoutList></workoutList>
            </v-col>
        </v-container>
        </v-layout>
    </v-app>
</template>
<script>
import workoutList from '../components/WorkoutList.vue';
export default {
    components: { workoutList },
    computed: {
        theme() {
            return this.$vuetify.theme.dark ? "dark" : "light";
        }
    }
}
</script>