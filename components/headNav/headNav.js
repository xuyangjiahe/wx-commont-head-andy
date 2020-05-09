// components/headNav/headNav.js
let app = getApp();
let globalInfo = app.globalData;
Component({
  properties: {
    topBarName: {
      type: String,
      value: '',
      observer(n, o){
        
      }
    },
    isShare: {
      type: String,
      value: '2',
      observer(n, o){
        
      }
    }
  },
  data: {
    statusBarHeight:'',
    barBgColor:'#fff',
    topMainHeight:''
  },
  methods: {
    goBack() {
      // 测试多层级页面
      wx.navigateBack({
        delta: 1
      })
      /**
       * 此为突破页面层数限制，
       * 每一个需要这样写
       * wx.navigateTo({
       *  url:'',
       *  fail() {
       *    wx.redirectTo({
       *      url:'',
       *    })
       *  }
       * })
       * */ 
    },
    getBackPreviousPage() {
      let that = this;
      that.triggerEvent('mygetbackpreviouspage')
    },
    // getBackHome() {
    //   wx.switchTab({
    //     url: '/pages/index/index',
    //     fail(res) {
    //       console.log('res:', res);
    //     }
    //   })
    // },
    getBackHome(){
      // 返回首页
      let that = this;
      // if (that.data.isShare === '1') {
      //   // 分享进入的，需要清空数据
      //   globalInfo.userInfo = {};
      //   globalInfo.goodsBaseInfo = {};
      //   globalInfo.orderType = '';
      // } else {
      //   globalInfo.goodsBaseInfo = {};
      //   globalInfo.orderType = '';
      // }
      
      wx.switchTab({
        url: '/pages/index/index',
      })
    },
  },
  attached() {
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log('getSystemInfo res:', res);
        that.setData({
          statusBarHeight: res.statusBarHeight,
          topMainHeight: Number(res.statusBarHeight) + 120
        })
      }
    })
  }
})