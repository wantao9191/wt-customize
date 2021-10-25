<template>
    <el-radio-group v-model="configs.value" :disabled="configs.disabled">
        <el-radio v-for="(item,i) in configs.list" :key="i" :label="item.value">{{ item.label }}</el-radio>
    </el-radio-group>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    props: { configs: { type: Object, default: {} } },
    setup(props, context) {
    }
});
</script>
