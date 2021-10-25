<template>
    <div>
        <div class="aside-title">
            表单配置
            <el-icon v-if="visible" class="icon" @click="toggle">
                <arrow-up-bold :size="20" />
            </el-icon>
            <el-icon class="icon" :size="16" v-else @click="toggle">
                <arrow-down-bold />
            </el-icon>
        </div>
        <el-form v-model="value" size="mini" label-width="100px" v-show="visible">
            <el-form-item label="名称">
                <el-input v-model="value.name"></el-input>
            </el-form-item>
            <el-form-item label="尺寸">
                <el-radio-group v-model="value.size">
                    <el-radio label="mini">最小</el-radio>
                    <el-radio label="small">中等</el-radio>
                    <el-radio label="medium">最大</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="对齐">
                <el-radio-group v-model="value.position">
                    <el-radio label="right">右对齐</el-radio>
                    <el-radio label="left">左对齐</el-radio>
                    <el-radio label="top">上对齐</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="宽度">
                <el-input-number v-model="value.labelWidth" :min="100" />
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts">
import { ArrowUpBold, ArrowDownBold } from "@element-plus/icons";
import { defineComponent, ref } from 'vue'
export default defineComponent({
    components: { ArrowUpBold, ArrowDownBold },
    props: { value: { type: Object, default: {} } },
    setup() {
        const visible = ref(false)
        const toggle = () => {
            visible.value = !visible.value
        }
        return { visible, toggle }
    },
})
</script>
<style lang='scss' scoped>
.aside-title {
    text-align: center;
    font-size: 13px;
    background: #909399;
    padding: 8px;
    border-radius: 4px;
    color: #fff;
    margin-bottom: 12px;
    position: relative;
    .icon {
        color: #fff;
        position: absolute;
        right: 10px;
        cursor: pointer;
    }
}
</style>
