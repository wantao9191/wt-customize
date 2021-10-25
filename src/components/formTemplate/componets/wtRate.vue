<template>
    <el-rate
        v-model="configs.value"
        :disabled="configs.disabled"
        :show-score="configs.showScore"
        :allow-half="configs.allowHalf"
        score-template="{value} 分"
        text-color="#ff9900"
        :texts='configs.texts'
        :show-text='configs.showText'
    ></el-rate>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    props: { configs: { type: Object, default: {} } },
    setup(props, context) {
    }
});
</script>
