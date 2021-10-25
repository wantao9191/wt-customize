<template>
    <div class="item-option">
        <el-form size="mini" label-width="100px">
            <el-form-item label="名称">
                <el-input v-model="value.configs.label"></el-input>
            </el-form-item>
            <el-form-item label="选项">
                <el-checkbox-group v-model="value.configs.value">
                    <el-checkbox v-for="(l,i) in value.configs.list" :label="l.label" :key="i">
                        <div class="list-item">
                            <div class="item-option">
                                <span>label:</span>
                                <el-input size="mini" v-model="l.label"></el-input>
                            </div>
                            <div class="item-option">
                                <span>value:</span>
                                <el-input size="mini" v-model="l.value"></el-input>
                            </div>
                            <div class="item-option">
                                <i class="el-icon-remove-outline remove icon" @click="remove(i)"></i>
                            </div>
                        </div>
                    </el-checkbox>
                </el-checkbox-group>
                <div class="item-option">
                    <el-button size="mini" type="primary" @click="append">
                        添加
                        <i class="el-icon-circle-plus-outline el-icon--right"></i>
                    </el-button>
                </div>
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
        const multipleSelect = value => {
            if (value) {
                props.value.configs.value = [];
            } else {
                props.value.configs.value = "";
            }
        };
        const append = () => {
            props.value.configs.list.push({ label: "", value: "" });
        };
        const remove = (i) => {
            props.value.configs.list.splice(i, 1)
        }
        return { multipleSelect, append, remove };
    }
});
</script>
<style lang="scss" scoped>
.list-item {
    display: flex;
    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0;
    }
    .item-option {
        display: flex;
        align-items: center;
        > span {
            font-size: 13px;
            color: #666;
            margin-right: 6px;
        }
        .el-input {
            width: 80px;
            margin-right: 10px;
        }
        .icon {
            font-weight: bolder;
            font-size: 18px;
            cursor: pointer;
            &.remove {
                color: salmon;
            }
            &.append {
                color: skyblue;
                margin-left: 5px;
            }
        }
    }
}
</style>