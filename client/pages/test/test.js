// pages/test/test.js

Page({

  data: {
    imgUrls: [
      'https://cis.comac.cc/TMS/WebServiceProject/post/7.jpg',
      'https://cis.comac.cc/TMS/WebServiceProject/post/8.jpg',
      'https://cis.comac.cc/TMS/WebServiceProject/post/9.jpg'
    ],
    days: ['一', '二', '三', '四', '五', '六', '日','一', '二', '三', '四', '五', '六', '日'],
    interval: 5000,
    duration: 1000,
    menuTop: '',
    currentTab: 0,
    week:[],
    weekdate:[],

  },
  onLoad:function(){
    var weekdate = []
    let day = new Date().getDay()
    let week = this.data.days.slice(day - 1, day + 6)
    var date = new Date().getDate()
    week[0] = '今日'
    for (var i=0;i<7;i++){
      weekdate.push(new Date(new Date().setDate(new Date().getDate() + i)).getDate())
    }
    this.setData({
      week,
      weekdate
    })
    console.log(date)
  },
  onshow: function() {
    var that = this;
    var query = wx.createSelectorQuery() //创建节点查询器 query
    query.select('#fix').boundingClientRect() //选择Id的节点，获取节点位置信息的查询请求
    query.exec(function(res) {
      console.log(res[0].top); // #fix节点的上边界坐标
      that.setData({
        menuTop: res[0].top
      })
    });
  },
  /**
   * 监听滚动事件
   */
  onPageScroll: function(e) {
    console.log(e); //{scrollTop:99}
    var that = this;
    //当页面滚动距离scrollTop > menuTop某元素距离文档顶部的距离时，某元素固定定位
    if (e.scrollTop > 150) {
      that.setData({
        menuFixed: true,
        flag: false
      })

      wx.hideTabBar({

      })
    } else {
      that.setData({
        menuFixed: false,
        flag: true
      })

      wx.showTabBar({
        
      })
    }
  },
  swichNav: function(e) {

    // console.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
    return false;

    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },

  swiperUrl: function(e) {

     console.log(e);

    // this.setData({

    //   currentTab: e.detail.current,

    // })
  },
  swiperChange: function (e) {
    console.log(e);
    this.setData({
    currentTab: e.detail.current,
    })
  },
  onTapToDetail(event) {
    // console.log(event);
    var courseId = event.currentTarget.dataset.courseId;
    console.log(courseId);
    wx.navigateTo
      ({
        // url: 'course-detail/course-detail?id=' + coursetId,
        url: 'course-detail/course-detail'
      })
  },
})