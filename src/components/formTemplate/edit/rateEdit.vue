<template>
    <div class="item-option">
        <el-form size="mini" label-width="100px">
            <el-form-item label="名称">
                <el-input v-model="value.configs.label"></el-input>
            </el-form-item>
            <el-form-item label="辅助文字">
                <el-checkbox v-model="value.configs.showText"></el-checkbox>
                <div v-if="value.configs.showText" class="show-text">
                    <el-input v-model="value.configs.texts[0]"></el-input>
                    <el-input v-model="value.configs.texts[1]"></el-input>
                    <el-input v-model="value.configs.texts[2]"></el-input>
                    <el-input v-model="value.configs.texts[3]"></el-input>
                    <el-input v-model="value.configs.texts[4]"></el-input>
                </div>
            </el-form-item>
            <el-form-item label="禁用">
                <el-checkbox v-model="value.configs.disabled"></el-checkbox>
            </el-form-item>
            <el-form-item label="半选">
                <el-checkbox v-model="value.configs.allowHalf"></el-checkbox>
            </el-form-item>
            <el-form-item label="分值">
                <el-checkbox v-model="value.configs.showScore"></el-checkbox>
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
    }
});
</script>
<style lang="scss" scoped>
.show-text {
    display: inline-block;
    width: 80%;
    vertical-align: top;
    margin-left: 12px;
    .el-input {
        width: 60%;
        display: block;
        margin-bottom: 12px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>