import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Image, View, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export class OffersScreen extends Component<{
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
                    <Text style={{ flex: 3, flexDirection: 'column', textAlign: 'center', fontSize: 20, fontWeight: 'bold', textAlignVertical: 'center' }}>My Offers</Text>
                    <View style={{ flex: 1, flexDirection: 'column' }}>

                    </View>
                </View>
                <View style={{ flex: 1, padding: 20, marginBottom: 50, justifyContent:'center' }}>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Image source={require('../assets/images/sorry.png')} style={{width:'50%', aspectRatio:1, height:undefined, alignSelf:'center'}} />
                        <Text style={{fontSize:28, textAlign:'center'}}>ohh snap! No offers yet</Text>
                        <Text style={{fontSize:17, textAlign:'center', marginTop:10, color:'#00000040'}}>Areous dose’t have any offers at this timeplease check again.</Text>
                    </View>

                    
                </View>
                
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
})