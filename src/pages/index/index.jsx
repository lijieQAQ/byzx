import Taro, {Component} from '@tarojs/taro'
import {View, CoverImage, Swiper, SwiperItem} from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import './index.less'
import imgURL1 from '../../assets/images/pic/1.png';
import imgURL2 from '../../assets/images/pic/2.png';
import imgURL3 from '../../assets/images/pic/3.png';
import imgURL4 from '../../assets/images/pic/4.png';
import imgURL5 from '../../assets/images/pic/5.png';
import imgURL6 from '../../assets/images/pic/6.png';
import imgURL7 from '../../assets/images/pic/7.png';
import imgURL8 from '../../assets/images/pic/8.png';
import imgURL9 from '../../assets/images/pic/9.png';
import imgURL10 from '../../assets/images/pic/10.png';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '作品'
  }

  constructor() {
    super(...arguments)
    this.state = {
      data: [
        {src: imgURL1, name: 'demo1'},
        {src: imgURL2, name: 'demo2'},
        {src: imgURL3, name: 'demo3'},
        {src: imgURL4, name: 'demo4'},
        {src: imgURL5, name: 'demo5'},
        {src: imgURL6, name: 'demo6'},
        {src: imgURL7, name: 'demo7'},
        {src: imgURL8, name: 'demo8'},
        {src: imgURL9, name: 'demo9'},
        {src: imgURL10, name: 'demo10'},
      ],
      rightData: [],
      leftData: [],
      value: ''
    }
  }

  componentDidMount() {
    this.getHW(this.state.data)
  }

  getHW(data) {
    let rightData = []; //渲染右侧盒子的数组
    let leftData = []; //渲染左侧盒子的数组
    data.forEach((item, index) => {
      // let height = item.src.replace('http://dummyimage.com/', '').substr(0, 7).split('x')[1] * 1;
      // let minNum = Math.min.apply(null, heightDate);
      // let minIndex = heightDate.indexOf(minNum);
      // heightDate[minIndex] = heightDate[minIndex] + height;
      if ((index % 2) !== 0) { //[0]加到left [1]加到 right
        leftData.push(item)
      } else {
        rightData.push(item)
      }
    });
    this.setState({leftData, rightData});//重新set state
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }
  render() {

    let {leftData, rightData} = this.state;
    console.log(leftData, rightData)
    return (
      <View className='home'>
        <AtSearchBar
          showActionButton
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.onActionClick.bind(this)}
        />
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            <CoverImage className='item-img' src={imgURL8} mode='aspectFill' />
          </SwiperItem>
          <SwiperItem>
            <CoverImage className='item-img' src={imgURL9} mode='aspectFill' />
          </SwiperItem>
          <SwiperItem>
            <CoverImage className='item-img' src={imgURL10} mode='aspectFill' />
          </SwiperItem>
        </Swiper>
        <View className='container'>
          <View>
            {
              leftData && leftData.map((item, index) => {
                return (<View className='item'>
                  <CoverImage className='item-img' src={item.src} mode='aspectFill' key={index} />
                  <View className='item-name'>{item.name}</View>
                </View>)
              })
            }
          </View>
          <View>
            {
              rightData && rightData.map((item, index) => {
                return (<View className='item'>
                  <CoverImage className='item-img' src={item.src} mode='aspectFill' key={index} />
                  <View className='item-name'>
                    {item.name}
                  </View>
                </View>)
              })
            }
          </View>
        </View>
      </View>
    );
  }
}
