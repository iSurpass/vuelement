//写组件，并在路由中注册
<template>
  <div>
    <br>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary" >主要按钮</el-button>
      <el-button type="success" >成功按钮</el-button>
      <el-button type="info" >信息按钮</el-button>
      <el-button type="warning" >警告按钮</el-button>
      <el-button type="danger" >危险按钮</el-button>
    </el-row>
    <br>
    <el-row>
      <el-button round>朴素按钮</el-button>
      <el-button type="primary" plain >主要按钮</el-button>
      <el-button type="success" plain >成功按钮</el-button>
      <el-button type="info" plain >信息按钮</el-button>
      <el-button type="warning" plain >警告按钮</el-button>
      <el-button type="danger" plain >危险按钮</el-button>
    </el-row>
    <br>
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style scoped>

</style>
