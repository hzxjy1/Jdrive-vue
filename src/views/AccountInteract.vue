<template>
  <el-row :gutter="20">
    <el-col :span="8" :offset="8">
      <div class="grid-content"></div>
    </el-col>
  </el-row>
  <el-row justify="center">
    <el-col :span="6">
      <el-card shadow="always">
        <el-row justify="center">
          <el-col :span="12">
            <h2>{{ title }}</h2>
          </el-col>
        </el-row>
        <el-row justify="center">
          <el-col :span="22">
            <el-form :model="form">
              <el-form-item
                prop="name"
                :rules="[{ required: true, message: '用户名不能为空' }]"
              >
                <el-input
                  v-model="form.name"
                  type="text"
                  prefix-icon="User"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item
                prop="passwd"
                :rules="[{ required: true, message: '密码不能为空' }]"
              >
                <el-input
                  v-model="form.passwd"
                  show-password
                  prefix-icon="Lock"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="onSubmit"
                  style="width: 100%"
                  >{{ buttonText }}</el-button
                >
              </el-form-item>
              <el-link type="primary">{{ link }}</el-link>
            </el-form>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      title: "登录Jdrive",
      buttonText: "登录",
      link: "注册账号",
      form: {
        name: "",
        passwd: "",
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
.grid-content {
  min-height: 100px;
}
.el-input {
  margin: 3px 0px;
}
.input {
  display: inline-block;
}
</style>