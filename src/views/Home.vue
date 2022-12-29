<template>

  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBarVue />
    <v-layout>
      <v-flex md30>
          <v-container>

            <v-row>
            
              <!-- <v-col cols="12" sm="12">
                <v-app-bar color="rgba(0,0,0,0)" flat class="mx-8 mb-8 mt-3">
                  <v-toolbar-title>Welcome to HealthiMe!</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-app-bar>
              </v-col> -->
              <v-col cols="12" sm="12">
                <v-card class="mx-20 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n10">
                  <v-app-bar color="rgba(0,0,0,0)" flat class="ma-8">
                    <h5>Calories Burnt each session day</h5>
                    <v-spacer></v-spacer>
                    
                  </v-app-bar>
                  <v-list-item three-line>
                    <template>
                    <div class="example">
                      <apexchart ref="demoChart" width="800" height="500" type="bar" :options="lineOptions" :series="series">
                      </apexchart>
                      <div>

                      </div>
                    </div>
                  </template>
                    
                  </v-list-item>

                </v-card>
              </v-col>
              <v-col cols="12" sm="12">
                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n10">
                  <v-app-bar color="rgba(0,0,0,0)" flat class="ma-8">
                    <h5>Calories Burnt per Activity</h5>
                    <v-spacer></v-spacer>
                    
                  </v-app-bar>
                  <template>
                    <div class="example">
                      <apexchart ref="demoChart" width="800" height="500" type="bar" :options="chartOptions" :series="series">
                      </apexchart>
                      <div>

                      </div>
                    </div>
                  </template>
                  <!-- <BarVue></BarVue> -->
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
            <br><br>
            
          </v-container>
      
      </v-flex>
      <!-- <v-flex md4>
        <v-app :style="{ background: $vuetify.theme.themes.light.background }">
          <v-container>
            <v-row>
              
                    
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
      </v-flex> -->

    </v-layout>
  </v-app>
</template>
<script>
import UserDataService from '../service/users'
import ActivityDataService from '../service/activities'
import WorkoutDataService from '../service/workouts'
import WorkoutSessionDataService from '../service/workoutsession';
import SideBarVue from '../components/SideBar.vue';
import moment from 'moment'

export default {
  data: () => ({
    width: 2,
    activity:[],
    calories:[],
    workoutName:[],
    duration:[],
    data:[],
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
    totalNumberOfSessions: [],
    chartOptions: {
      plotOptions: {
        bar: {
          
        }
      },
      xaxis: {
        categories: []
      }
    },
    lineOptions: {
     
      xaxis: {
        name:"",
        categories: []
      },
      
    },
    series: [{
      name: 'series-1',
      data: []
    }],
  }),
  created() {
    console.log("created")
    this.fillChartOptions()
  },
  methods: {
   async fillChartOptions(){
     
      await ActivityDataService.getAllUserActivity(localStorage.getItem("id")).then(response => {
        response.data.forEach(element => {
          console.log("tghe ",typeof element.description)
           this.activity.push(element.description)
           this.calories.push(element.calories)
           this.data.push(element.duration)
        });
      
       
      })
          .catch(e => {
            console.log(e);
          });

          await WorkoutSessionDataService.getAllUserWorkoutSession(localStorage.getItem("id")).then(response => {
        response.data.forEach(session => {
            console.log(session)
            // const startetime = new Date(session.started).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            const endtime = new Date(session.ended).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            const endmonth = new Date(session.ended)
             this.workoutName.push(endtime+" "+moment(endmonth).format('ddd'))
             console.log("start ",moment(endmonth).format('MMM'))
             this.duration.push(session.totalCalories)
             console.log("end ",endtime)
        });
       
       
      })
          .catch(e => {
            console.log(e);
          });
  
      this.chartOptions = {...this.chartOptions, ...{
    xaxis: {
       categories:this.activity
        },
        series:[{
          name:'Calories',
          data:this.calories
        }]
    }
}
this.lineOptions = {...this.lineOptions, ...{
    xaxis: {
       categories:this.workoutName
        },
        series:[{
          name:'Duration',
          data:this.duration
        }],
        
    }
}
    },

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

        const response = await ActivityDataService.getAllUserActivity(localStorage.getItem("id"));
        this.totalNumberOfActivity = response.data;
       
      } catch (e) {
        console.log(e);
      }
    },
    async getAllWorkout() {
      try {
        const response = await WorkoutDataService.getAllUserWorkout(localStorage.getItem("id"));
        this.totalNumberOfWorkout = response.data;
        console.log(this.totalNumberOfUsers.length);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllWorkoutSession() {
      try {
        const response = await WorkoutSessionDataService.getAllUserWorkoutSession(localStorage.getItem("id"));

        this.totalNumberOfSessions = response.data;
        console.log("session", this.totalNumberOfSessions.length);
      } catch (e) {
        console.log(e);
      }
    },
   



  },
  mounted() {
  
    this.getAllUsers()
    this.getAllActivity()
    this.getAllWorkout()
    this.getAllWorkoutSession()
  },

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  components: {
    SideBarVue
  }

};
</script>
<style scoped>

</style>
