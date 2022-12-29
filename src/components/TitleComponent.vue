<template>
  <div class="myclass">
    <v-toolbar dark color="darken': #00796b">
      <v-spacer></v-spacer>
      <v-toolbar-title>Healthy Me !!</v-toolbar-title>

      <v-spacer></v-spacer>


    </v-toolbar>
    <v-col v-if="!$route.meta.hideLogout" class="text-right">
      <v-btn type="submit" @click="logout" rounded color="teal" dark>
        Logout
      </v-btn>
    </v-col>
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
<style scoped>
.myclass {
  font-family: 'Mansalva', cursive;
  text-align: center;
}
</style>