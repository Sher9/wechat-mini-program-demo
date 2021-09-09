Component({
    data: {
        orgList: [
            {
                name: '武汉市老年人协会',
                id: 1,
                status: '正常',
                time: '2018-05-07 25:59:25',
                score: 5,
                desc: '门前大桥下，游过一群鸭',
                medias: [
                    {
                        mediaID: 1,
                        mediaPath:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553162974154&di=dea9c6d6d8770de95b8cd5c545fff3c7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201606%2F29%2F20160629112343_fvVNh.jpeg'
                    },
                    {
                        mediaID: 2,
                        mediaPath:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1553153165&di=bb5a1fffc02874b0a2a1566c69bf19d4&src=http://b-ssl.duitang.com/uploads/item/201702/11/20170211145457_AnsMv.jpeg'
                    },
                    {
                        mediaID: 3,
                        mediaPath:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1553153165&di=bb5a1fffc02874b0a2a1566c69bf19d4&src=http://b-ssl.duitang.com/uploads/item/201702/11/20170211145457_AnsMv.jpeg'
                    },
                    {
                        mediaID: 4,
                        mediaPath:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1553153165&di=bb5a1fffc02874b0a2a1566c69bf19d4&src=http://b-ssl.duitang.com/uploads/item/201702/11/20170211145457_AnsMv.jpeg'
                    }
                ]
            },
            {
                name: '武汉市志愿者协会',
                id: 2,
                status: '注销',
                time: '2018-05-07 25:59:25',
                score: 5,
                desc: '门前大桥下，游过一群鸭',
                medias: [
                    {
                        mediaID: 1,
                        mediaPath:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553162974154&di=dea9c6d6d8770de95b8cd5c545fff3c7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201606%2F29%2F20160629112343_fvVNh.jpeg'
                    },
                    {
                        mediaID: 2,
                        mediaPath:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1553153165&di=bb5a1fffc02874b0a2a1566c69bf19d4&src=http://b-ssl.duitang.com/uploads/item/201702/11/20170211145457_AnsMv.jpeg'
                    }
                ]
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
                url: `../handle/org-detail/index?id=${data.id}`
            })
        }
    }
})
