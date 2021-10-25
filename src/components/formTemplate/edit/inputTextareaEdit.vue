<template>
  <div class="item-option">
    <el-form size="mini" label-width="100px">
      <el-form-item label="名称">
        <el-input v-model="value.configs.label"></el-input>
      </el-form-item>
      <el-form-item label="提示">
        <el-input v-model="value.configs.placeholder"></el-input>
      </el-form-item>
      <el-form-item label="行数">
        <el-input-number v-model="value.configs.rows"></el-input-number>
      </el-form-item>
      <el-form-item label="禁用">
        <el-checkbox v-model="value.configs.disabled"></el-checkbox>
      </el-form-item>
      <el-form-item label="必填">
        <el-checkbox v-model="value.configs.rules.required"></el-checkbox>
      </el-form-item>
      <el-form-item label="自适应">
        <el-checkbox v-model="value.configs.autosize"></el-checkbox>
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
      <el-form-item label="清空">
        <el-checkbox v-model="value.configs.clearable"></el-checkbox>
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