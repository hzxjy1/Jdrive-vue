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
        <span v-show="isFolder.length === 0">aaa</span>
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
        <span v-show="judge()">aaa</span>
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

        <div class="flex" v-show="this.$route.params.filter === undefined">
          <div v-for="i in dataFilter" :key="i.name">
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
</template>

<script>
import axios from "axios";
export default {
  name: "HomeView",
  methods: {
    goto() {},
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
  },
  data() {
    return {
      guideData: [],
      dataFilter: [],
    };
  },
  computed: {
    isFile() {
      return this.dataFilter
        .filter((item) => item.type === "file")
        .filter((item) => item.style === this.$route.params.filter);
    },
    isFolder() {
      return this.dataFilter.filter((item) => item.type === "folder");
    },
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8080/guidedata.json")
      .then((response) => (this.guideData = response.data))
      .catch(function (error) {
        alert(error);
      });
    axios
      .get("http://127.0.0.1:8080/fileinfo.json")
      .then((response) => (this.dataFilter = response.data))
      .catch(function (error) {
        alert(error);
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