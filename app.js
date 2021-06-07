// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    console.log('app---onLaunch')
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log('app---login sucess')
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
   
  },
  onShow(){
    console.log("app---onShow");

  },
 
  onHide() {
    console.log('app---onHide');
  },

  globalData: {
    userInfo: null
  }
  
})
