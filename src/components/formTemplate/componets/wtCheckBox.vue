<template>
    <el-checkbox-group v-model="configs.value" :disabled="configs.disabled">
        <el-checkbox
            v-for="(item,i) in configs.list"
            :key="i"
            :label="item.label"
            :value="item.value"
        ></el-checkbox>
    </el-checkbox-group>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        configs: { type: Object, default: {} }
    },
    setup() {

    },
})
</script>
