<template>
  <div class="aside-left">
    <div class="aside-title">表单项</div>
    <div class="items-wrap">
      <div class="items">
        <div class="item" v-for="(l, i) in list" :key="i" @click="onClick(l)">
          <div class="label">{{ l.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup(props, context) {
    const list = reactive([
      { label: "多选框", value: "checkbox" },
      { label: "单选框", value: "radio" },
      { label: "文本框", value: "input" },
      { label: "多行文本框", value: "input", type: "textarea" },
      { label: "计数器", value: "input-number" },
      { label: "选择器", value: "select" },
      { label: "开关", value: "switch" },
      { label: "评分", value: "rate" },
      { label: "日期选择", value: "date-picker" },
      { label: "日期时间", value: "date-picker" },
    ]);
    const onClick = (l) => {
      context.emit('onSelect', l)
    }
    return { list, onClick };
  },
});
</script>
<style lang="scss" scoped>
.aside-left {
  width: 24%;
  height: 100%;
  .aside-title {
    text-align: center;
    font-size: 13px;
    background: #409eff;
    margin: 12px 12px 0;
    padding: 8px;
    border-radius: 4px;
    color: #fff;
  }
  .items {
      padding: 12px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
      > .item {
        width: calc(50% - 6px);
        font-size: 12px;
        margin-bottom: 12px;
        > .label {
          // display: inline-block;
          cursor: pointer;
          border-radius: 4px;
          border: 1px solid #ddd;
          padding: 4px 12px;
          // width: 120px;
        }
      }
    }
}
</style>