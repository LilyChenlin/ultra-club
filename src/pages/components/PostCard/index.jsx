import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import React from 'react'
import './index.scss';
import classNames from 'classnames';
function PostCard(props) {
    const handleClick = () => {
      // 如果是列表，就响应点击事件，跳转到帖子详情
      if (props.isList) {
        const {title, content} = props;
        Taro.navigateTo({
          url: `/pages/post/post?title=${title}&content=${content}`
        })

      }
    }
    return (
      <View 
        className={classNames('postcard', { postcard__isList: props.isList })} 
        onClick={handleClick}>
        <View className="post-title">{props.title}</View>
        <View className="post-content">{props.content}</View>
      </View>
    )
  }
  export default PostCard