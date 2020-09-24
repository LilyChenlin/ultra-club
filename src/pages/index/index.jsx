import { View } from '@tarojs/components'
import React, { useState } from 'react'
import {PostCard, PostForm} from '../components/index'

import './index.scss'

function Index () {
    const [posts, setPosts] = useState([{
        title: '泰罗奥特曼',
        content: '泰罗是奥特之父和奥特之母唯一的亲生儿子。',
        
    }])
    const [formTitle, setFormTitle] = useState('')
    const [formContent, setFormContent] = useState('')

    let handleSubmit = (e) => {
        e.preventDefault()
        const newPosts = posts.concat({
            title: formTitle,
            content: formContent
        })
        setPosts(newPosts)
        setFormTitle("")
        setFormContent("")
    }
    return (
        <View className="index">
            {posts.map((post, index) => {
                return <PostCard key={index} title={post.title} content={post.content}/>
            })}
            <PostForm
                formTitle={formTitle}
                formContent={formContent}
                handleSubmit={e => handleSubmit(e)}
                handleTitleInput={e => setFormTitle(e.target.value)}
                handleContentInput={e => setFormContent(e.target.value)}
            />
        </View>
    )
}
export default Index