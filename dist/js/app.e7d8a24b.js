(function(t){function e(e){for(var s,r,l=e[0],i=e[1],u=e[2],c=0,d=[];c<l.length;c++)r=l[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);m&&m(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},o={app:0},n=[];function l(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4a72dd80"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"ffd1b8bb"}[t]+".css",o=i.p+s,n=document.getElementsByTagName("link"),l=0;l<n.length;l++){var u=n[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===s||c===o))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){u=d[l],c=u.getAttribute("data-href");if(c===s||c===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||o,n=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete r[t],m.parentNode.removeChild(m),a(n)},m.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(m)})).then((function(){r[t]=0})));var s=o[t];if(0!==s)if(s)e.push(s[2]);else{var n=new Promise((function(e,a){s=o[t]=[e,a]}));e.push(s[2]=n);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=l(t);var d=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(m);var a=o[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",d.name="ChunkLoadError",d.type=s,d.request=r,a[1](d)}o[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0229":function(t,e,a){"use strict";var s=a("c427");class r{getAll(){return console.log(),s["a"].get("/users")}get(t){return s["a"].get("/users/"+t)}create(t){return console.log(t),s["a"].post("/users",t)}update(t,e){return console.log("id ",t+"   data "+e),s["a"].patch("/users/"+t,e)}delete(t){return console.log("delete id ",t),s["a"].delete("/users/"+t)}findById(t){return s["a"].get("/users?id="+t)}findByEmail(t){return s["a"].get("/users/email/"+t)}}e["a"]=new r},"539d":function(t,e,a){"use strict";var s=a("c427");class r{getAll(){return console.log(),s["a"].get("/workoutSession")}getAllUserWorkoutSession(t){return s["a"].get(`users/${t}/workoutSession`)}get(t){return s["a"].get("/workout/"+t)}create(t){return console.log(t),s["a"].post("/workoutSession",t)}update(t,e){return console.log("id ",t+"   data "+e),s["a"].patch("/workoutSession/"+t,e)}delete(t){return console.log("delete id ",t),s["a"].delete("/workoutSession/"+t)}findById(t){return s["a"].get("/workout?id="+t)}}e["a"]=new r},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=a("7496"),o=a("f6c4"),n=function(){var t=this,e=t._self._c;return e(r["a"],[t.$route.meta.hideNavbar?t._e():e("SideBar"),e(o["a"],[e("router-view")],1)],1)},l=[],i=a("132d"),u=a("8860"),c=a("da13"),d=a("1800"),m=a("5d23"),g=a("f774"),h=a("3a2f"),f=function(){var t=this,e=t._self._c;return e("nav",[e(g["a"],{staticClass:"teal",attrs:{dark:"",app:"","mini-variant":"","mini-variant-width":"70"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(u["a"],[e(c["a"],{staticClass:"mb-12"},[e(m["a"],[e(i["a"],{staticClass:"mb-2",attrs:{large:""}},[t._v("fas fa-hand-holding-medical")])],1)],1)],1),e(u["a"],{attrs:{flat:""}},[e(c["a"],{attrs:{router:"",to:"/home"}},[e(m["a"],[e(h["a"],{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(i["a"],t._g(t._b({staticClass:"mb-2",attrs:{dark:""}},"v-icon",s,!1),a),[t._v(" fas fa-home ")])]}}])},[e("span",[t._v("Home")])])],1)],1),e(c["a"],{attrs:{router:"",to:"/activityList"}},[e(m["a"],[e(h["a"],{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(i["a"],t._g(t._b({attrs:{dark:""}},"v-icon",s,!1),a),[t._v("fa-solid fa-shoe-prints")])]}}])},[e("span",[t._v("Activites")])])],1)],1),e(c["a"],{attrs:{router:"",to:"/workoutList"}},[e(m["a"],[e(h["a"],{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(i["a"],t._g(t._b({staticClass:"mb-2",attrs:{dark:""}},"v-icon",s,!1),a),[t._v("fas fa-solid fa-dumbbell")])]}}])},[e("span",[t._v("Workouts")])])],1)],1),e(c["a"],{attrs:{router:"",to:"/workoutSessionList"}},[e(m["a"],[e(h["a"],{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(i["a"],t._g(t._b({staticClass:"mb-2",attrs:{dark:""}},"v-icon",s,!1),a),[t._v("fas fa-cog")])]}}])},[e("span",[t._v("Workout Session")])])],1)],1)],1),e(u["a"],{staticClass:"ml-3",staticStyle:{position:"absolute",bottom:"0"},attrs:{flat:""}},[e(c["a"],{attrs:{router:"",to:"/about"}},[e(d["a"],[e(i["a"],{attrs:{right:""}},[t._v("fas fa-sign-out-alt")])],1)],1)],1)],1)],1)},p=[],v={data:()=>({drawer:!0})},b=v,y=a("2877"),_=Object(y["a"])(b,f,p,!1,null,null,null),w=_.exports,k={name:"App",components:{SideBar:w},data:()=>({})},x=k,C=Object(y["a"])(x,n,l,!1,null,null,null),S=C.exports,A=a("8c4f"),O=a("40dc"),N=a("8336"),j=a("b0af"),L=a("62ad"),P=a("a523"),T=a("0e8f"),W=a("a722"),U=a("8270"),B=a("490a"),R=a("0fd9"),$=a("2fa4"),E=a("7f2e"),M=a("2a7f"),I=function(){var t=this,e=t._self._c;return e(r["a"],{style:{background:t.$vuetify.theme.themes.light.background}},[e("SideBarVue"),e(W["a"],[e(T["a"],{attrs:{md8:""}},[e(r["a"],{staticClass:"rounded-tr-xl rounded-br-xl",style:{background:t.$vuetify.theme.themes.dark.background}},[e(P["a"],[e(R["a"],[e(L["a"],{attrs:{cols:"12",sm:"12"}},[e(O["a"],{staticClass:"mx-8 mb-8 mt-3",attrs:{color:"rgba(0,0,0,0)",flat:""}},[e(M["a"],[t._v("Welcome to Healthifi ")]),e($["a"])],1)],1),e(L["a"],{attrs:{cols:"12",sm:"12"}},[e(j["a"],{staticClass:"mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n15"},[e(c["a"],{attrs:{"three-line":""}},[e(m["a"],{staticClass:"pa-10"},[e(m["c"],{staticClass:"headline mb-1"},[t._v(" Today "),e("span",{staticClass:"teal--text"},[t._v("-10%")]),t._v(" discount"),e("br"),t._v(" on lung examinations ")]),e(m["b"],[t._v(" The package price includes: consultation"),e("br"),t._v(" of a pulmonologist, spirography, cardiogram "),e("span",{staticClass:"teal--text"},[t._v(">")])])],1),e(U["a"],{staticClass:"pr-10",attrs:{tile:"",size:"150"}},[e("img",{attrs:{src:"lungs.png"}})])],1)],1)],1),e(L["a"],{attrs:{cols:"12",sm:"12"}},[e(j["a"],{staticClass:"mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n10"},[e(O["a"],{staticClass:"ma-8",attrs:{color:"rgba(0,0,0,0)",flat:""}},[e("h5",[t._v("Statistics of your health")]),e($["a"]),e(N["a"],{attrs:{color:"teal",text:""}},[t._v("2019 "),e(i["a"],{attrs:{right:""}},[t._v(" mdi-chevron-down ")])],1),e(N["a"],{attrs:{color:"teal",rounded:"",dark:"",depressed:""}},[t._v("Year")]),e(N["a"],{attrs:{text:""}},[t._v("Mounth")])],1),[e(E["a"],{attrs:{value:t.value,color:"teal",smooth:t.radius||!1,padding:t.padding,"line-width":t.width,"stroke-linecap":t.lineCap,fill:t.fill,type:t.type,"auto-line-width":t.autoLineWidth,"auto-draw":""}})]],2)],1),e(L["a"],{attrs:{cols:"12",sm:"6"}},[e(j["a"],{staticClass:"mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4",attrs:{color:"teal",dark:""}},[e(c["a"],{attrs:{"three-line":""}},[e(m["a"],{staticClass:"pa-2"},[e(m["c"],{staticClass:"headline mb-1"},[t._v(" Total Number of Users "),e("br"),e("h2",{staticStyle:{"text-align":"center"}},[t._v(t._s(this.totalNumberOfUsers.length))])])],1)],1)],1)],1),e(L["a"],{attrs:{cols:"12",md:"6"}},[e(j["a"],{staticClass:"mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4",attrs:{color:"teal",dark:""}},[e(c["a"],{attrs:{"three-line":""}},[e(m["a"],{staticClass:"pa-2"},[e(m["c"],{staticClass:"headline mb-1"},[t._v(" Total Number of Activites"),e("br"),e("h2",{staticStyle:{"text-align":"center"}},[t._v(t._s(this.totalNumberOfActivity.length))])]),e("button",{attrs:{type:"submit"},on:{click:t.logout}},[t._v("hello")])],1)],1)],1)],1),e(L["a"],{attrs:{cols:"12",sm:"6"}},[e(j["a"],{staticClass:"mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4",attrs:{color:"teal",dark:""}},[e(c["a"],{attrs:{"three-line":""}},[e(m["a"],{staticClass:"pa-2"},[e(m["c"],{staticClass:"headline mb-1"},[t._v(" Total Number of WorkoutSessions"),e("br"),e("h2",{staticStyle:{"text-align":"center"}},[t._v(t._s(this.totalNumberOfSessions.length))])])],1)],1)],1)],1)],1),e("br"),e("br"),e(R["a"],[e(L["a"],{attrs:{cols:"12",sm:"6"}},[e(j["a"],{staticClass:"mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4",attrs:{color:"teal",dark:""}},[e(c["a"],{attrs:{"three-line":""}},[e(m["a"],{staticClass:"pa-2"},[e(m["c"],{staticClass:"headline mb-1"},[t._v(" Total Number of Workouts "),e("br"),e("h2",{staticStyle:{"text-align":"center"}},[t._v(t._s(this.totalNumberOfWorkout.length))])])],1)],1)],1)],1)],1)],1)],1)],1),e(T["a"],{attrs:{md4:""}},[e(r["a"],{style:{background:t.$vuetify.theme.themes.light.background}},[e(P["a"],[e(R["a"],[e(L["a"],{attrs:{cols:"12",sm:"12"}},[e(u["a"],{attrs:{"two-line":""}},[e(c["a"],[e(U["a"],[e("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/lists/3.jpg"}})]),e(m["a"],[e(m["c"],[t._v("Anastasia Turner")]),e(m["b"],{staticClass:"teal--text"},[t._v("35 years, Houston")])],1),e($["a"]),e(i["a"],{attrs:{color:"teal"}},[t._v("mdi-menu")])],1)],1)],1),e(L["a"],{attrs:{cols:"12",sm:"12"}},[e(j["a"],{staticClass:"mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n12"},[e(O["a"],{staticClass:"ma-8",attrs:{color:"rgba(0,0,0,0)",flat:""}},[e("h5",[t._v("Your activity")]),e($["a"]),e(N["a"],{attrs:{color:"teal",rounded:"",dark:"",depressed:""}},[t._v("Week")]),e(N["a"],{attrs:{text:""}},[t._v("Mounth")])],1),e(B["a"],{staticClass:"mt-n5 ml-5 mb-2",attrs:{rotate:"360",size:"100",width:"15",value:"50",color:"teal"}},[t._v(" 50 ")]),e(B["a"],{staticClass:"mt-n5 ml-2 mb-2",attrs:{rotate:"360",size:"100",width:"15",value:"70",color:"red"}},[t._v(" 70 ")]),e(B["a"],{staticClass:"mt-n5 ml-2 mb-2",attrs:{rotate:"360",size:"100",width:"15",value:"80",color:"blue"}},[t._v(" 80 ")])],1)],1)],1)],1)],1)],1)],1)],1)},q=[],H=(a("14d9"),a("0229")),z=a("ec78"),D=a("e1c2"),J=a("539d"),V={data:()=>({width:2,radius:10,padding:8,lineCap:"round",value:[0,2,5,9,5,100,3,5,0,0,1,8,2,9,0],fill:!1,type:"trend",autoLineWidth:!1,totalNumberOfUsers:[],totalNumberOfActivity:[],totalNumberOfWorkout:[],totalNumberOfSessions:[]}),methods:{async getAllUsers(){console.log("dghhhhhgf",localStorage.getItem("id"));try{const t=await H["a"].getAll();this.totalNumberOfUsers=t.data,console.log(this.totalNumberOfUsers.length)}catch(t){console.log(t)}},async getAllActivity(){try{const t=await z["a"].getAll();this.totalNumberOfActivity=t.data,console.log("activity ",this.totalNumberOfActivity.length)}catch(t){console.log(t)}},async getAllWorkout(){try{const t=await D["a"].getAll();this.totalNumberOfWorkout=t.data,console.log(this.totalNumberOfUsers.length)}catch(t){console.log(t)}},async getAllWorkoutSession(){try{const t=await J["a"].getAll();this.totalNumberOfSessions=t.data,console.log(this.totalNumberOfSessions.length)}catch(t){console.log(t)}},logout(){localStorage.clear(),this.$router.push({name:"login"})}},mounted(){this.getAllUsers(),this.getAllActivity(),this.getAllWorkout()},computed:{theme(){return this.$vuetify.theme.dark?"dark":"light"}},components:{SideBarVue:w}},Y=V,F=Object(y["a"])(Y,I,q,!1,null,"38fce644",null),K=F.exports,G=a("99d9"),Q=a("169a"),X=a("8654"),Z=a("71d9"),tt=function(){var t=this,e=t._self._c;return e(r["a"],[e(o["a"],[e(P["a"],{attrs:{fluid:"","fill-height":""}},[e(W["a"],{attrs:{"align-center":"","justify-center":""}},[e(T["a"],{attrs:{xs12:"",sm8:"",md4:""}},[e(j["a"],{staticClass:"elevation-12"},[e(Z["a"],{attrs:{dark:"",color:"primary"}},[e(M["a"],[t._v(t._s(t.isRegister?t.stateObj.register.name:t.stateObj.login.name)+" form")])],1),e(Q["a"],{attrs:{"max-width":"500px"},model:{value:t.isvalid,callback:function(e){t.isvalid=e},expression:"isvalid"}},[e(j["a"],[e(G["c"],{staticClass:"text-h5"},[e("h3",[t._v("Invalid credentials! Please Register")])]),e(G["a"],[e($["a"]),e(N["a"],{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Ok")]),e($["a"])],1)],1)],1),e(G["b"],[e("form",{ref:"form",on:{submit:function(e){e.preventDefault(),t.isRegister?t.register():t.login()}}},[e(X["a"],{attrs:{name:"username",label:"Username",type:"text",placeholder:"username",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),e(X["a"],{attrs:{name:"email",label:"Email",type:"text",placeholder:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e(X["a"],{attrs:{name:"password",label:"Password",type:"password",placeholder:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t.isRegister?e(X["a"],{attrs:{name:"confirmPassword",label:"Confirm Password",type:"password",placeholder:"cocnfirm password",required:""},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}):t._e(),e("div",{staticClass:"red--text"},[t._v(" "+t._s(t.errorMessage))]),e(N["a"],{staticClass:"mt-4",attrs:{type:"submit",color:"primary",value:"log in"}},[t._v(t._s(t.isRegister?t.stateObj.register.name:t.stateObj.login.name))]),e("div",{staticClass:"grey--text mt-4",on:{click:function(e){t.isRegister=!t.isRegister}}},[t._v(" "+t._s(t.toggleMessage)+" ")])],1)])],1)],1)],1)],1)],1)],1)},et=[],at={name:"App",data(){return{username:"",password:"",confirmPassword:"",email:"",userId:"",isRegister:!1,errorMessage:"",isvalid:!1,stateObj:{register:{name:"Register",message:"Aleady have an Acoount? login."},login:{name:"Login",message:"Register"}}}},methods:{async login(){console.log("loginnn",this);const{username:t}=this;var e=this.email;await H["a"].findByEmail(e).then(e=>{console.log("respinse ",e.statusText),console.log("sdfsdg",e.status),this.userId=e.data.id,localStorage.setItem("id",this.userId),this.$router.replace({name:"Home",params:{username:t}})}).catch(t=>{t&&(this.isvalid=!0)})},register(){console.log("register::::::"),this.password==this.confirmPassword?(this.isRegister=!1,this.errorMessage="",this.$refs.form.reset()):this.errorMessage="password did not match"},close(){this.isvalid=!1}},computed:{toggleMessage:function(){return this.isRegister?this.stateObj.register.message:this.stateObj.login.message}}},st=at,rt=Object(y["a"])(st,tt,et,!1,null,null,null),ot=rt.exports;s["a"].use(A["a"]);const nt=[{path:"/",name:"login",component:ot,meta:{hideNavbar:!0}},{path:"/home",name:"Home",component:K},{path:"/about",name:"About",component:()=>a.e("about").then(a.bind(null,"f820"))},{path:"/userList",name:"userList",component:()=>a.e("about").then(a.bind(null,"ed81"))},{path:"/activityList",name:"activityList",component:()=>a.e("about").then(a.bind(null,"b9ce"))},{path:"/workoutList",name:"workoutList",component:()=>a.e("about").then(a.bind(null,"b0c6"))},{path:"/workoutSessionList",name:"workoutSessionList",component:()=>a.e("about").then(a.bind(null,"eae6"))}],lt=new A["a"]({mode:"history",base:"/",routes:nt});var it=lt,ut=a("2f62");s["a"].use(ut["a"]);var ct=new ut["a"].Store({state:{},mutations:{},actions:{},modules:{}}),dt=(a("15f5"),a("d1e78"),a("f309")),mt=a("fcf4");s["a"].use(dt["a"]);var gt=new dt["a"]({icons:{iconfont:"md"},theme:{themes:{dark:{background:mt["a"].green.lighten5},light:{background:mt["a"].shades.white}}}});s["a"].config.productionTip=!1,new s["a"]({router:it,store:ct,vuetify:gt,render:t=>t(S)}).$mount("#app")},c427:function(t,e,a){"use strict";var s=a("cee4");e["a"]=s["a"].create({baseURL:"http://localhost:7000/api",headers:{"Content-type":"application/json"}})},e1c2:function(t,e,a){"use strict";var s=a("c427");class r{getAll(){return console.log(),s["a"].get("/workout")}getAllUserWorkout(t){return s["a"].get(`/users/${t}/workout`)}get(t){return s["a"].get("/workout/"+t)}create(t){return console.log(t),s["a"].post("/workout",t)}update(t,e){return console.log("id ",t+"   data "+e),s["a"].patch("/workout/"+t,e)}delete(t){return console.log("delete id ",t),s["a"].delete("/workout/"+t)}findById(t){return s["a"].get("/workout?id="+t)}}e["a"]=new r},ec78:function(t,e,a){"use strict";var s=a("c427");class r{getAll(){return s["a"].get("/activities")}getAllUserActivity(t){return s["a"].get(`/users/${t}/activities`)}deleteUserActivity(t){return s["a"].delete(`/users/${t}/activities`)}get(t){return s["a"].get("/activities/"+t)}create(t){return console.log(t),s["a"].post("/activities",t)}update(t,e){return console.log("id ",t+"   data "+e),s["a"].patch("/activities/"+t,e)}delete(t){return console.log("delete id ",t),s["a"].delete("/activities/"+t)}findById(t){return s["a"].get("/activities?id="+t)}}e["a"]=new r}});
//# sourceMappingURL=app.e7d8a24b.js.map