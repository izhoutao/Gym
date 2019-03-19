// pages/welcome/welcome.js
Page({
  onTapJump: function (event) {
    wx.switchTab({
      url: '../course/course',
      success: function () {
        console.log('jump success')
      },
      fail: function () {
        console.log('jump fail')
      },
      complete: function () {
        console.log('jump complete')
      }
    });
  },

  getPhoneNumber: function (e) {
    // console.log(e.detail.errMsg)
    // console.log(e.detail.iv)
    // console.log(e.detail.encryptedData)
  },
  /**
   * 页面的初始数据
   */
  data: {
    time: 3,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.data.Time = setInterval(() => {
      this.setData({
        time: --this.data.time
      })
      if (this.data.time <= 0) {
        clearInterval(this.data.Time)
        this.goHome()
      }
    }, 1000)
  },
  goHome() {
    clearInterval(this.data.Time)
    wx.reLaunch({
      url: '../course/course'

    })
  },

  // toIndexDetail(){
  //     wx.navigateTo({
  //       url: 'index-detail/index-detail',
  //     })
  // },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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



})