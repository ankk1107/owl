const {
  envList
} = require("../../envList");
const {
  QuickStartPoints,
  QuickStartSteps
} = require("./constants");

Page({
  data: {
    knowledgePoints: QuickStartPoints,
    steps: QuickStartSteps,
    sNumber: '',

  },

  copyCode(e) {
    const code = e.target?.dataset?.code || '';
    wx.setClipboardData({
      data: code,
      success: () => {
        wx.showToast({
          title: '已复制',
        })
      },
      fail: (err) => {
        console.error('复制失败-----', err);
      }
    })
  },

  discoverCloud() {
    wx.switchTab({
      url: '/pages/examples/index',
    })
  },

  gotoGoodsListPage() {
    wx.navigateTo({
      url: '/pages/goods-list/index',
    })
  },

  bindInput(e) {
    this.setData({
      sNumber: e.detail.value
    });
  },

  getMsg() {
    if (this.data.sNumber && Number(this.data.sNumber) !== NaN) {
      wx.navigateTo({
        url: `/pages/detail/index?id=${this.data.sNumber}`,
      })
    } else {
      wx.showToast({
        icon:  'error',
        title: '请输入你的ID',
      })
    }

  }
});