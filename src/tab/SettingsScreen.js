import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import { CustomHeader } from '../index'

export class SettingsScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Setting" isHome={true} navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Halaman Settings</Text>
                    <TouchableOpacity
                        style={{ marginTop: 20 }}
                        onPress={() => this.props.navigation.navigate('SettingDetail')}
                    >
                        <Text>Go Settings Detail</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}