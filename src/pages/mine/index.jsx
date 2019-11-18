import Taro, { Component } from '@tarojs/taro'
import { AtAvatar, AtButton, AtTabs, AtTabsPane } from 'taro-ui'
import { View, CoverImage } from '@tarojs/components'
import './index.less'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  goDetail () {
    Taro.navigateTo({
      url: '/pages/setting/index'
    })
  }
  config = {
    navigationBarTitleText: '我的'
  }


  render () {
    const tabList = [{ title: '收藏' }, { title: '关注' }];
    return (
      <View className='mine'>
        <View className='header'>
          <View className='avatar-info'>
            <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
            <View className='staff-info'>
              1233
              <AtButton type='primary' size='normal' circle={true}>认证身份</AtButton>
            </View>
          </View>
          <View className='at-icon at-icon-settings' onClick={this.goDetail.bind(this)}></View>
        </View>
        <View className='container'>
          <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
            <AtTabsPane current={this.state.current} index={0} >
              <View className='at-row'>
                <View className='at-col at-col-6'>
                  <CoverImage style='height: 120px;' src='../../assets/images/pic/1.png' />
                  <View className='name'>艺术</View>
                  <View className='avatar'>
                    <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
                    不一致选
                  </View>
                </View>
                <View className='at-col at-col-6'>
                  <CoverImage style='height: 120px;' src='../../assets/images/pic/1.png' />
                  <View className='name'>艺术</View>
                  <View className='avatar'>
                    <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
                    不一致选
                  </View>
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <View className='at-row'>
                <View className='at-col at-col-6'>
                  <CoverImage style='height: 120px;' src='../../assets/images/pic/1.png' />
                  <View className='name'>艺术</View>
                  <View className='avatar'>
                    <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
                    不一致选
                  </View>
                </View>
                <View className='at-col at-col-6'>
                  <CoverImage style='height: 120px;' src='../../assets/images/pic/1.png' />
                  <View className='name'>艺术</View>
                  <View className='avatar'>
                    <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
                    不一致选
                  </View>
                </View>
              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
      </View>
    )
  }
}
