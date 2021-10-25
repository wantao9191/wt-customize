<template>
    <el-input-number
        v-model="configs.value"
        :disabled="configs.disabled"
        :max="configs.max"
        :min='configs.min'
        :step="configs.step"
    ></el-input-number>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    props: { configs: { type: Object, default: {} } },
    setup(props, context) {
    }
});
</script>
