const app = getApp();

// pages/my/my.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        hasUserInfo: false
    },

    getUserInfo: function(e) {
        if (!e.detail.userInfo) {
            return;
        }
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    },

    aboutProgram() {
        wx.showModal({
            title: '食谱指南',
            content: '致力于为用户提供优质的食谱指南服务，特色是食谱推荐功能，是选择困难症者的福音哦！'
        });
    },

    aboutAuthor() {
        wx.showModal({
            title: '关于作者',
            content:
                '作者是一名前端工程师，热爱代码，专注前端，同样也喜欢折腾新技术，小程序简洁的语法和齐全的API加上萌生了食谱APP的想法，于是“食谱指南”诞生啦！'
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            });
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {}
});
