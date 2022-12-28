<template>
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                New Workout
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        label="Name"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.description"
                        label="Description"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                    <v-text-field
                        v-model="editedItem.duration"
                        label="Duration"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                    <v-text-field
                        v-model="editedItem.mincalories"
                        label="Minimum Calories"
                      ></v-text-field>
                    </v-col>
                  
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
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
          <v-dialog v-model="dialogWorkout" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Workout still in use! Finish session first</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeworkout">Cancel</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
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
      dialogWorkout:false,
      title:'Workouts',
      headers: [
        {
          text: 'Description',
          align: 'start',
          sortable: false,
          value: 'description',
        },
        { text: 'Duration (in minutes)', value: 'duration' },
        { text: 'Mininmu Calories', value: 'mincalories' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id:'',
        name: '',
        description:'',
        duration:'',
        mincalories:''
      },
      defaultItem: {
        id:'',
        name: '',
        description:'',
        duration:'',
        mincalories:''
      },
    }),
  
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Workout' : 'Edit Workout'
      },
    },
  
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
  
    created () {
      this.initialize()
    },
  
    methods: {
       initialize () {
        WorkoutDataService.getAllUserWorkout(localStorage.getItem("id")).then(response => {
        this.desserts=response.data
        console.log("in workout of user ",this.desserts)
      
       
      })
          .catch(e => {
            console.log(e);
          });
        // this.desserts = [
         
        // ]
      },
  
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        console.log("edited item",this.editedItem)
        this.dialog = true
      },
  
      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        
        // this.dialogWorkout=true
        WorkoutSessionDataService.getAllUserWorkoutSession(localStorage.getItem("id")).then(response => {
        console.log("local ", localStorage.getItem("id"))
    console.log("this edited item:::",this.editedItem.id)
        response.data.forEach(session => {
             if(session.workoutId==this.editedItem.id){
              console.log("in user>>>>>>")
              this.dialogWorkout=true
             }
            else{
              this.dialogDelete=true
            }
          
       });
      
      })
      
      },
  
      async deleteItemConfirm () {
       
        const response = await WorkoutDataService.delete(this.editedItem.id);
          console.log(response)
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },
  
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
  
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeworkout () {
        this.dialogWorkout = false
        this.dialogDelete=false
      },
  
      async save () {
        var responseData =[]
        if(typeof(this.editedItem.id)=='undefined'|| this.editedItem.id==''){
          var data ={
            name:this.editedItem.name,
            description:this.editedItem.description,
            duration:this.editedItem.duration,
            mincalories:this.editedItem.mincalories,
            userId:localStorage.getItem("id")

          }
          const response = await WorkoutDataService.create(data)
          responseData = response.data
        this.editedItem.id = responseData.id
         
        }
        else{
            var updatedData ={
            name:this.editedItem.name,
            description:this.editedItem.description,
            duration:this.editedItem.duration,
            mincalories:this.editedItem.mincalories,
            userId:localStorage.getItem("id")

          }
          try {
            
          const response = await WorkoutDataService.update(this.editedItem.id, updatedData);
          console.log(response)
        } catch (e) {
          console.log(e);
        }
        }
      
        if (this.editedIndex > -1) {
           Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
      async update () {
       
       try {
         const response = WorkoutDataService.update(this.editedItem);
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
  }
  </script>
    <style scoped>
    
    </style>
    