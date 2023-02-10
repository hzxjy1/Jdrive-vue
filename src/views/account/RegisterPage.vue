<template>
  <div class="warp">
    <el-card shadow="always" class="input">
      <el-form :model="form" class="from">
        <h2 style="text-align: center">{{ title }}</h2>
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
export default {
  data() {
    return {
      title: "注册Jdrive账号",
      buttonText: "注册",
      link: "返回登录",
      form: {
        name: "",
        passwd: "",
        repeat:"",
      },
    };
  },
  methods: {
    onSubmit() {
      alert(this.form.name + this.form.passwd);
    },
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