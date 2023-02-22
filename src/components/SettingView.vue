<template>
  <div class="background">
    <el-card class="card" :body-style="{ padding: '0px' }">
      <el-button text class="button"
        ><el-icon size="large"><Avatar /></el-icon><span>头像</span></el-button
      >
      <el-divider />
      <el-button text class="button"
        ><el-icon size="large"><EditPen /></el-icon
        ><span>修改密码</span></el-button
      >
      <el-divider />
      <el-button text class="button"
        ><el-icon size="large"><EditPen /></el-icon
        ><span>修改昵称</span></el-button
      >
      <el-divider />
      <el-button text class="button"
        ><el-icon size="large"><Right /></el-icon
        ><span>退出登陆</span></el-button
      >
      <el-divider />
    </el-card>
  </div>
</template>

<script>
export default {
  name: "SettingView",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.background {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  height: 500px;
  min-width: 700px;
  transform: translateY(-15%);
  .button {
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    span {
      color: gray;
      margin: 15px;
    }
  }
}
.el-divider {
  margin: 0px;
}
</style>