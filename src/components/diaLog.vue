<template>
  <el-dialog
    :title="title"
    v-model="dialogVisible"
    width="30%"
    :before-close="handleClose"
    class="dialog"
  >
    <span class="dialog-footer">
      <el-from :model="newName">
        <el-input placeholder="请输入新名称" v-model="newName.name"></el-input>
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="chName()">确 定</el-button>
      </el-from>
    </span>
  </el-dialog>

  <el-dialog
    :title="title2"
    v-model="dialogVisible2"
    width="30%"
    :before-close="handleClose"
  >
    <span class="dialog-footer">
      <el-from :model="newPass">
        <el-input placeholder="请输入新名称" v-model="newPass.name"></el-input>
        <el-input placeholder="请输入新名称" v-model="newPass.repeat"></el-input>
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="chPass()">确 定</el-button>
      </el-from>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: "修改昵称",
      title2: "修改密码",
      dialogVisible: false,
      dialogVisible2: false,
      newName: {
        name: "",
      },
      newPass: {
        pass: "",
        repeat: "",
      },
    };
  },
  methods: {
    callDailog(i) {
      if (i === "name") {
        this.dialogVisible = true;
      } else if (i === "pass") {
        this.dialogVisible2 = true;
      }
    },
    handleClose() {
      this.dialogVisible = false;
      this.dialogVisible2 = false;
    },
    chName() {
      alert(this.newName.name);
      this.newName.name = "";
      this.dialogVisible = false;
    },
    chPass() {
      alert("pass");
      this.dialogVisible2 = false;
    },
  },
};
</script>
<style lang="less" scoped>
.el-input {
  margin-block: 30px;
}
</style>