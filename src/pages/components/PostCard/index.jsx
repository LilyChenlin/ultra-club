import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import React from 'react'
import './index.scss';

export default function PostCard(props) {
    return (
      <View className="postcard">
        <View className="post-title">{props.title}</View>
        <View className="post-content">{props.content}</View>
      </View>
    )
  }