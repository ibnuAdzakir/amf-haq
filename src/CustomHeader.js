import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import {IMAGE} from './constant/Images'

export class CustomHeader extends Component {
  render() {
    let {navigation, isHome, title}=this.props
    return (
      <View style={{ flexDirection: 'row', height: 50 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {
            isHome ?
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image style={{ width: 25, height: 25, marginLeft: 5 }}
                  source={IMAGE.ICON_MENU}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              :
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => navigation.goBack()}
              >
                <Image style={{ width: 20, height: 20, marginLeft: 5 }}
                  source={IMAGE.ICON_BACK}
                  resizeMode="contain"
                />
                <Text>Back</Text>
              </TouchableOpacity>
          }
        </View>
        <View style={{ flex: 1.5, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center' }}>{title}</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    )
  }
}