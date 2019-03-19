// pages/test/course-detail/course-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
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
    this.dialog = this.selectComponent("#dialog");
    let that = this;
    that.setData({
      imgUrls: [
        'https://goss.vcg.com/creative/vcg/800/version23/VCG219d2878a29.jpg',
        'https://goss3.vcg.com/creative/vcg/800/version23/VCG41478859478.jpg',
        'https://goss3.vcg.com/creative/vcg/800/version23/VCG41501958013.jpg',
      ],
    })
  },

  showDialog() {
    this.dialog.showDialog();
  },
  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },

  disclaimer() {
    //触发取消回调
    wx.navigateTo({
      url: '../../course/disclaimer/disclaimer',
    });
  },
  convention() {
    //触发成功回调

    wx.navigateTo({
      url: '../../course/convention/convention',
    });

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