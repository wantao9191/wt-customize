<template>
  <el-date-picker
        v-model="configs.vlaue"
        :type="configs.type"
        :placeholder="configs.placeholder"
        :format="configs.format"
      >
      </el-date-picker>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: { configs: { type: Object, default: {} } },
  setup(props, context) {
  }
});
</script>
