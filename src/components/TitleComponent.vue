<template>
    <div>
      <v-toolbar
        dark
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>Vuetify</v-toolbar-title>
  
        <v-spacer></v-spacer>
        <v-col class="text-right">
                <v-btn type="submit" @click="logout" rounded color="teal" dark>
                  Logout
                </v-btn>
              </v-col>
        <!-- <v-btn icon>
          <v-icon>mdi-export</v-icon>
        </v-btn> -->
      </v-toolbar>
    </div>
  </template>
  <script>
  export default {
 methods: {
    logout() {
      localStorage.clear()
      this.$router.push({ name: 'login' })
    }

      },
    }

</script>