export default defineAppConfig({
  lazyCodeLoading:'requiredComponent',
  darkmode: true,
  // 全局页面路径
  pages: ["pages/index/index",
          "pages/contribute/contribute",
          "pages/login/login",
          "pages/my/my",
          "pages/content/content",
          "pages/notice/notice",
          "pages/noticeDetail/noticeDetail",
          "pages/search/search",
    "pages/searchResult/searchResult",
    "pages/myResource/myResource",
          "pages/bonus/bonus"

  ],
  //配置分包
  subpackages: [
    {
      "root": "pageUser",
      "pages": [
        "userInfo/userInfo",
        "setting/setting"
      ]
    }
  ],

  // 全局页面配置
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  //分包处理
  // subPackages: [],
  // tabbar
  tabBar: {
    // 默认颜色
    color: "#333",
    // 高亮颜色
    selectedColor: "#1296db",

    backgroundColor:'#fff',

    borderStyle:'white',
    // 页面路径
    list: [
    {
      // 文本内容
      text: "首页",
      // 页面路径
      pagePath: "pages/index/index",
      // 默认图标
      iconPath: "./static/static/tabs/home_default.png",
      // 高亮图标
      selectedIconPath: "./static/static/tabs/home_selected.png"
    },
    {
      text: "投稿",
      pagePath: "pages/contribute/contribute",
      iconPath: "./static/static/tabs/contribute_default.png",
      selectedIconPath: "./static/static/tabs/contribute_selected.png"
    },
    {
      text: "我的",
      pagePath: "pages/my/my",
      iconPath: "./static/static/tabs/my_default.png",
      selectedIconPath: "./static/static/tabs/my_selected.png"
    },
  ],
  },
});
