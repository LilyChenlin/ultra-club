import React from 'react'
import Taro from '@tarojs/taro'
import {View, Image} from '@tarojs/components'

import avatar from '../../images/avatar.jpg'
import './mine.scss'
function Mine() {
    return (
        <View className="mine">
            <View>
                <Image src={avatar} className="mine-avatar"/>
                <View className="mine-nickName">远山眉</View>
                <View className="mine-username">Chenlili</View>
            </View>
            <View className="mine-footer">
                From LilyChenlin with Love ❤
            </View>
        </View>
        
    )
}
export default Mine