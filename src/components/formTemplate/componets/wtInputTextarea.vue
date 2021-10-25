<template>
    <el-input
        v-model="configs.value"
        :placeholder="configs.placeholder"
        :disabled="configs.disabled"
        :clearable="configs.clearable"
        type="textarea"
        :rows="configs.rows"
        :autosize='configs.autosize'
    ></el-input>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    props: { configs: { type: Object, default: {} } },
    setup(props, context) {
    }
});
</script>
