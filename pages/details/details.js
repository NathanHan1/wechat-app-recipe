const app = getApp();

// pages/details/details.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        details: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.showLoading({
            title:'请稍等..'
        })
        wx.request({
            url: `${app.globalData.url}?key=${app.globalData.key}&id=${options.id}`,
            method: 'GET',
            success: res => {
                wx.hideLoading()
                this.data.details = res.data.result.data[0];

                this.setData({
                    details: {
                        ...this.data.details,
                        burden: this.data.details.burden.split(';'),
                        albums: [this.data.details.albums[0].replace(/\:/, 's:')],
                        steps: this.data.details.steps.map(item => {
                            return {
                                ...item,
                                step: item.step.slice(2),
                                img: item.img.replace(/\:/, 's:')
                            };
                        })
                    }
                });
            }
        });
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
