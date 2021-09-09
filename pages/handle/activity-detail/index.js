Page({
    data: {
        score: '',
        desc: '',
        imglist: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553599188296&di=e4eceb4ad84992f94f490815f9d91d8c&imgtype=0&src=http%3A%2F%2F05imgmini.eastday.com%2Fmobile%2F20180930%2F20180930171344_f7d20f03893016d9c25e0b661ca3c27a_6.jpeg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553599188591&di=23215f47c20c75648088d7f966c1b751&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2F006VODPNly1fs2gdqf29wj30hs0a0thg.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1272852870,1529717331&fm=26&gp=0.jpg'
        ],
        uploadImglist: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553681935500&di=58abb64273537c474184eb53bc6d209c&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2F12%2F1239%2F123960%2F12396016_980x1200_0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553599188591&di=23215f47c20c75648088d7f966c1b751&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2F006VODPNly1fs2gdqf29wj30hs0a0thg.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1272852870,1529717331&fm=26&gp=0.jpg'
        ]
    },
    onLoad(options) {
        const id = options.id
        wx.showToast({
            title: '正在加载',
            icon: 'loading',
            duration: 1000
        })
        console.log(id)
    },
    //预览
    previewUploadImage(e) {
        var current = e.target.dataset.src
        wx.previewImage({
            current: current, // 当前显示图片的http链接
            urls: this.data.uploadImglist // 需要预览的图片http链接列表
        })
    },
    // 上传图片
    chooseImg(e) {
        wx.chooseImage({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: res => {
                const images = this.data.uploadImglist.concat(res.tempFilePaths)
                this.setData({
                    uploadImglist: images
                })
            }
        })
    },
    // 删除图片
    deleteImg(e) {
        var imgList = this.data.uploadImglist
        var index = e.currentTarget.dataset.index
        imgList.splice(index, 1)
        this.setData({
            uploadImglist: imgList
        })
    },
    //预览活动情况图片
    previewImage(e) {
        var current = e.target.dataset.src
        wx.previewImage({
            current: current, // 当前显示图片的http链接
            urls: this.data.imglist // 需要预览的图片http链接列表
        })
    }
})
