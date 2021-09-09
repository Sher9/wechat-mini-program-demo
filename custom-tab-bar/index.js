Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: []
  },
  attached() {
    let list = [
      {
        pagePath: '/pages/handle/index',
        iconPath: '/static/images/icon_api.png',
        selectedIconPath: '/static/images/icon_api_select.png',
        text: '业务办理',
        badgeNum: 6,
        badgeShow: 'block'
      }, {
        pagePath: "/pages/logs/logs",
        iconPath: "/static/images/icon_api.png",
        selectedIconPath: "/static/images/icon_api_select.png",
        text: "业务办理",
        badgeNum: 1,
        badgeShow: 'none'
      }
    ]
    this.setData({
      list: list
    })
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
      wx.setTabBarBadge({
        index: 0,
        text: '1'
      })
    }
  }
})