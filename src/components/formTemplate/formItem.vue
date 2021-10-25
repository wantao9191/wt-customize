<script lang="jsx">
import { defineComponent, h, resolveComponent, ref, readonly } from "vue";
export default defineComponent({
  props: {
    options: { type: Object, default: {} },
  },
  setup(props) {
    let options = props.options
    let element = 'wt-' + props.options.element
    return () => (
      h(resolveComponent(element), { configs: props.options.configs })
    );
  },
});
</script>
