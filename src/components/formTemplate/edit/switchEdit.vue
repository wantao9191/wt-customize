<template>
    <div class="item-option">
        <el-form size="mini" label-width="100px">
            <el-form-item label="名称">
                <el-input v-model="value.configs.label"></el-input>
            </el-form-item>
            <el-form-item label="文字（开）">
                <el-input v-model="value.configs.activeText" placeholder="开关开启文本"></el-input>
            </el-form-item>
            <el-form-item label="文字（关）">
                <el-input v-model="value.configs.inactiveText" placeholder="开关关闭文本"></el-input>
            </el-form-item>
            <el-form-item label="禁用">
                <el-checkbox v-model="value.configs.disabled"></el-checkbox>
            </el-form-item>
            <el-form-item label="必填">
                <el-checkbox v-model="value.configs.rules.required"></el-checkbox>
            </el-form-item>
            
        </el-form>
    </div>
</template>
<script lang='ts'>
import { defineComponent, reactive } from "vue";
export default defineComponent({
    props: { value: { type: Object, default: {} } },
    setup(props, context) {
    }
});
</script>
<style lang="scss" scoped>
</style>