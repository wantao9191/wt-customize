<template>
  <div class="custom-form">
    <aside-left @onSelect="onSelect"></aside-left>
    <main>
      <div class="title">{{ form.name }}</div>
      <el-form
        :model="{}"
        :size="form.size"
        :label-width="form.labelWidth + 'px'"
        :label-position="form.position"
        class="form-edit"
      >
        <el-form-item
          class="item"
          :label="l.configs.label"
          :prop="l.id"
          :rules="l.configs.rules"
          v-for="(l, i) in list"
          :key="i"
        >
          <form-item :options="l"></form-item>
        </el-form-item>
      </el-form>
    </main>
    <aside-right :key="list[editIndex].id" v-model:form="form" v-model:value="list[editIndex]" v-if="editIndex != null"></aside-right>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import asideLeft from "./asideLeft.vue";
import asideRight from "./asideRight.vue";
import formItem from "./formItem.vue";
import formConfigs from "../../assets/js/formConfig.js";
export default defineComponent({
  components: {
    asideLeft,
    asideRight,
    formItem
  },
  setup(props, context) {
    const list = reactive([]);
    const editIndex = ref(null);
    const form = reactive({ name: '表单', size: 'mini', position: 'right', labelWidth: 100 })
    const onSelect = l => {
      let el = l.type ? l.value + "-" + l.type : l.value;
      console.log(el);
      
      let item = JSON.parse(JSON.stringify(formConfigs[el]));
      item.id = 'l-' + new Date().getTime();
      console.log(item.id)
      list.push(item)
      editIndex.value = list.length - 1;
    };
    return { onSelect, list, editIndex, form };
  }
});
</script>
<style lang="scss" scoped>
.custom-form {
  height: 100%;
  display: flex;
  user-select: none;
  .title {
    text-align: center;
    font-size: 13px;
    background: #67c23a;
    padding: 8px;
    border-radius: 4px;
    color: #fff;
    margin-top: 12px;
    .icon {
      cursor: pointer;
      vertical-align: middle;
      margin-left: 2px;
    }
    .el-input {
      height: 16px;
      line-height: 16px;
      margin-top: -10px;
      width: 500px;
      input {
        height: 16px !important;
        line-height: 16px !important;
      }
    }
  }
  > main {
    // width: calc(100% - 740px);
    flex: 1;
    max-height: 100%;
    > .form-edit {
      margin: 12px 0;
      .item {
        border: 1px solid #ddd;
        padding: 12px;
        margin-bottom: 12px;
        border-radius: 6px;
        font-size: 13px;
      }
    }
  }
}
</style>