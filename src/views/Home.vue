<template>

  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <SideBarVue />
    <v-layout>
      <v-flex md8>
        <v-app :style="{ background: $vuetify.theme.themes.dark.background }" class="rounded-tr-xl rounded-br-xl">
          <v-container>
            <v-row>
              <v-col cols="12" sm="12">
                <v-app-bar color="rgba(0,0,0,0)" flat class="mx-8 mb-8 mt-3">
                  <v-toolbar-title>Welcome to Healthifi </v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-app-bar>
              </v-col>
              <v-col cols="12" sm="12">
                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n15">
                  <v-list-item three-line>
                    <v-list-item-content class="pa-10">
                      <v-list-item-title class="headline mb-1">
                        Today <span class="teal--text">-10%</span> discount<br>
                        on lung examinations
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        The package price includes: consultation<br>
                        of a pulmonologist, spirography, cardiogram <span class="teal--text">></span>
                      </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar tile size="150" class="pr-10">
                      <img src="lungs.png">
                    </v-list-item-avatar>
                  </v-list-item>

                </v-card>
              </v-col>
              <v-col cols="12" sm="12">
                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n10">
                  <v-app-bar color="rgba(0,0,0,0)" flat class="ma-8">
                    <h5>Statistics of your health</h5>
                    <v-spacer></v-spacer>
                    <v-btn color="teal" text>2019
                      <v-icon right>
                        mdi-chevron-down
                      </v-icon>
                    </v-btn>
                    <v-btn color="teal" rounded dark depressed>Year</v-btn>
                    <v-btn text>Mounth</v-btn>
                  </v-app-bar>
                  <template>
                    <v-sparkline :value="value" color="teal" :smooth="radius || false" :padding="padding"
                      :line-width="width" :stroke-linecap="lineCap" :fill="fill" :type="type"
                      :auto-line-width="autoLineWidth" auto-draw></v-sparkline>
                  </template>
                </v-card>
              </v-col>
            
              <v-col cols="12" sm="6">
                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4" color="teal" dark>
                  <v-list-item three-line>
                    <v-list-item-content class="pa-2">
                      <v-list-item-title class="headline mb-1">
                        Total Number of Users <br>
                        <h2 style="text-align: center;">{{ this.totalNumberOfUsers.length }}</h2>
                      </v-list-item-title>
                     

                    </v-list-item-content>


                  </v-list-item>

                </v-card> 

              </v-col>
              <v-col cols="12" md="6">
                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4" color="teal" dark>
                  <v-list-item three-line>
                    <v-list-item-content class="pa-2">
                      <v-list-item-title class="headline mb-1">
                        Total Number of Activites<br>
                        <h2 style="text-align: center;">{{ this.totalNumberOfActivity.length }}</h2>
                      </v-list-item-title>
                      <button type="submit" @click="logout">hello</button>
                     


                    </v-list-item-content>



                  </v-list-item>

                </v-card>

              </v-col>
              <v-col cols="12" sm="6">
                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4" color="teal" dark>
                  <v-list-item three-line>
                    <v-list-item-content class="pa-2">
                      <v-list-item-title class="headline mb-1">
                        Total Number of WorkoutSessions<br>
                        <h2 style="text-align: center;">{{ this.totalNumberOfSessions.length }}</h2>
                      </v-list-item-title>
                     


                    </v-list-item-content>



                  </v-list-item>

                </v-card>

              </v-col>

            </v-row>
            <br><br>
            <v-row>
              <v-col cols="12" sm="6">
                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4" color="teal" dark>
                  <v-list-item three-line>
                    <v-list-item-content class="pa-2">
                      <v-list-item-title class="headline mb-1">
                        Total Number of Workouts <br>
                        <h2 style="text-align: center;">{{ this.totalNumberOfWorkout.length }}</h2>
                      </v-list-item-title>
                      


                    </v-list-item-content>



                  </v-list-item>

                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-app>
      </v-flex>
      <v-flex md4>
        <v-app :style="{ background: $vuetify.theme.themes.light.background }">
          <v-container>
            <v-row>
              <v-col cols="12" sm="12">
                <v-list two-line>

                  <v-list-item>
                    <v-list-item-avatar>
                      <img src="https://cdn.vuetifyjs.com/images/lists/3.jpg">
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>Anastasia Turner</v-list-item-title>
                      <v-list-item-subtitle class="teal--text">35 years, Houston</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-spacer></v-spacer>
                    <v-icon color="teal">mdi-menu</v-icon>
                  </v-list-item>
                </v-list>
              </v-col>
                    
              <v-col cols="12" sm="12">
                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n12">

                  <v-app-bar color="rgba(0,0,0,0)" flat class="ma-8">
                    <h5>Your activity</h5>
                    <v-spacer></v-spacer>
                    <v-btn color="teal" rounded dark depressed>Week</v-btn>
                    <v-btn text>Mounth</v-btn>
                  </v-app-bar>
                  <v-progress-circular rotate="360" size="100" width="15" value="50" color="teal"
                    class="mt-n5 ml-5 mb-2">
                    50
                  </v-progress-circular>
                  <v-progress-circular rotate="360" size="100" width="15" value="70" color="red"
                    class="mt-n5 ml-2 mb-2">
                    70
                  </v-progress-circular>
                  <v-progress-circular rotate="360" size="100" width="15" value="80" color="blue"
                    class="mt-n5 ml-2 mb-2">
                    80
                  </v-progress-circular>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-app>
      </v-flex>

    </v-layout>
  </v-app>
</template>
<script>
import UserDataService from '../service/users'
import ActivityDataService from '../service/activities'
import WorkoutDataService from '../service/workouts'
import WorkoutSessionDataService from '../service/workoutsession';
import SideBarVue from '../components/SideBar.vue';

export default {
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    value: [0, 2, 5, 9, 5, 100, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    fill: false,
    type: "trend",
    autoLineWidth: false,
    totalNumberOfUsers: [],
    totalNumberOfActivity: [],
    totalNumberOfWorkout: [],
    totalNumberOfSessions: []
  }),
  methods: {
    async getAllUsers() {
      console.log("dghhhhhgf", localStorage.getItem("id"))
      try {
        const response = await UserDataService.getAll();
        this.totalNumberOfUsers = response.data;
        console.log(this.totalNumberOfUsers.length);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllActivity() {
      try {

        const response = await ActivityDataService.getAll();
        this.totalNumberOfActivity = response.data;
        console.log("activity ", this.totalNumberOfActivity.length);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllWorkout() {
      try {
        const response = await WorkoutDataService.getAll();
        this.totalNumberOfWorkout = response.data;
        console.log(this.totalNumberOfUsers.length);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllWorkoutSession() {
      try {
        const response = await WorkoutSessionDataService.getAll();
        this.totalNumberOfSessions = response.data;
        console.log(this.totalNumberOfSessions.length);
      } catch (e) {
        console.log(e);
      }
    },
    logout() {
      localStorage.clear()
      this.$router.push({ name: 'login' })
    }



  },
  mounted() {
    this.getAllUsers()
    this.getAllActivity()
    this.getAllWorkout()

  },

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  components: { SideBarVue }

};
</script>
<style scoped>

</style>
