import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { View, TouchableOpacity, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export class LaundriesScreen extends Component<{
    navigation: StackNavigationHelpers
}>{

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <TouchableOpacity activeOpacity={0.8} style={{ width: 32 }} onPress={() => this.props.navigation?.goBack()} >
                            <Icon name="chevron-left" color='#000000' size={36} style={{ textAlign: 'center' }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ flex: 3, flexDirection: 'column', textAlign: 'center', fontSize: 20, fontWeight: 'bold', textAlignVertical: 'center' }}>Laundries</Text>
                    <View style={{ flex: 1, flexDirection: 'column' }}>

                    </View>
                </View>
                <View style={{ flex: 1, padding: 20, marginBottom: 20, justifyContent:'center' }}>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Image source={require('../assets/images/laundry-basket.png')} style={{width:'50%', aspectRatio:1, height:undefined, alignSelf:'center'}} />
                        <Text style={{fontSize:28, textAlign:'center'}}>No Laundries yet</Text>
                        <Text style={{fontSize:17, textAlign:'center', marginTop:10, color:'#00000040'}}>Hit the button down below to start your laundry order</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor:'#0083FF', borderRadius:30, padding:20}} onPress={() => this.props.navigation?.goBack()} >
                            <Text style={{ textAlign: 'center', color:'#F6F6F9', fontSize:17, fontWeight:'bold' }} >Start Laundry</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
})