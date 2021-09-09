Component({
    data: {
        imgWidth: 0,
        imgHeight: 0,
        noteList: [
            {
                id: 1,
                title: '活动名称',
                desc: '门前大桥下，游过一群鸭1',
                url: 'http://pic1.win4000.com/pic/a/05/63c41394961.jpg_195.jpg'
            },
            {
                id: 2,
                title: '门前大桥下，游过一群鸭。快来快来数一数，二四六七八',
                desc: '门前大桥下，游过一群鸭。快来快来数一数，二四六七八',
                url:
                    'http://hbimg.b0.upaiyun.com/b11c807c31349601bff6cdaac649e8a658813877ed57-M9wN20_fw658'
            },
            {
                id: 3,
                title: '活动名称',
                desc: '门前大桥下，游过一群鸭2',
                url: 'http://pic1.win4000.com/pic/a/d3/4ee062ab1a.jpg'
            },
            {
                id: 4,
                title: '活动名称',
                desc: '门前大桥下，游过一群鸭3',
                url:
                    'http://himg2.huanqiu.com/attachment2010/2017/0308/20170308031635668.jpg'
            },
            {
                id: 5,
                title: '活动名称',
                desc: '门前大桥下，游过一群鸭4',
                url:
                    'http://p4.ssl.cdn.btime.com/t013b049db3b362f6d1.jpg?size=640x960'
            },

            {
                id: 6,
                title: '活动名称',
                desc: '门前大桥下，游过一群鸭5',
                url:
                    'http://img3.imgtn.bdimg.com/it/u=435911797,1856343938&fm=26&gp=0.jpg'
            },
            {
                id: 7,
                title: '活动名称',
                desc: '门前大桥下，游过一群鸭6',
                url:
                    'http://img.gaosan.com/upload/201610/6361229453434642032068507.jpg'
            },
            {
                id: 8,
                title: '活动名称',
                desc: '门前大桥下，游过一群鸭',
                url:
                    'http://01.minipic.eastday.com/20170726/20170726115729_833e6670e22b023ae7cf871e4571028f_8.jpeg'
            },
            {
                id: 9,
                title: '活动名称',
                desc: '门前大桥下，游过一群鸭',
                url: 'http://www.5djiaren.com/uploads/2015-11/25-171016_70.jpg'
            }
        ]
    },
    ready() {
        this.loadMore()
    },
    methods: {
        onPullDownRefresh() {
            this.loadMore(null, true)
        },
        loadMore(e, needRefresh) {
            console.log(e)
            console.log(needRefresh)
        },
        viewDetail(e) {
            const data = e.currentTarget.dataset
            wx.navigateTo({
                url: `../handle/activity-detail/index?id=${data.id}`
            })
        }
    }
})
