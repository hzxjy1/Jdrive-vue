<template>
  <div class="background">
    <el-card class="card" :body-style="{ padding: '0px' }">
      <div class="user-back">
        <div class="user">
          <el-avatar :size="80" :src="circleUrl" :icon="User" />
          <span>{{ userid }}</span>
        </div>
      </div>
      <div class="data-back">
        <div class="data-item" v-for="i in data" :key="i.name">
          <span class="title">{{ i.name }}</span>
          <span>{{ i.value }}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProfileView",
  data() {
    return {
      userid: "",
      data: [],
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8080/profile.json")
      .then((response) => (this.data = response.data))
      .then((response) => (this.userid = response.data[1].value))
      .catch(function (error) {
        alert(error);
      });
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
  width: 700px;
  transform: translateY(-15%);
  .user-back {
    background-color: blanchedalmond;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    .user {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        margin: 10px;
        // color: white;
      }
    }
  }
  .data-back {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 230px;
    padding: 10px;
    transform: translateY(-15%);
    .data-item {
      height: 64px;
      width: 200px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      .title {
        color: gray;
        margin-top: 5px;
        margin-block: 10px;
      }
    }
  }
}
</style>