const app = getApp();

// pages/series/series.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        result: [
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/8/7464_346208.jpg',
                name: '川菜',
                cid: '10'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/8/8020_985818.jpg',
                name: '粤菜',
                cid: '11'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/9/8593_519739.jpg',
                name: '湘菜',
                cid: '12'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/9/8817_454863.jpg',
                name: '鲁菜',
                cid: '13'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/9/8983_673345.jpg',
                name: '京菜',
                cid: '14'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/10/9187_613117.jpg',
                name: '东北菜',
                cid: '15'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/10/9577_158339.jpg',
                name: '西餐',
                cid: '16'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/10/9932_724656.jpg',
                name: '日本料理',
                cid: '17'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/11/10092_657368.jpg',
                name: '韩国料理',
                cid: '18'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/42/41987_326624.jpg',
                name: '闽菜',
                cid: '101'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/25/24170_767509.jpg',
                name: '浙菜',
                cid: '102'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/15/14469_290824.jpg',
                name: '苏菜',
                cid: '104'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/25/24748_934702.jpg',
                name: '徽菜',
                cid: '105'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/77/76768_323343.jpg',
                name: '豫菜',
                cid: '107'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/22/21906_621613.jpg',
                name: '晋菜',
                cid: '108'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/1/957_507130.jpg',
                name: '赣菜',
                cid: '109'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/1/794_568809.jpg',
                name: '湖北菜',
                cid: '110'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/69/68163_553228.jpg',
                name: '清真菜',
                cid: '111'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/2/1845_833318.jpg',
                name: '云南菜',
                cid: '112'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/64/63455_260800.jpg',
                name: '贵州菜',
                cid: '113'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/50/49114_938960.jpg',
                name: '新疆菜',
                cid: '114'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/24/23821_552761.jpg',
                name: '淮扬菜',
                cid: '115'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/43/42164_527634.jpg',
                name: '潮州菜',
                cid: '116'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/25/24787_155847.jpg',
                name: '客家菜',
                cid: '117'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/41/40171_366297.jpg',
                name: '香港美食',
                cid: '118'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/20/19564_709275.jpg',
                name: '台湾菜',
                cid: '119'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/7/6835_234703.jpg',
                name: '泰国菜',
                cid: '123'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/21/20588_137127.jpg',
                name: '意大利菜',
                cid: '124'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/10/9577_158339.jpg',
                name: '法国菜',
                cid: '125'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/46/45633_386960.jpg',
                name: '东南亚菜',
                cid: '126'
            },
            {
                imgUrl: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/7/6655_771470.jpg',
                name: '印度菜',
                cid: '127'
            }
        ]
    },

    linkToItem(e) {
        wx.showLoading({
            title: '加载中'
        });

        wx.request({
            url: `${app.globalData.urlCid}?key=${app.globalData.key}&cid=${e.currentTarget.dataset.cid}`,
            method: 'GET',
            success: function(res) {
                wx.hideLoading();
                app.globalData.listData = res.data.result.data;
                wx.navigateTo({
                    url: '/pages/list/list'
                });
            },
            fail: function() {
                wx.hideLoading();
                wx.showModal({
                    title: '搜素失败o(╥﹏╥)o',
                    duration: 2000
                });
            }
        });
    }
});
