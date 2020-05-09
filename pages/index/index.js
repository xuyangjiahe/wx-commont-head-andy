//index.js
//获取应用实例
// const HTTP = require('../../utils/http-list.js');
// const http = new HTTP();
// const app = getApp()
// let globalInfo = app.globalData;
// import { toastTip, jumpTo } from '../../utils/util';
// import tool from '../../utils/utils.js';
// 地图定位
let map = require('../../utils/map.js');
Page({
  data: {
    cityData: '',
    topBarName: '首页',
    isShare: '2',
    barBgColor:'#fff',
    userInfo: {},
    hasUserInfo: false,
    statusBarHeight: '',
   
    topMainHeight:'',
    
  },
  
  getUserLocation() {
    // 获取用户的地理位置
    let that = this;
    wx.login({
      success(){
        wx.getSetting({
          success (setingRes){
            console.log('getSetting setingRes:', setingRes);
            
            wx.getLocation({
              type: 'wgs84',
              success(res) {
                console.log('地理位置 res', res);
                if (res && res.errMsg === 'getLocation:ok') {
                  map.getAddress(res.latitude.toFixed(6), res.longitude.toFixed(6), (successRes) => {
                    console.log('successRes:', successRes);
                    let successResData = successRes.result.ad_info
                    that.setData({
                      cityData: successResData.district
                    })
                  })
                }
                
              }
            })
          }
        })
      }
    })
  },
  onLoad: function (options) {
    let that = this;
    // wx.hideShareMenu();
    wx.showShareMenu();
    
    
  },
  onShow() {
    let that = this;
    
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    let that = this;
    that.getIndexDataServe();
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
