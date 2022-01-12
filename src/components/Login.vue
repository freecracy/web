<template>
  <el-row align="middle" justify="center">
    <el-col :span="6" >
      <div>
        <el-form ref="formRef" :model="form" label-width="120px">
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import Axios from "axios";

const form = reactive({
  name: "",
  password: "",
});

const onSubmit = () => {

  Axios.get("/login").then(function (response) {
    console.log(response.data);
  });
};
</script>

<style>
body,html {
  height: 100%;
}
#app {
  height: 100%;
}
.el-row {
  height: 100%;
}
</style>>