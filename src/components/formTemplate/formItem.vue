<script lang="jsx">
import { defineComponent, h, resolveComponent, ref } from "vue";
import wtSelect from "./componets/wtSelect.vue";
export default defineComponent({
  components: { wtSelect },
  props: {
    options: { type: Object, default: {} },
  },
  setup(props) {
    let { options } = props
    options.element = 'wt-' + options.element
    console.log(options, '----------')
    return () => (
      h(resolveComponent(options.element), { configs: options.configs })
    );
  },
});
</script>
