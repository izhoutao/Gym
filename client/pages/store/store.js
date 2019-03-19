// client/pages/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    location: '31.0461797482,121.4086574928',
  },
  onTapAddressLink: function (event) {
    wx.navigateTo({
      url: '/pages/map/map?location=' + this.data.location
    })
  },

  onTapPhoneLink: function (event) {
    wx.makePhoneCall({
      phoneNumber: '1340000' // 仅为示例，并非真实的电话号码
    })
  },
  onTapFacilitiesLink: function (event) {
    wx.navigateTo({
      url: '/pages/store/store'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.storeId)
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
        'https://upload-images.jianshu.io/upload_images/4077497-da7f2b5ca30da7a8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp',
        'https://upload-images.jianshu.io/upload_images/4077497-d39bd2d804bc4f63.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp',
        'https://upload-images.jianshu.io/upload_images/4077497-132b03e30688dfab.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp',
        'https://upload-images.jianshu.io/upload_images/4077497-0620bfbc9e5f16e3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp'
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

  }
})