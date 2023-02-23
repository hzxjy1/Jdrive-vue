<template>
  <el-card :body-style="{ padding: '0px' }" class="guide">
    <div>
      <div class="card-div">
        <div class="card-div2">
          <div v-for="i in guideData" :key="i.name" class="card-div3">
            <el-button text @click="goto(i)">{{ i.path }}</el-button>
            <el-icon><ArrowRight /></el-icon>
          </div>
        </div>
        <div class="upload">
          <el-dropdown>
            <el-button type="primary">
              <el-icon
                ><el-icon><Plus /></el-icon
              ></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="upload()">上传文件</el-dropdown-item>
                <el-dropdown-item @click="mkdir()">新建文件夹</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
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
              shadow="hover"
              @click="checkFolder()"
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
              shadow="hover"
              @click="checkItem()"
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
  <!-- dialog -->
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goto() {
      alert("aa");
    },
    upload() {
      alert("aa");
    },
    mkdir() {
      alert("aa");
    },
    checkItem() {
      alert("aa");
    },
    checkFolder() {
      alert("aa");
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
        {
          name: "path4",
          path: "data2",
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
    justify-content: space-between;
    height: 40px;
    padding-left: 10px;
    .card-div2 {
      display: flex;
      .card-div3 {
        display: flex;
        align-items: center;
      }
    }
    .upload {
      margin: 20px;
    }
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