// components/date/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    

  },

  /**
   * 组件的初始数据
   */
  data: {
    days: ['一', '二', '三', '四', '五', '六', '日', '一', '二', '三', '四', '五', '六', '日'], 
    currentTab: 0,
    week: ['一', '二', '三', '四', '五', '六', '日'],
    weekdate: [1,2,3,4,5,6,7],
  },

  attached:function(){
    var weekdate = []
    let day = new Date().getDay()
    let week = this.data.days.slice(day - 1, day + 6)
    var date = new Date().getDate()
    week[0] = '今日'
    for (var i = 0; i < 7; i++) {
      weekdate.push(new Date(new Date().setDate(new Date().getDate() + i)).getDate())
    }
    this.setData({
      week,
      weekdate
    })

  },

  /**
   * 组件的方法列表
   */
  methods: {

    swichNav: function (e) {

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
  }

})
