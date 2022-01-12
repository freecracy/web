<template>
  <span class="logo">HELLO</span>
  <el-menu>
    <el-sub-menu index="1">
      <template #title>
        <el-icon></el-icon>
        <span class="side-group">组别</span>
      </template>
      <el-menu-item index="1-1"><router-link to="/login">one</router-link></el-menu-item>
      <el-menu-item index="1-2">two</el-menu-item>
      <el-menu-item index="1-3">three</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
    .side-group {
        position: absolute;
    }
</style>