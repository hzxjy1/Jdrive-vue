<template>
  <el-container style="height: 100vh">
    <el-header class="header">
      <el-row style="align-items: center; height: 100%">
        <el-col :span="1"
          ><el-button color="#2d529e" circle size="large" @click="hide"
            ><el-icon><Menu /></el-icon></el-button
        ></el-col>
        <el-col :span="3"
          ><span class="font">{{ title }}</span></el-col
        >
        <el-col :span="4"
          ><el-input
            type="text"
            v-model="search"
            prefix-icon="Search"
            clearable
            size="large"
          ></el-input
        ></el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-menu :collapse="aside" class="el-menu-vertical">
        <el-sub-menu
          v-for="item in hasChildren"
          :key="item.name"
          :index="item.name"
        >
          <template #title>
            <el-icon><component :is="item.icon" /></el-icon>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group
            v-for="subItem in item.children"
            :key="subItem.name"
            :index="subItem.name"
          >
            <!-- <el-icon><component :is="subItem.icon" /></el-icon> -->
            <el-menu-item :index="subItem.name">{{
              subItem.label
            }}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item
          v-for="item in noChildren"
          :key="item.name"
          :index="item.name"
        >
          <el-icon><component :is="item.icon" /></el-icon>
          <span>{{ item.label }}</span>
        </el-menu-item>
      </el-menu>
      <el-main> <h1>home page</h1></el-main>
    </el-container>
  </el-container>
</template>

<script>
//import asideComp from "@/components/AsideComp.vue";
export default {
  data() {
    return {
      title: "Jdrive",
      search: "",
      aside: false,
      menuData: [
        {
          path: "/home",
          name: "home",
          label: "我的文件",
          icon: "Plus",
          children: [
            {
              name: "all",
              label: "全部",
              icon: null,
              filter: "all",
            },
            {
              name: "picture",
              label: "图片",
              icon: "Picture",
              filter: "picture",
            },
            {
              name: "vedio",
              label: "视频",
              icon: null,
              filter: "vedio",
            },
            {
              name: "sound",
              label: "音乐",
              icon: null,
              filter: "sound",
            },
            {
              name: "document",
              label: "文档",
              icon: null,
              filter: "document",
            },
          ],
        },
        {
          path: "/profile",
          name: "profile",
          label: "个人主页",
          icon: "User",
        },
        {
          path: "/setting",
          name: "setting",
          label: "设置",
          icon: "Setting",
        },
      ],
    };
  },
  components: {},
  methods: {
    hide() {
      this.aside = !this.aside;
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
};
</script>

<style>
/* .a {
  background-color: gray;
} */
.el-icon {
  transform: scale(1.5);
}
.font {
  color: white;
  font-weight: bold;
  font-size: 120%;
}
.header {
  background-color: #2d529e;
  /* box-shadow: 0 0px 5px; */
}
.aside {
  border-right: gray;
  border-style: none solid none none;
  border-width: 1px;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>