// components/top-swiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrls: Array,
    interval: {
      type: Number,
      value: 5000,
    },
    duration: {
      type: Number,
      value: 1000,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      'https://upload-images.jianshu.io/upload_images/4077497-da7f2b5ca30da7a8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp',
      'https://upload-images.jianshu.io/upload_images/4077497-d39bd2d804bc4f63.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp',
      'https://upload-images.jianshu.io/upload_images/4077497-132b03e30688dfab.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp',
      'https://upload-images.jianshu.io/upload_images/4077497-0620bfbc9e5f16e3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp'
    ],
    interval: 5000,
    duration: 1000,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapImage: function (event) {
      wx.switchTab({
        url: '/pages/my/my'
      })
    },
  }
})