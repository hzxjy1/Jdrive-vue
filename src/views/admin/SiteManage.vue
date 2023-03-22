<template>
  <div class="background">
    <el-card class="card" :body-style="{ padding: '0px' }">
      <el-button text class="button" @click="showDialog('name')"
        ><el-icon size="large"><EditPen /></el-icon
        ><span>修改网站名称</span></el-button
      >
      <el-divider />
      <el-button text class="button" @click="showDialog('pass')"
        ><el-icon size="large"><EditPen /></el-icon
        ><span>修改颜色样式</span></el-button
      >
      <el-divider />
    </el-card>
  </div>
  <dailog ref="dailog" />
</template>

<script>
import axios from "axios";
import dailog from "@/components/diaLog.vue";
export default {
  name: "SettingView",
  components: {
    dailog,
  },
  data() {
    return {};
  },
  methods: {
    showDialog(i) {
      this.$refs.dailog.callDailog(i);
    },
    exit() {
      axios
        .get("/user/exit")
        .then((response) => (this.checkExit(response.data)))
        .catch(function (error) {
          console(error);
        });
    },
    checkExit(data){
        // alert(JSON.stringify(data))
        if(data.code==200){
          this.$router.push("/login");
        }
    }
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