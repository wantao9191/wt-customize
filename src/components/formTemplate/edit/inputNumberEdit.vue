<template>
    <div class="item-option">
        <el-form size="mini" label-width="100px">
            <el-form-item label="名称">
                <el-input v-model="value.configs.label"></el-input>
            </el-form-item>
            <el-form-item label="步数">
                <el-input-number v-model="value.configs.step"></el-input-number>
            </el-form-item>
            <el-form-item label="最大值">
                <el-input-number v-model="value.configs.max"></el-input-number>
            </el-form-item>
            <el-form-item label="最小值">
                <el-input-number v-model="value.configs.min" @change="minChange"></el-input-number>
            </el-form-item>
            <el-form-item label="禁用">
                <el-checkbox v-model="value.configs.disabled"></el-checkbox>
            </el-form-item>
            <el-form-item label="必填">
                <el-checkbox v-model="value.configs.rules.required"></el-checkbox>
            </el-form-item>
            <div v-if="value.configs.rules.required">
                <el-form-item label="提示语">
                    <el-input v-model="value.configs.rules.message"></el-input>
                </el-form-item>
                <el-form-item label="触发">
                    <el-radio-group v-model="value.configs.rules.trigger">
                        <el-radio label="blur">失去焦点</el-radio>
                        <el-radio label="change">选项改变</el-radio>
                    </el-radio-group>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>
<script lang='ts'>
import { defineComponent, reactive } from "vue";
export default defineComponent({
    props: { value: { type: Object, default: {} } },
    setup(props, context) {
        const minChange = (value) => {
            if (value >= props.value.configs.max) {
                props.value.configs.max += props.value.configs.step
            }
            if (value > props.value.configs.value) props.value.configs.value = value
        }
        return { minChange }
    }
});
</script>
<style lang="scss" scoped>

</style>