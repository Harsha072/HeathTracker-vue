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
              New Note
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.title" label="Title"></v-text-field>
                </v-col>
                <v-card color="yellow" class="ma-2" sticky>
                  <v-textarea v-model="editedItem.noteText" placeholder="Enter your note here"></v-textarea>
                </v-card>

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
        fas fa-eye
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

import UsrNotesDataService from '../service/notes'
export default {

  data: () => ({
    dialog: false,
    dialogDelete: false,
    title: 'Notes',
    // note: '',
    headers: [
      {
        text: 'Title',
        align: 'start',
        sortable: false,
        value: 'title',
      },
      { text: 'Text', value: 'noteText' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      title: '',
      noteText: '',
      shared: '',
      userId: '',

    },
    defaultItem: {
      id: "",
      title: '',
      noteText: '',
      shared: '',
      userId: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Note' : 'Edit Note'
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
      UsrNotesDataService.getAllUserNotes(localStorage.getItem("id")).then(response => {

        this.desserts = response.data


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
      const response = await UsrNotesDataService.delete(this.editedItem.id);
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

      console.log("saved note ", this.note)

      if (typeof (this.editedItem.id) == 'undefined' || this.editedItem.id == '') {

        var data = {
          title: this.editedItem.title,
          noteText: this.editedItem.noteText,
          shared: 'true',
          userId: localStorage.getItem("id")
        }
        const response = await UsrNotesDataService.create(data)

        this.editedItem.id = response.data.id

      }
      else {

        var updatedData = {
          id: this.editedItem.id,
          title: this.editedItem.title,
          noteText: this.editedItem.noteText,
          shared: 'true',
          userId: localStorage.getItem("id")


        }

        try {
          const response = await UsrNotesDataService.update(this.editedItem.id, updatedData);
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

  },
}
</script>
<style>
.v-card {
  position: sticky;
  top: 20px;
}
</style>