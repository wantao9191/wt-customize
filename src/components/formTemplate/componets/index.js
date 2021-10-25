import wtSelect from './wtSelect.vue'
import wtCheckbox from './wtCheckBox.vue'
import wtRadio from './wtRadio.vue'
import wtInput from './wtInput.vue'
import wtInputTextarea from './wtInputTextarea.vue'
import wtInputNumber from './wtInputNumber.vue'
import wtSwitch from './wtSwitch.vue'
import wtRate from './wtRate.vue'
import wtDatePicker from './wtDatePicker.vue'
function lib(Vue) {
    Vue.component('wtSelect', wtSelect)
    Vue.component('wtCheckbox', wtCheckbox)
    Vue.component('wtRadio', wtRadio)
    Vue.component('wtInput', wtInput)
    Vue.component('wtInputTextarea', wtInputTextarea)
    Vue.component('wtInputNumber', wtInputNumber)
    Vue.component('wtSwitch', wtSwitch)
    Vue.component('wtRate', wtRate)
    Vue.component('wtDatePicker', wtDatePicker)
}
export default lib