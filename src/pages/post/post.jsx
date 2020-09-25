import React from 'react'
import Taro, { useRouter } from '@tarojs/taro'
import { PostCard } from '../components'
import {View} from '@tarojs/components'
import './post.scss'
function Post () {
    // 用来在函数组件中获取router
    const router = useRouter()
    const { params } = router
    return (
        <View className="post">
            <PostCard title={params.title} content={params.content}/>
        </View>
    )
}
export default Post