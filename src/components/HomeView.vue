<template>
  <el-card :body-style="{ padding: '0px' }" class="guide">
    <div>
      <div class="card-div">
        <div class="card-div2">
          <div
            v-for="i in guideData"
            :key="i.data"
            class="card-div3"
            v-show="!detail.visible"
          >
            <el-button text @click="goto(i)">{{ i.data }}</el-button>
            <el-icon><ArrowRight /></el-icon>
          </div>
          <div v-show="detail.visible">
            <el-button
              circle
              @click="this.detail.visible = false"
              ><el-icon><Back /></el-icon
            ></el-button>
            <span style="margin: 15px;">{{ detail.name }}</span>
            <el-button circle
              ><el-icon><Pointer /></el-icon
            ></el-button>
            <el-button type="danger" circle
              ><el-icon><Delete /></el-icon
            ></el-button>
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
                <el-upload action="/upload" :on-success="ls"
                  ><el-dropdown-item>上传文件</el-dropdown-item>
                </el-upload>
                <el-dropdown-item @click="showDialog('mkdir')"
                  >新建文件夹</el-dropdown-item
                >
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
        <span v-show="isFolder.length === 0">暂无文件夹</span>
        <div class="flex">
          <div v-for="i in isFolder" :key="i.name">
            <el-card
              :body-style="{ padding: '0px' }"
              class="folder"
              shadow="hover"
              @click="checkFolder(i.id)"
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
        <span v-show="judge()">暂无文件</span>
        <div class="flex">
          <div v-for="i in isFile" :key="i.name">
            <el-card
              :body-style="{ padding: '0px' }"
              class="file"
              shadow="hover"
              @click="checkItem(i.id)"
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

        <div class="flex" v-show="this.$route.params.filter === undefined">
          <div v-for="i in isFileInAll" :key="i.name">
            <el-card
              :body-style="{ padding: '0px' }"
              class="file"
              shadow="hover"
              @click="checkItem(i)"
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
  <dailog ref="dailog" />
  <!-- <span>{{ isFile }}</span> -->
</template>

<script>
import dailog from "./diaLog.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    dailog,
  },
  methods: {
    goto() {
      axios
        .get("/file/0")
        .then((response) => (this.dataFilter = response.data.data))
        .catch(function (error) {
          console(error);
        });
      axios
        .get("/guide")
        .then((response) => (this.guideData = response.data.data))
        .catch(function (error) {
          alert(error);
        });
    },
    mkdir(name) {
      let data = { dirName: name };
      axios
        .post("/file", data)
        .then()
        .catch(function (error) {
          alert(error);
        });
      location.reload();
    },
    checkItem(i) {
      this.detail.id = i.id;
      this.detail.name = i.name;
      this.detail.visible = true;
    },
    checkFolder(id) {
      this.detail.visible = false;
      axios
        .get("/file/" + id)
        .then((response) => (this.dataFilter = response.data.data))
        .catch(function (error) {
          console(error);
        });
      axios
        .get("/guide")
        .then((response) => (this.guideData = response.data.data))
        .catch(function (error) {
          console(error);
        });
    },
    judge() {
      if (
        (this.isFile.length === 0) ===
        (this.$route.params.filter === undefined)
      ) {
        return false;
      } else {
        return true;
      }
    },
    ls() {
      axios
        .get("/file")
        .then((response) => (this.dataFilter = response.data.data))
        .catch(function (error) {
          console(error);
        });
    },
    showDialog(i) {
      this.$refs.dailog.callDailog(i);
    },
  },
  data() {
    return {
      guideData: [],
      dataFilter: [],
      detail: {
        id: "",
        name: "",
        visible: false,
      },
    };
  },
  computed: {
    isFile() {
      return this.dataFilter
        .filter((item) => item.type === "file")
        .filter((item) => item.fileStyle === this.$route.params.filter);
    },
    isFolder() {
      return this.dataFilter.filter((item) => item.type === "folder");
    },
    isFileInAll() {
      return this.dataFilter.filter((item) => item.type === "file");
    },
  },
  mounted() {
    axios
      .get("/guide")
      .then((response) => (this.guideData = response.data.data))
      .catch(function (error) {
        console(error);
      });
    axios
      .get("/file")
      .then((response) => (this.dataFilter = response.data.data))
      .catch(function (error) {
        console(error);
      });
  },
};
</script>
<style lang="less" scoped>
.scrollbar {
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
  }
}
</style>