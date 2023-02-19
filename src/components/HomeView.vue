<template>
  <el-card :body-style="{ padding: '0px' }" class="guide">
    <div class="card-div">
      <div v-for="i in guideData" :key="i.name" class="card-div2">
        <el-button text @click="goto(i)">{{ i.path }}</el-button>
        <el-icon><ArrowRight /></el-icon>
      </div>
    </div>
  </el-card>
  <div class="scrollbar">
    <el-scrollbar always="true">
      <div class="back">
        <div style="margin: 10px"><span>文件夹</span></div>
        <div class="flex">
          <div v-for="i in isFolder" :key="i.name">
            <el-card
              :body-style="{ padding: '0px' }"
              class="folder"
              shadow="never"
            >
              <div class="folder-div">
                <el-icon size="20"><Folder /></el-icon>
                <span>{{ i.name }}</span>
              </div>
            </el-card>
          </div>
        </div>
      </div>
      <el-divider />
      <div class="back">
        <div style="margin: 10px"><span>文件</span></div>
        <div class="flex">
          <div v-for="i in isFile" :key="i.name">
            <el-card
              :body-style="{ padding: '0px' }"
              class="file"
              shadow="never"
            >
              <div class="describe"></div>
              <el-divider />
              <div class="file-name">
                <el-icon size="20"><Picture /></el-icon>
                <span>{{ i.name }}</span>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goto() {
      // alert("aa");
      // alert(JSON.stringify(this.fileInfo));
    },
  },
  data() {
    return {
      guideData: [
        {
          name: "path1",
          path: "/",
        },
        {
          name: "path2",
          path: "home",
        },
        {
          name: "path3",
          path: "data",
        },
      ],
      fileInfo: [
        {
          type: "folder",
          name: "folder",
          path: "/folder",
        },
        {
          type: "folder",
          name: "folder",
          path: "/folder",
        },
        {
          type: "folder",
          name: "folder",
          path: "/folder",
        },
        {
          type: "folder",
          name: "folder",
          path: "/folder",
        },
        {
          type: "folder",
          name: "folder",
          path: "/folder",
        },
        {
          type: "folder",
          name: "folder",
          path: "/folder",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
        {
          type: "file",
          style: "picture",
          name: "file",
          path: "/file",
        },
      ],
    };
  },
  computed: {
    isFile() {
      return this.fileInfo.filter((item) => item.type === "file");
    },
    isFolder() {
      return this.fileInfo.filter((item) => item.type === "folder");
    },
  },
};
</script>
<style lang="less" scoped>
.scrollbar {
  // background-color:gray;
  height: 85vh;
}
.el-divider {
  margin: 0px;
}
.guide {
  .card-div {
    display: flex;
    align-items: center;
    height: 40px;
    padding-left: 10px;
  }
  .card-div2 {
    display: flex;
    align-items: center;
  }
}
.folder {
  display: flex;
  align-items: center;
  height: 50px;
  width: 220px;
  margin: 7px;
  .folder-div {
    margin: 7px;
    display: flex;
    align-items: center;
    .el-icon {
      margin: 7px;
    }
  }
}
.file {
  height: 200px;
  width: 220px;
  margin: 7px;
  .describe {
    width: 100%;
    height: 150px;
  }
  .file-name {
    margin: 7px;
    display: flex;
    align-items: center;
    .el-icon {
      margin: 7px;
    }
  }
}
.back {
  margin: 7px;
  .flex {
    display: flex;
    flex-wrap: wrap;
    // background-color: gray;
  }
}
</style>