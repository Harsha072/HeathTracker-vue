<template>
  <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              New Session
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">

                    <v-select v-model="select" :items="workoutname" item-text="name" item-value="id" label="Workout"
                      return-object single-line></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select :items="['start', 'Finish', 'Pending']" label="Status*" v-model="selectedStatus"
                      required></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.totalCalories" label="Minimum Calories"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                  </v-col>
                </v-row>

                <v-row>

                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
import moment from 'moment'
import WorkoutDataService from '../service/workouts'
import WorkoutSessionDataService from '../service/workoutsession'
export default {

  data: () => ({
    time: null,
    menu2: false,
    dialog: false,
    dialogDelete: false,
    selectedWorkout: null,
    selectedStatus: null,
    title: 'Workout Session',
    headers: [
      {
        text: 'Start(in minutes)',
        align: 'started',
        sortable: false,
        value: 'started',
      },
      { text: 'Duration', value: 'duration' },
      { text: 'Workout Name', value: 'workoutname' },
      { text: 'Calories Burnt', value: 'totalCalories' },
      { text: 'Status', value: 'status' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    data: {
      started: '',
      duration: '',
      workoutname: '',
      totalCalories: '',
      status: ''
    },
    workoutname: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      started: '',
      duration: '',
      workoutname: '',
      totalCalories: '',
      status: '',
      workoutId: '',
      userId: ''

    },
    defaultItem: {
      id: '',
      started: '',
      duration: '',
      workoutname: '',
      totalCalories: '',
      status: '',
      workoutId: '',
      userId: ''
    },
    select: { id: '', name: '' },

  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Session' : 'Edit Session'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {

    async initialize() {
      await WorkoutSessionDataService.getAllUserWorkoutSession(localStorage.getItem("id")).then(response => {

        response.data.forEach(session => {

          WorkoutDataService.getAll().then(response => {
            response.data.forEach(workout => {
              if (session.workoutId == workout.id) {
                const startetime = new Date(session.started).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                const startdate = new Date(session.started).toISOString().split('T')
                const endtime = new Date(session.ended).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                const enddate = new Date(session.ended).toISOString().split('T')

                this.data = {
                  id: session.id,
                  started: startdate[0] + " " + startetime,
                  duration: enddate[0] + " " + endtime,
                  workoutname: workout.name,
                  totalCalories: session.totalCalories,
                  status: session.status,
                  workoutId: session.workoutId,
                  userId: session.userId
                }

              }
            });
            this.desserts.push(this.data)


          }).catch(e => {
            console.log(e);
          });
        });

      })
        .catch(e => {
          console.log(e);
        });
      await WorkoutDataService.getAll().then(response => {
        response.data.forEach(element => {
          var item = { id: element.id, name: element.name }
          this.workoutname.push(item)
        });


      })
        .catch(e => {
          console.log(e);
        });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)

      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm() {

      const response = await WorkoutSessionDataService.delete(this.editedItem.id);
      console.log(response)
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save() {
      var today = new Date(Date.now()).toISOString()
      const myDate = today
      const time = new Date(myDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      const date = new Date(today).toISOString().split('T')

      if (typeof (this.editedItem.id) == 'undefined' || this.editedItem.id == '') {

        var data = {
          started: today,
          ended: today,
          totalCalories: this.editedItem.totalCalories,
          status: this.selectedStatus,
          workoutId: this.select.id,
          userId: localStorage.getItem("id")

        }

        this.editedItem.started = date[0] + " " + time
        this.editedItem.duration = date[0] + " " + time
        this.editedItem.status = this.selectedStatus
        this.editedItem.workoutId = this.select.id
        this.editedItem.workoutname = this.select.name
        this.editedItem.userId = localStorage.getItem("id")
        const response = await WorkoutSessionDataService.create(data)
        this.editedItem.id = response.data.id

        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {

          this.desserts.push(this.editedItem)
        }
        this.close()
      }
      else {

        var arr = this.editedItem.started.replace("AM", ':00')


        let parsedDate = moment(arr, 'YYYY.MM.DD H:mm:ss')

        var updatedData = {
          started: parsedDate.toISOString(),
          ended: today,
          totalCalories: this.editedItem.totalCalories,
          status: this.selectedStatus,
          workoutId: this.select.id,
          userId: localStorage.getItem("id")

        }

        this.editedItem.duration = date[0] + " " + time
        this.editedItem.status = this.selectedStatus
        this.editedItem.workoutId = this.select.id
        this.editedItem.workoutname = this.select.name
        this.editedItem.userId = localStorage.getItem("id")

        try {

          const response = await WorkoutSessionDataService.update(this.editedItem.id, updatedData);
          console.log(response)
        } catch (e) {
          console.log(e);
        }
        if (this.editedIndex > -1) {

          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {


          this.desserts.push(this.editedItem)
        }
        this.close()
      }


    },

  },
}
</script>
<style scoped>

</style>
    