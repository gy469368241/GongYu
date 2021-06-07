const order = ['demo1', 'demo2', 'demo3']

Page({
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },
  statechange(e) {
    console.log('live-player code:', e.detail.code)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  },

  onLoad(options) {
    console.log('page---onLoad');
  },

  onReady() {
    console.log('page---onReady');
  },

  onShow() {
    console.log('page---onShow');
  },



  onUnload() {
    console.log('page---onUnload');
  },

  onHide() {
    console.log('page---onHide');
  },


  data: {
    toView: 'green',
    lenth: 5,
  },

  
})