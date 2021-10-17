<template>
    <el-select v-model="value" @chang="onChange" :placeholder="options.placeholder">
        <el-option v-for="(item,i) in list" :key="i" :label="item.label" :value="item.value"></el-option>
    </el-select>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
    props: { configs: { type: Object, default: {} } },
    setup(props, context) {
        console.log({ ...props.configs })
        const { configs } = props
        const value = ref(props.configs.defaultValue || props.configs.value)
        const options = reactive({ disabeld: configs.disabled, multiple: configs.multiple, placeholder: configs.placeholder })
        const list = reactive(props.configs.list)
        const onChange = (val) => {
            context.emit('update:value', val)
        }
        return { value, onChange, list, options }
    },
})
</script>
