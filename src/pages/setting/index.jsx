import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtList, AtListItem} from "taro-ui"
import './index.less'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {}
  }

  config = {
    navigationBarTitleText: '设置'
  }


  render() {
    return (
      <View className='setting'>
        <AtList>
          <AtListItem title='修改个人资料' arrow='right' iconInfo={{
            size:
              25, color: '#beaa85', value: 'edit',
          }}/>
          <AtListItem title='关于不一致选' arrow='right' iconInfo={{
            size: 25,
            color: '#beaa85', value: 'alert-circle',
          }}/>
          <AtListItem title='平台声明' arrow='right' iconInfo={{
            size: 25,
            color: '#beaa85', value: 'bookmark',
          }}/>
          <AtListItem title='进入管理员' arrow='right' iconInfo={{
            size: 25,
            color: '#beaa85', value: 'bookmark',
          }}/>
        </AtList>
      </View>
    )
  }
}
