<template>
    <el-switch
        v-model="configs.value"
        :disabled="configs.disabled"
        :active-text="configs.activeText"
        :inactive-text="configs.inactiveText"
    ></el-switch>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    props: { configs: { type: Object, default: {} } },
    setup(props, context) {
    }
});
</script>
