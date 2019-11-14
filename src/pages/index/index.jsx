import Taro, {Component} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import './index.less'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '作品'
  }
  constructor() {
    super(...arguments)
    this.state = {
      data: [],
      rightData: [],
      leftData: []
    }
  }
  componentDidMount() {
    this.getHW(this.state.data)
  }

  getHW(data) {
    let heightDate = [0, 0];//接收累计高度的容器数组
    let rightData = []//渲染右侧盒子的数组
    let leftData = []//渲染左侧盒子的数组
    data.forEach(item => {
      let height = item.src.replace('http://dummyimage.com/', '').substr(0, 7).split('x')[1] * 1;
      let minNum = Math.min.apply(null, heightDate);
      let minIndex = heightDate.indexOf(minNum);
      heightDate[minIndex] = heightDate[minIndex] + height;
      if (minIndex === 0) {//[0]加到left [1]加到 right
        leftData.push(item)
      } else {
        rightData.push(item)
      }
    })
    this.setState({leftData, rightData});//重新set state
  }

  render() {

    let {leftData, rightData} = this.state;
    console.log(leftData, rightData)
    return (
      <View>
        <View className='left'>
          {
            leftData && leftData.map((item, index) => {
              return <Image src={item.src} key={index} />
            })
          }
        </View>
        <View className='right'>
          {
            rightData && rightData.map((item, index) => {
              return <Image src={item.src} key={index} />
            })
          }
        </View>
      </View>
    );
  }
}
