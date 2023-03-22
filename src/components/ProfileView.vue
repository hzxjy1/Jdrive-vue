<template>
  <div class="background">
    <el-card class="card" :body-style="{ padding: '0px' }">
      <div class="user-back">
        <svg class="svg" viewBox="0 0 1600 900">
          <polygon
            fill="rgb(101, 115, 195)"
            points="957 450 539 900 1396 900"
          />
          <polygon
            fill="rgb(44, 56, 126)"
            points="957 450 872.9 900 1396 900"
          />
          <polygon fill="#f50057" points="-60 900 398 662 816 900" />
          <polygon fill="rgb(171, 0, 60)" points="337 900 398 662 816 900" />
          <polygon
            fill="rgb(247, 51, 120)"
            points="1203 546 1552 900 876 900"
          />
          <polygon fill="#f50057" points="1203 546 1552 900 1162 900" />
          <polygon fill="rgb(44, 56, 126)" points="641 695 886 900 367 900" />
          <polygon fill="#3f51b5" points="587 900 641 695 886 900" />
          <polygon
            fill="rgb(247, 51, 120)"
            points="1710 900 1401 632 1096 900"
          />
          <polygon fill="rgb(171, 0, 60)" points="1710 900 1401 632 1365 900" />
          <polygon fill="#f50057" points="1210 900 971 687 725 900" />
          <polygon fill="rgb(171, 0, 60)" points="943 900 1210 900 971 687" />
        </svg>
        <div class="user">
          <el-avatar :size="80" :src="circleUrl" :icon="User" />
          <span>{{ userid }}</span>
        </div>
      </div>
      <div class="data-back">
        <div class="data-item">
          <span class="title">id</span>
          <span>{{ data.id }}</span>
        </div>
        <div class="data-item" v-for="i in data" :key="i.name">
          <span class="title">{{ i.name }}</span>
          <span>{{ i.value }}</span>
        </div>
      </div>
    </el-card>
    {{ data }}
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
      .get("/user/userinfo")
      .then((response) => (this.data = response.data.data))
      .catch(function (error) {
        alert(error);
      });
    // axios
    //   .get("http://127.0.0.1:8080/profile.json")
    //   .then((response) => (this.userid = response.data[1].value))
    //   .catch(function (error) {
    //     alert(error);
    //   });
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
    background-color: #2d529e;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    .svg {
      width: 100%;
      height: 100%;
    }
    .user {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        margin: 10px;
        color: white;
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