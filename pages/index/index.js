const app = getApp();

Page({
    data: {
        showrandom: true,
        scale: 'scale(1)',
        randomData: {},
        randomRange: 80000,
        randomResult: 0
    },
    random() {
        this.data.randomResult = Math.floor(Math.random() * this.data.randomRange);
        wx.showLoading({
            title: '搜索中'
        });
        this.setData({
            scale: 'scale(0)'
        });
        setTimeout(() => {
            this.setData({
                showrandom: false
            });
        }, 700);
        wx.request({
            url: `${app.globalData.url}?key=${app.globalData.key}&id=${this.data.randomResult}`,
            method: 'GET',
            success: res => {
                this.setData({
                    randomData: res.data.result.data[0]
                });
                wx.hideLoading();
            },
            fail: () => {
                this.setData({
                    randomData: {
                        title: '很抱歉,没能找到菜式!',
                        albums: ['../../img/sorry.png']
                    }
                });
                wx.hideLoading();
            }
        });
    },

    linkToDetails() {
        wx.navigateTo({
            url: `/pages/details/details?id=${this.data.randomResult}`
        });
    },

    search(e) {
        const value = e.detail.value;

        wx.showLoading({
            title: '搜索中'
        });

        wx.request({
            url: `${app.globalData.urlKey}?key=${app.globalData.key}&menu=${value}`,
            method: 'GET',
            success: res => {
                if (res.data.error_code !== 0) {
                    wx.hideLoading();
                    wx.showToast({
                        title: 'o(╥﹏╥)o````````o(╥﹏╥)o 很遗憾，未找到食谱',
                        duration: 2000,
                        icon: 'none'
                    });
                    return;
                }
                wx.hideLoading();
                app.globalData.listData = res.data.result.data;
                wx.navigateTo({
                    url: '/pages/list/list'
                });
            },
            fail: function() {
                wx.hideLoading();
                wx.showToast({
                    title: 'o(╥﹏╥)o````````o(╥﹏╥)o 很遗憾，未找到食谱',
                    duration: 2000,
                    icon: 'none'
                });
            }
        });
    }
});
