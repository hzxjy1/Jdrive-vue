<template>
  <el-button class="button">{{ buttonTitle }}</el-button>
  <div class="background">
    <el-card class="card" :body-style="{ padding: '0px' }">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="ID" width="180" />
        <el-table-column prop="name" label="名称" width="180" />
        <el-table-column prop="address" label="用户组" />
        <!-- <el-table-column label="用户组" /> -->
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonTitle: "新建用户",
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
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
}
.button {
  margin: 20px;
  margin-left: 30px;
}
</style>