<template>
  <v-col cols="12" sm="6">
    <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n12">

      <v-app-bar color="rgba(0,0,0,0)" flat class="ma-8">
        <h5>Your activity</h5>
        <v-spacer></v-spacer>
        <v-btn color="teal" rounded dark depressed>Week</v-btn>
        <v-btn text>Month</v-btn>
      </v-app-bar>
      <v-progress-circular rotate="360" size="100" width="15" value="50" color="teal" class="mt-n5 ml-5 mb-2">
        50
      </v-progress-circular>
      <v-progress-circular rotate="360" size="100" width="15" value="70" color="red" class="mt-n5 ml-2 mb-2">
        70
      </v-progress-circular>
      <v-progress-circular rotate="360" size="100" width="15" value="80" color="blue" class="mt-n5 ml-2 mb-2">
        80
      </v-progress-circular>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: 'activity'

}
</script>