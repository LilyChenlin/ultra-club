import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React from 'react'
import {PostCard, PostForm} from '../components/index'

import './index.scss'

class MainIndex extends React.Component {
  state = {
    posts: [
      {
        title: '泰罗奥特曼',
        content: '泰罗是奥特之父和奥特之母唯一的亲生儿子.',
      }
    ],
    formTitle: '',
    formContent: '',
  }

  handleSubmit(e) {
    e.preventDefault()

    const {
      formTitle: title,
      formContent: content
    } = this.state
    const newPosts = this.state.posts.concat({title, content})
    this.setState({
      posts: newPosts,
      formTitle: '',
      formContent: ''
    })
  }
  onReady() {
    console.log(this.state.posts)
  }
  handleTitleInput(e) {
    this.setState({
      formTitle: e.target.value
    })
  }
  handleContentInput(e) {
    this.setState({
      formContent: e.target.value
    })
  }

  render() {
    let { formTitle, formContent } = this.state;
    return (
      <View className="index">
        {this.state.posts.map((post, index) => {
          return <PostCard key={index} title={post.title} content={post.content}/>
        })}
        <PostForm
          formTitle={formTitle}
          formContent={formContent}
          handleSubmit = {e => this.handleSubmit(e)}
          handleTitleInput = { e => this.handleTitleInput(e)}
          handleContentInput = {e => this.handleContentInput(e)}
        />
      </View>
    )
  }
}
export default MainIndex