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
              New Activity
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.description" label="Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.duration" label="Duration (in min)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
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

import ActivityDataService from '../service/activities'
export default {

  data: () => ({
    dialog: false,
    dialogDelete: false,
    title: 'Activity',
    headers: [
      {
        text: 'Description',
        align: 'start',
        sortable: false,
        value: 'description',
      },
      { text: 'Duration (in minutes)', value: 'duration' },
      { text: 'Calories', value: 'calories' },
      { text: 'Time', value: 'started' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      description: '',
      duration: '',
      calories: '',
      started: '',

    },
    defaultItem: {
      id: "",
      description: '',
      duration: '',
      calories: '',
      started: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Activity' : 'Edit Activity'
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
      ActivityDataService.getAllUserActivity(localStorage.getItem("id")).then(response => {

        this.desserts = response.data

        this.desserts.forEach(element => {
          const time = new Date(element.started).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
          const date = new Date(element.started).toISOString().split('T')
          console.log(date[0])
          element.started = date[0] + " " + time

        });

      })
        .catch(e => {
          console.log(e);
        });
      // this.desserts = [

      // ]
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
      const response = await ActivityDataService.delete(this.editedItem.id);
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
      var responseData = []
      var today = new Date(Date.now()).toISOString()
      const myDate = today
      const time = new Date(myDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      const date = new Date(today).toISOString().split('T')

      if (typeof (this.editedItem.id) == 'undefined' || this.editedItem.id == '') {

        var data = {
          description: this.editedItem.description,
          duration: this.editedItem.duration,
          calories: this.editedItem.calories,
          started: today,
          userId: localStorage.getItem("id")
        }

        this.editedItem.started = date[0] + " " + time
        const response = await ActivityDataService.create(data)
        responseData = response.data
        this.editedItem.id = responseData.id
      }
      else {

        var updatedData = {
          id: this.editedItem.id,
          description: this.editedItem.description,
          duration: this.editedItem.duration,
          calories: this.editedItem.calories,
          started: today,
          userId: localStorage.getItem("id")


        }
        this.editedItem.started = date[0] + " " + time
        try {
          const response = await ActivityDataService.update(this.editedItem.id, updatedData);
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
    async update() {

      try {
        const response = ActivityDataService.update(this.editedItem);
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
    