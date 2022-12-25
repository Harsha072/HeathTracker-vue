<!-- <template> -->
   <!-- <Login/> -->
  <!-- <v-app>
    <SideBar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app> -->
<!-- </template> -->

<!-- <script>
// import SideBar from './components/SideBar';
import Login from './components/Login.vue'

export default {
  name: 'App',

  components: {
    Login
   // SideBar,
  },

  data: () => ({
    //
  }),
};
</script> -->
<!-- <template>
  <v-container fluid class="grey lighten-5">
      <router-view />
  </v-container>
  </template>
  
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  </style> -->
  <template>
    <v-app>
      <SideBar v-if="!$route.meta.hideNavbar" />
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import SideBar from './components/SideBar';
  export default {
    name: 'App',
    components: {
      SideBar,
    },
    data: () => ({
      //
    }),
    
  };
  </script>
