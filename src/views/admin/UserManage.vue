<template>
  <div class="background">
    <el-card class="card" :body-style="{ padding: '0px' }">
      <div v-show="show">
        <el-table :data="tableData" style="width: 100%" max-height="250">
          <el-table-column fixed prop="id" label="ID" width="150" />
          <el-table-column prop="name" label="名称" width="120" />
          <el-table-column prop="group" label="用户组" width="120" />
          <el-table-column prop="authority" label="权限" width="120" />
          <el-table-column prop="" label="" width="700" />
          <el-table-column fixed="right" label="操作" width="120">
            <template #default="scope">
              <el-button
                link
                type="primary"
                size="small"
                @click.prevent="deleteRow(scope.$index)"
              >
                删除
              </el-button>
                  <el-button
                link
                type="primary"
                size="small"
                @click.prevent="deleteRow(scope.$index)"
              >
                更改权限
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button style="width: 150px;margin-top: 20px;margin-left: 20px;" @click="onAddItem">添加用户</el-button>
      </div>
      <div v-show="!show">
        <el-form :model="form" class="form">
          <div style="margin-bottom: 20px">新建用户</div>
          <el-form-item prop="name">
            <el-input
              v-model="form.name"
              type="text"
              clearable
              size="large"
              placeholder="用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input
              v-model="form.passwd"
              type="text"
              clearable
              size="large"
              placeholder="密码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input
              v-model="form.group"
              type="text"
              clearable
              size="large"
              placeholder="用户组"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 100%" @click="submit">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script >
export default {
  data() {
    return {
      buttonTitle: "新建用户",
      show: true,
      form: {
        name: "",
        passwd: "",
        group: "",
      },
      tableData: [
        {
          id: "1",
          name: "root",
          group: 1,
          authority:"admin"
        },
        {
          id: "2",
          name: "user1",
          group: 2,
          authority:"user"
        },
        {
          id: "3",
          name: "user2",
          group: 2,
          authority:"user"
        },
      ],
    };
  },
  methods: {
    deleteRow(item) {
      alert(JSON.stringify(this.tableData[item]));
    },
    onAddItem() {
      // alert("aaa");
      this.show = false;
    },
    submit() {
      this.show = true;
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style lang="less" scoped>
.background {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-direction: column;
}
.card {
  margin-top: 30px;
  min-height: 500px;
  width: 95%;
  //   transform: translateY(-15%);
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
  .form {
    margin: 50px;
    width: 50%;
  }
}
</style>