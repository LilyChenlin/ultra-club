export default {
  pages: [
    'pages/index/index',
    'pages/mine/mine',
    'pages/post/post'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './images/homeSelected.png',
        selectedIconPath: './images/homeSelected.png'
      },
      {
        pagePath: 'pages/mine/mine',
        text: '我的',
        iconPath: './images/mineSelected.png',
        selectedIconPath: './images/mineSelected.png'
      }
    ]
  }
}
