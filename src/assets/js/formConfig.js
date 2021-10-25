const formConfigs = {
    checkbox: {
        element: 'checkbox',
        name: '多选框',
        configs: {
            label: '多选框',
            disabled: false,
            value: [],
            rules: {
                required: false,
                trigger: 'blur',
                message: '该项为必填项'
            },
            list: [
                { label: '选项1', value: '选项1' },
                { label: '选项2', value: '选项2' },
                { label: '选项3', value: '选项3' }
            ],
        },
    },
    radio: {
        element: 'radio',
        name: '单选框',
        configs: {
            label: '单选框',
            disabled: false,
            value: '',
            rules: {
                required: false,
                trigger: 'blur',
                message: '该项为必填项'
            },
            list: [
                { label: '选项1', value: '选项1' },
                { label: '选项2', value: '选项2' },
                { label: '选项3', value: '选项3' }
            ],
        }

    },
    input: {
        element: 'input',
        name: '文本框',
        configs: {
            label: '文本框',
            disabled: false,
            value: '',
            placeholder: '',
            clearable: false,
            rules: {
                required: false,
                trigger: 'blur',
                message: '该项为必填项'
            },
            placeholder: '请输入'
        }
    },
    'input-textarea': {
        element: 'inputTextarea',
        name: '多行文本框',
        configs: {
            label: '多行文本框',
            disabled: false,
            rows: 2,
            autosize: false,
            value: '',
            placeholder: '',
            clearable: false,
            rules: {
                required: false,
                trigger: 'blur',
                message: '该项为必填项'
            },
            placeholder: '请输入'
        }
    },
    'input-number': {
        element: 'input-number',
        name: '计数器',
        configs: {
            label: '计数器',
            disabled: false,
            value: 0,
            max: 100,
            min: 0,
            step: 1,
            'controls-position': 'right',
            rules: {
                required: false,
                trigger: 'blur',
                message: '该项为必填项'
            },
        }
    },
    select: {
        element: 'select',
        name: '选择器',
        configs: {
            label: '选择器',
            disabled: false,
            value: '',
            multiple: false,
            clearable: true,
            filterable: false,
            rules: {
                required: false,
                trigger: 'blur',
                message: '该项为必填项'
            },
            list: [
                { label: '选项1', value: '选项1' },
                { label: '选项2', value: '选项2' },
                { label: '选项3', value: '选项3' }
            ],
            placeholder: '请选择'
        },
    },
    switch: {
        element: 'switch',
        name: '开关',
        configs: {
            label: '开关',
            disabled: false,
            value: false,
            activeText: "",
            inactiveText: ''
        },
    },
    rate: {
        element: 'rate',
        name: '评分',
        configs: {
            label: '评分',
            disabled: false,
            value: 0,
            allowHalf: false,
            showText: false,
            texts: ['1星', '2星', '3星', '4星', '5星'],
            rules: {
                required: false,
                trigger: 'blur',
                message: '该项为必填项'
            },
        },
    },
    'date-picker': {
        element: 'date-picker',
        name: '日期选择',
        configs: {
            label:'日期选择',
            type: 'date',
            label: '日期选择',
            disabled: false,
            value: '',
            placeholder: '请选择',
            format: 'YYYY-MM-DD',
            rules: {
                required: false,
                trigger: 'blur',
                message: '该项为必填项'
            },
        },
    }
}
export default formConfigs