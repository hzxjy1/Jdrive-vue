<template>
  <div class="warp">
    <el-card shadow="always" class="input">
      <el-form :model="form" class="from">
        <h2 style="text-align: center">{{ title }}</h2>
        <el-alert :title="alertTitle" :type="alertType" show-icon v-show="alertShow" @close="alertClose"></el-alert>
        <el-form-item
          prop="name"
        >
          <el-input
            v-model="form.name"
            type="text"
            prefix-icon="User"
            clearable
            size="large"
            class="bar"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="passwd"
        >
          <el-input
            v-model="form.passwd"
            show-password
            prefix-icon="Lock"
            clearable
            size="large"
            class="bar"
          ></el-input>
        </el-form-item>

        <el-form-item
          prop="passwd"
        >
          <el-input
            v-model="form.repeat"
            show-password
            prefix-icon="Lock"
            clearable
            size="large"
            class="bar"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            style="width: 100%"
            class="bar"
            size="large"
            color="#2D529E"
            >{{ buttonText }}</el-button
          >
        </el-form-item>

        <router-link to="login">{{ link }}</router-link>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "注册Jdrive账号",
      buttonText: "注册",
      link: "返回登录",
      alertTitle:"",
      alertType:"",
      alertShow:false,
      form: {
        name: "",
        passwd: "",
        repeat:"",
      },
    };
  },
  methods: {
    onSubmit() {
      if(this.form.passwd!==this.form.repeat){
        this.alertTitle="两次输入的密码不同";
        this.alertType="error";
        this.alertShow=true;
        return;
      }
      let data = { "userName": this.form.name ,"passwd" :this.form.passwd };
      axios
        .post("/user/register", data)
        .then((response) => (this.checkRegister(response.data)))
        .catch(function (error) {
          alert(error);
        });
    },
    checkRegister(data){
        if(data.code===500){
          this.alertTitle="用户名已被注册";
          this.alertType="error";
          this.alertShow=true;
          return;
        }else if(data.code===200){
          this.alertTitle="注册成功";
          this.alertType="success";
          this.alertShow=true;
          // setTimeout("this.$router.push('/login')",3000);
        }
    },
   alertClose(){
      this.alertShow=false;
    }
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  border: 0;
}
.bar {
  margin: 7px 0px;
}
.input {
  border-radius: 10px;
  margin: 0px auto;
  width: 380px;
}
.warp {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.router-link-active {
  text-decoration: none;
  color: yellow;
}
a {
  text-decoration: none;
  color: #2d529e;
  font: size 80%;
}
</style>