<template>
  <el-container style="height: 100vh">
    <el-header>
      <div class="header">
        <el-row style="align-items: center; height: 100%">
          <el-col :span="1"
            ><el-button color="#2d529e" circle size="large" @click="hide"
              ><el-icon size="20"><Menu /></el-icon></el-button
          ></el-col>
          <el-col :span="3"
            ><span class="font">{{ title }}</span></el-col
          >
          <!-- <el-col :span="4"
            ><el-input
              type="text"
              v-model="search"
              prefix-icon="Search"
              clearable
              size="large"
            ></el-input
          ></el-col> -->
        </el-row>
      </div>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu :collapse="aside" class="el-menu-vertical">
          <el-sub-menu
            v-for="item in hasChildren"
            :key="item.name"
            :index="item.name"
          >
            <template #title>
              <el-icon size="20"><component :is="item.icon" /></el-icon>
              <span>{{ item.label }}</span>
            </template>
            <el-menu-item-group
              v-for="subItem in item.children"
              :key="subItem.name"
              :index="subItem.name"
              @click="clickMenu(subItem)"
            >
              <el-menu-item :index="subItem.name">{{
                subItem.label
              }}</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item
            v-for="item in noChildren"
            :key="item.name"
            :index="item.name"
            @click="clickMenu(item)"
          >
            <el-icon size="20"><component :is="item.icon" /></el-icon>
            <span>{{ item.label }}</span>
          </el-menu-item>
        </el-menu></el-aside
      >
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import axios from "axios";
import userAside from "@/assets/aside/userAside.json";
import adminAside from "@/assets/aside/adminAside.json";
export default {
  components: {},
  methods: {
    hide() {
      this.aside = !this.aside;
    },
    clickMenu(item) {
      if (this.$route.path != item.path) {
        this.$router.push(item.path);
      }
    },
    getMenu(data) {
      var asideJson = JSON.stringify(data.data);
      // asideJson=0;
      if (asideJson === "1") {
        this.menuData = adminAside;
      } else {
        this.menuData = userAside;
      }
    },
  },
  computed: {
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
  },
  mounted() {
    axios
      .get("/user/aside")
      .then((response) => this.getMenu(response))
      .catch(function (error) {
        console(error);
      });
  },
  data() {
    return {
      title: "Jdrive",
      search: "",
      aside: false,
      menuData: [],
    };
  },
};
</script>

<style lang="less" scoped>
.font {
  color: white;
  font-weight: bold;
  font-size: 120%;
}
.el-header {
  padding: 0;
}
.el-aside {
  width: 200px;
}
.header {
  background-color: #2d529e;
  height: 100%;
  /* box-shadow: 0 0px 5px; */
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: 100%;
}
.el-main {
  padding: 0%;
}
</style>