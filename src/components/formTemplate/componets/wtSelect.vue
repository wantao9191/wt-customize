<template>
  <el-select
    v-model="configs.value"
    :multiple="configs.multiple"
    :placeholder="configs.placeholder"
    :disabled="configs.disabled"
    :clearable="configs.clearable"
    :filterable="configs.filterable"
  >
    <el-option v-for="(item,i) in configs.list" :key="i" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: { configs: { type: Object, default: {} } },
  setup(props, context) {
  }
});
</script>
