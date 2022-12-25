<template>
    <nav>
        <v-navigation-drawer v-model="drawer" dark app mini-variant mini-variant-width="70" class="teal">
            <v-list>
                <v-list-item class="mb-12">
                    <v-list-item-content>
                        <v-icon class="mb-2" large>fas fa-hand-holding-medical</v-icon>
                       
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list flat>
                <v-list-item router to="/home">
                    <v-list-item-content>
                        <v-tooltip right>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon class="mb-2"  dark v-bind="attrs" v-on="on">
                                    fas fa-home
                                </v-icon>
                            </template>
                            <span>Home</span>
                        </v-tooltip>
                      
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/activityList">
                    <v-list-item-content>
                    <v-tooltip right>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon dark v-bind="attrs" v-on="on">fa-solid fa-shoe-prints</v-icon>
                            </template>
                            <span>Activites</span>
                        </v-tooltip>
                    </v-list-item-content>
                </v-list-item>
        
                <v-list-item router to="/workoutList">
                <v-list-item-content>
                    <v-tooltip right>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon class="mb-2" dark v-bind="attrs" v-on="on">fas fa-solid fa-dumbbell</v-icon>
                            </template>
                            <span>Workouts</span>
                        </v-tooltip>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/workoutSessionList">
                    
                    <v-list-item-content>
                        <v-tooltip right>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon class="mb-2" dark v-bind="attrs" v-on="on">fas fa-cog</v-icon>
                            </template>
                            <span>Workout Session</span>
                        </v-tooltip>
                       
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list style="position: absolute; bottom:0" class="ml-3" flat>
                <v-list-item router to="/about">
                    <v-list-item-action>
                        <v-icon right>fas fa-sign-out-alt</v-icon>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>
<script>
export default {
    data: () => ({
        drawer: true,

    }),


}
</script>