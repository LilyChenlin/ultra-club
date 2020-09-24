import { View } from '@tarojs/components'
import React from 'react'
class Index extends React.Component {
    state = {
        msg : 'Hello World'
    }
    onReady () {
        console.log('onReady')
    }
    render () {
        return <View>{this.state.msg}</View>
    }
}
export default Index