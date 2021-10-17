<template>
  <div class="aside-left">
    <div class="items">
      <div class="item" v-for="(l, i) in list" :key="i" @click="onClick(l)">
        <span>{{ l.label }}</span>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup(props,context) {
    const list = reactive([
      { label: "多选框", value: "checkbox" },
      { label: "单选框", value: "radio" },
      { label: "文本框", value: "input" },
      { label: "多行文本框", value: "input", type: "textarea" },
      { label: "计数器", value: "input-number" },
      { label: "选择器", value: "select" },
      { label: "开关", value: "switch" },
      { label: "评分", value: "rate" },
      { label: "日期选择", value: "date-picker", type: "" },
      { label: "日期时间", value: "date-picker", type: "datetime" },
    ]);
    const onClick=(l)=>{
      context.emit('onSelect',l)
    }
    return { list ,onClick};
  },
});
</script>
<style lang="scss" scoped>
.aside-left {
  width: 320px;
  height: 100%;
  .items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 12px;
    > .item {
      width: calc(50% - 6px) ;
      font-size: 12px;
      margin-bottom: 12px;
      >span {
        display: inline-block;
        cursor: pointer;
        border-radius: 4px;
        border:1px solid #ddd;
        padding: 4px 12px;
        width: 120px;
      }
    }
  }
}
</style>