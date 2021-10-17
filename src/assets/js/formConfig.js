const formConfigs = {
    checkbox: {
        element: 'checkbox',
        name: '多选框',
        configs: {
            disabled: false, value: '', defaultValue: '', required: false, trigger: 'blur', list: [{ label: '选项1', value: '选项1' }, { label: '选项2', value: '选项2' }],
            placeholder:'请选择'
        },
    },
    radio: {
        element: 'radio',
        name: '单选框',
        configs: {
            disabled: false, value: '', defaultValue: '', required: false, trigger: 'blur', list: [{ label: '选项1', value: '选项1' }, { label: '选项2', value: '选项2' }],
            placeholder:'请选择'
        }

    },
    input: {
        element: 'input',
        name: '文本框',
        configs: {
            disabled: false, value: '', defaultValue: '', placeholder: '', clearable: false, required: false, trigger: 'blur',
            placeholder:'请输入'
        }
    },
    'input-textarea': {
        element: 'input',
        name: '多行文本框',
        type: 'textarea', configs: {
            disabled: false, value: '', defaultValue: '', placeholder: '', clearable: false, required: false, trigger: 'blur',
            placeholder:'请输入'
        }
    },
    'input-number': {
        element: 'input-number',
        name: '计数器',
        configs: {
            disabled: false, value: '', defaultValue: '', placeholder: '', step: 1, 'controls-position': 'right', required: false, trigger: 'blur',
            placeholder:'请输入'
        }
    },
    select: {
        element: 'select',
        name: '选择器',
        configs: {
            disabled: false, value: '', defaultValue: '', multiple: false, required: false, trigger: 'blur', list: [{ label: '选项1', value: '选项1' }, { label: '选项2', value: '选项2' }],
            placeholder:'请选择'
        },
    }
}
export default formConfigs