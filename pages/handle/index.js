Page({
    data: {
        popupShow: false,
        active: 0,
        params: {
            keywords: ''
        },
        objectArray: [
            {
                id: 0,
                name: '中国'
            },
            {
                id: 1,
                name: '美国'
            },
            {
                id: 2,
                name: '德国'
            },
            {
                id: 3,
                name: '法国'
            }
        ]
    },
    onSearch() {
        console.log(1111)
    },
    onFilter() {
        this.setData({
            popupShow: !this.data.popupShow
        })
    },
    bindPickerChange2: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            objectIndex: e.detail.value
        })
    }
})
