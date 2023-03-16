<template>
  <router-view />
</template>
<script>
import axios from "axios";
export default {
  setup() {
    
  },
  methods:{
    checkLogin(status){
      //status=200;
      if(status===200){
        this.$router.push("/home");
      }else if(status===401){
        this.$router.push("/login");
      }
    },
    getStatus(){
      axios
      .get("/user/isLogin")
      .then((response) => (this.checkLogin(response.data.code)))
      .catch(function (error) {
        console(error);
      }); 
    }
  },
  mounted() {    
    this.getStatus()
  },
}
</script>