<template>
  <div class="custom-form">
    <aside-left @onSelect="onSelect"></aside-left>
    <main>
      <div class="form-edit">
        <div class="item" v-for="(l, i) in list" :key="i">
          <form-item :options="l"></form-item>
        </div>
      </div>
    </main>
    <aside-right></aside-right>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
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
    const onSelect = (l) => {
      let el = l.type ? l.value + '-' + l.type : l.value
      let item = formConfigs[el]
      list.push(JSON.parse(JSON.stringify(item)));
    };
    return { onSelect, list };
  },
});
</script>
<style lang="scss" scoped>
.custom-form {
  height: 100%;
  display: flex;
  user-select: none;
  > main {
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