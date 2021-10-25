<script lang="jsx">
import { defineComponent, h, resolveComponent } from "vue";
import selectEdit from "./edit/selectEdit.vue";
import checkboxEdit from './edit/checkboxEdit.vue'
import radioEdit from './edit/radioEdit.vue'
import inputEdit from './edit/inputEdit.vue'
import inputTextareaEdit from './edit/inputTextareaEdit.vue'
import inputNumberEdit from './edit/inputNumberEdit.vue'
import switchEdit from './edit/switchEdit.vue'
import rateEdit from './edit/rateEdit.vue'
import datePickerEdit from './edit/datePickerEdit.vue'
import formEdit from './formEdit.vue'
export default defineComponent({
  components: { selectEdit, formEdit, checkboxEdit, switchEdit, rateEdit,datePickerEdit, radioEdit, inputEdit, inputTextareaEdit, inputNumberEdit },
  props: { value: { type: Object, default: {} }, form: { type: Object, default: {} } },
  setup(props, context) {
    console.log(props.form)
    let element = props.value.element + '-edit'
    return () => (
      <div class='aside-right'>
        {h(resolveComponent('form-edit'), { value: props.form })}
        <div class='aside-title'>表单项配置</div>
        {h(resolveComponent(element), {
          value: props.value, 'onUpdate:value': data => {
            // context.emit('update:value',value)
          }
        })}
      </div>
    );
  }
});
</script>

<style lang="scss" scoped>
.aside-right {
  width: 32%;
  font-size: 13px;
  padding: 12px;
  .aside-title {
    text-align: center;
    font-size: 13px;
    background: #e6a23c;
    padding: 8px;
    border-radius: 4px;
    color: #fff;
    margin-bottom: 12px;
  }
}
</style>