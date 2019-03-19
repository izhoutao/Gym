// map.js
Page({
  data: {
    latitude: 31.0461797482,
    longitude: 121.4086574928,
    markers: [{
      iconPath: '/images/icon/location.png',
      id: 0,
      latitude: 31.0461797482,
      longitude: 121.4086574928,
      width: 40,
      height: 40
    }],
  },
  onLoad(options) {
    console.log(options)
    if (options.location && options.location.split(',').length === 2) {
      this.setData({
        latitude: options.location.split(',')[0],
        longitude: options.location.split(',')[1]
      })

    }

  },
  regionchange: function (e) {
    // console.log(e.type)
  },
  markertap: function (e) {
    // console.log(e.markerId)
  },
  controltap: function (e) {
    // console.log(e.controlId)
    let that = this
    //请求当前定位
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
        that.moveTolocation();
      },
    })
  },
  /**
   * 移动到中心点
   */
  moveTolocation: function () {
    //mapId 就是你在 map 标签中定义的 id
    var mapCtx = wx.createMapContext("map");
    mapCtx.moveToLocation();
  },
})