<template>
   <v-app>
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>{{ isRegister ? stateObj.register.name : stateObj.login.name }}
                           form</v-toolbar-title>
                     </v-toolbar>
                     <v-dialog v-model="isvalid" max-width="500px">
                        <v-card>
                           <v-card-title class="text-h5"><h3>Invalid credentials! Please Register</h3></v-card-title>
                           <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="blue darken-1" text @click="close">Ok</v-btn>
                              <!-- <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>  -->
                              <v-spacer></v-spacer>
                           </v-card-actions>
                        </v-card>
                     </v-dialog>
                     <v-card-text>
                        <form ref="form" @submit.prevent="isRegister ? register() : login()">
                           <v-text-field v-model="username" name="username" label="Username" type="text"
                              placeholder="username" required></v-text-field>
                           <v-text-field v-model="email" name="email" label="Email" type="text" placeholder="email"
                              required></v-text-field>

                           <v-text-field v-model="password" name="password" label="Password" type="password"
                              placeholder="password" required></v-text-field>

                           <v-text-field v-if="isRegister" v-model="confirmPassword" name="confirmPassword"
                              label="Confirm Password" type="password" placeholder="cocnfirm password"
                              required></v-text-field>
                           <div class="red--text"> {{ errorMessage }}</div>
                           <v-btn type="submit" class="mt-4" color="primary" value="log in">{{ isRegister ?
                                 stateObj.register.name : stateObj.login.name
                           }}</v-btn>
                           <div class="grey--text mt-4" v-on:click="isRegister = !isRegister;">
                              {{ toggleMessage }}
                           </div>
                        </form>
                     </v-card-text>
                  </v-card>

               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>
 
<script>
import UserDataService from '../service/users'

export default {
   name: "App",
   data() {
      return {
         username: "",
         password: "",
         confirmPassword: "",
         email: "",
         userId: "",
         isRegister: false,
         errorMessage: "",
         isvalid: false,
         stateObj: {
            register: {
               name: 'Register',
               message: 'Aleady have an Acoount? login.'
            },
            login: {
               name: 'Login',
               message: 'Register'
            }
         }
      };
   },
   methods: {
      async login() {
         console.log("loginnn", this)
         const { username } = this
         var email = this.email
         await UserDataService.findByEmail(email).then(response => {
        console.log("respinse ",response.statusText)
         console.log("sdfsdg",response.status)
         this.userId = response.data.id
         localStorage.setItem("id", this.userId)
         this.$router.replace({ name: "Home", params: { username: username } });
    })
    .catch(error => {
      if(error){
         this.isvalid=true;
      }
       
    });
        
      },
     async register() {
         console.log("register::::::")
         if (this.password == this.confirmPassword) {
            this.isRegister = false;
            var data = {
          name: this.username,
          email: this.email
           }
        const response = await UserDataService.create(data)
        console.log("response", response)
            this.errorMessage = "";
            this.$refs.form.reset();
         }
         else {
            this.errorMessage = "password did not match"
         }
      },
      close() {
         this.isvalid=false
      }
   },
   computed: {
      toggleMessage: function () {
         return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message
      }
   }
};
</script>