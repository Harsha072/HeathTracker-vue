
  <template>
    <v-app>
      <TitleComponentVue></TitleComponentVue>
      <SideBar v-if="!$route.meta.hideNavbar" />
      <v-main class="my-main">
        <router-view></router-view>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import TitleComponentVue from './components/TitleComponent.vue';
  import SideBar from './components/SideBar';
  
  export default {
    name: 'App',
    components: {SideBar,TitleComponentVue },
    data: () => ({
      //
    }),
    
  };
  </script>
<style>
.my-main {
  /* Add your styles here */
  background-color: white;
  padding: 16px;
}
</style>