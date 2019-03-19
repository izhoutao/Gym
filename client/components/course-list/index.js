// components/course-list/index.js

Component({

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    hideStore: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
    days: ['日', '一', '二', '三', '四', '五', '六', '日', '一', '二', '三', '四', '五'],
    menuTop: '',
    currentTab: 0,
    weekdays: [],
    weekdates: [],
    swiperHeight: 150,
    swiperTop: 0,
  },
  lifetimes: {
    ready() {
      var that = this
      that.createSelectorQuery().select('.header').boundingClientRect(function (rect) {
        that.setData({
          swiperTop: rect.height
        })
      }).exec()
      // const query = wx.createSelectorQuery()
      // query.select('.course-list').boundingClientRect()
      // query.selectViewport().scrollOffset()
      // query.exec(function (res) {
      //   console.log(res)
      //   // res[0].top // #the-id节点的上边界坐标
      //   // res[1].scrollTop // 显示区域的竖直滚动位置
      // })
    },
  },
  pageLifetimes: {
    show: function () {
      let weekdays = []
      let now = new Date()
      let day = now.getDay()
      let weekdates = this.data.days.slice(day, day + 7)
      weekdates[0] = '今日'
      let date = now.getDate()
      for (var i = 0; i < 7; i++) {
        weekdays = [...weekdays, new Date(now.setDate(date + i)).getDate()]
      }
      this.setData({
        weekdays,
        weekdates
      })
      this.calcSwiperHeight()
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange: function (e) {
      this.setData({
        currentTab: e.detail.current,
      })
      this.calcSwiperHeight()
    },
    calcSwiperHeight: function (currentTab) {
      var that = this
      that.createSelectorQuery().select('.courses-swiper-item').boundingClientRect(function (rect) {
        that.setData({
          swiperHeight: rect.height // 节点的宽度
        })
      }).exec()
    },
    tapWeekday: function (e) {
      this.setData({
        currentTab: e.currentTarget.dataset.index
      })
      // console.log(this.data.swiperTop)
    }
  }
})