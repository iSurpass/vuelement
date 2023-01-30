<template>
  <div>
    <el-button type="success" plain round>默认按钮</el-button>
    <el-button type="danger" size="mini" plain round>默认按钮</el-button>
    <el-button type="info" size="medium" plain round>默认按钮</el-button>
    <el-button type="success" size="small" plain round>默认按钮</el-button>
    <el-button type="success" circle icon="el-icon-loading"></el-button>

    <br>

    <el-button-group>
      <el-button type="primary" icon="el-icon-back">上一页</el-button>
      <el-button type="primary" icon="el-icon-right">下一页</el-button>
    </el-button-group>
  </div>


</template>

<script>
export default {
  name: "ButtonDetail"
}
</script>

<style scoped>

</style>
