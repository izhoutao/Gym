// client/pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    scrollTop1: 0,
    scrollTop2: 0,
    flag: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this;
    that.setData({
      imgUrls: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552822996511&di=8d9f246ad74028d92e92117c4699433b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F57e84007dcfa3774e421eca921253d9084f5601e105127-o48jjA_fw658',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552822584583&di=710c14944664e2ca6af893fed74ccd02&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe91aec8d919ce78f07c765c42166318df4fdde2024cbd-AprKHv_fw658',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552822996512&di=d41dc73dfea293a64c110677de731f1b&imgtype=0&src=http%3A%2F%2Fpic.pingguolv.com%2Fuploads%2Fallimg%2F170611%2F147-1F611105211.jpg',
      ],
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onPageScroll1: function (e) {
    wx.createSelectorQuery().select('.course-list').boundingClientRect(function (rect) {
      // that.setData({
      //   swiperHeight: rect.height // 节点的宽度
      // })
      console.log(rect)
    }).exec()
  },
  onPageScroll: function (e) {
    var that = this;

    // console.log(e.scrollTop)
    // console.log(e.scrollTop)
    // console.log(this.data.scrollTop1)
    // console.log(this.data.scrollTop2)
    // console.log(this.data.flag)
    if (e.scrollTop > this.data.scrollTop1 && this.data.scrollTop1 > this.data.scrollTop2 && this.data.flag) {
      wx.hideTabBar({
        // animation: true
      })
      this.setData({
        flag: false,
      })
    } else if (e.scrollTop < this.data.scrollTop1 && this.data.scrollTop1 < this.data.scrollTop2 && !this.data.flag) {
      wx.showTabBar({
        // animation: true
      })
      this.setData({
        flag: true,
      })
    }
    this.setData({
      scrollTop2: this.data.scrollTop1,
      scrollTop1: e.scrollTop
    })
    //当页面滚动距离scrollTop > menuTop某元素距离文档顶部的距离时，某元素固定定位
    // if (that.data.menuFixed === (e.scrollTop > 150)) {
    //   return
    // }
    // that.setData({
    //   menuFixed: (e.scrollTop > 150)
    // })
  },
})