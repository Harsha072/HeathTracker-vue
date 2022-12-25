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
                    <!-- <v-select :items="workoutname" label="Workout Name*"  v-model="selectedWorkout" required></v-select> -->
                    <v-select v-model="select" :items="workoutname"
                      item-text="name" item-value="id" label="Workout"  return-object
                      single-line></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select :items="['start', 'Finish', 'Pending']" label="Status*" v-model="selectedStatus"
                      required></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.totalCalories" label="Minimum Calories"></v-text-field>
                  </v-col>
                 


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

import WorkoutDataService from '../service/workouts'
import WorkoutSessionDataService from '../service/workoutsession'
export default {

  data: () => ({
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
      { text: 'Duration', value: 'ended' },
      { text: 'Workout Name', value: 'workoutname' },
      { text: 'Calories Burnt', value: 'totalCalories' },
      { text: 'Status', value: 'status' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    data:{started: '',
      duration: '',
      workoutname: '',
      totalCalories: '',
      status: ''},
    workoutname: [],
    editedIndex: -1,
    editedItem: {
      id:'',
      started: '',
      duration: '',
      workoutname: '',
      totalCalories: '',
      status: '',
      workoutId:'',
      userId:''

    },
    defaultItem: {
      id:'',
      started: '',
      duration: '',
      workoutname: '',
      totalCalories: '',
      status: '',
      workoutId:'',
      userId:''
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

    initialize() {
      WorkoutSessionDataService.getAllUserWorkoutSession(localStorage.getItem("id")).then(response => {
        console.log("local ", localStorage.getItem("id"))
    
        response.data.forEach(session => {
             
          WorkoutDataService.getAll().then(response => { 
            response.data.forEach(workout => {
                     if(session.workoutId== workout.id){
                         this.data ={
                                  id:session.id,
                                  started: session.started,
                                   ended:session.ended,
                                   workoutname:workout.name,
                                   totalCalories:session.totalCalories,
                                   status:session.status,
                                   workoutId:session.workoutId,
                                   userId:session.userId
                                  }
                                 
                     }
                });
                this.desserts.push(this.data)
                console.log("in workout ", this.desserts)

           })  .catch(e => {
          console.log(e);
        });
         });
      
      })
        .catch(e => {
          console.log(e);
        });
      WorkoutDataService.getAll().then(response => {
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
      console.log("edited item", this.editedItem)
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
      console.log("save out edit ",this.editedItem)
      console.log("edit",this.desserts)
      console.log(today)
      if (typeof (this.editedItem.id) == 'undefined'|| this.editedItem.id=='') {
        console.log("save  injhljlk edit ",this.editedItem)
        var data = {
          started: today,
          ended: today,
          totalCalories: this.editedItem.totalCalories,
          status: this.selectedStatus,
          workoutId: this.select.id,
          userId: localStorage.getItem("id")

        }
    
        this.editedItem.started=today
        this.editedItem.ended=today
        this.editedItem.status=this.selectedStatus
        this.editedItem.workoutId=this.select.id
        this.editedItem.workoutname=this.select.name
        this.editedItem.userId = localStorage.getItem("id")

        console.log("save data",data)
        console.log("save item",this.editedItem)
         const response = await WorkoutSessionDataService.create(data)
         console.log("response", response)
        if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        console.log("after",data)
        this.desserts.push(this.editedItem)
      }
      this.close()
       }
      else {
        console.log("savce else edit ",this.editedItem)
        console.log("savce else edit ",this.selectedStatus)
        var updatedData = {
          started: today,
          ended: today,
          totalCalories:this.editedItem.totalCalories,
          status: this.selectedStatus,
          workoutId: this.select.id,
          userId: localStorage.getItem("id")

         }
         this.editedItem.started=today
        this.editedItem.ended=today
        this.editedItem.status=this.selectedStatus
        this.editedItem.workoutId=this.select.id
        this.editedItem.workoutname=this.select.name
        this.editedItem.userId = localStorage.getItem("id")
        console.log(updatedData)
        console.log("workout name",this.select.name)
        try {

           const response = await WorkoutSessionDataService.update(this.editedItem.id, updatedData);
         console.log(response)
        } catch (e) {
          console.log(e);
        }
        if (this.editedIndex > -1) {
          console.log("done edit",this.editedItem)
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        
          console.log("done edit else",this.editedItem)
        this.desserts.push(this.editedItem)
      }
      this.close()
      }

      
    },
    async update() {
         console.log("on",this.editedItem)
      // try {
      //   const response = WorkoutDataService.update(this.editedItem);
      //   console.log(response)
      // } catch (e) {
      //   console.log(e);
      // }
      // if (this.editedIndex > -1) {
      //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
      // } else {
      //   this.desserts.push(this.editedItem)
      // }
      // this.close()
    }
  },
}
</script>
<style scoped>

</style>
    