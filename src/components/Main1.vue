<template>
  <el-date-picker v-model="value" type="date" placeholder="开始时间">
  </el-date-picker>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
</script>