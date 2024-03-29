import 'taro-ui/dist/style/index.scss'
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import './app.less'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/mine/index',
      'pages/setting/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#aaa",
      selectedColor: "#beaa85",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/images/tab/works.png",
        selectedIconPath: "./assets/images/tab/works_selected.png"
      }, {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "./assets/images/tab/mine.png",
        selectedIconPath: "./assets/images/tab/mine_selected.png"
      }]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
