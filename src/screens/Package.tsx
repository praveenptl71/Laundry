import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ScrollView, View, TouchableOpacity, Text, Image, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';


export class PackageScreen extends Component<{
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
                    <Text style={{ flex: 3, flexDirection: 'column', textAlign: 'center', fontSize: 20, fontWeight: 'bold', textAlignVertical: 'center' }}>Settings</Text>
                    <View style={{ flex: 1, flexDirection: 'column' }}>

                    </View>
                </View>
                <Text style={{ flexDirection: 'row', fontSize: 17, fontWeight: 'bold', textAlign:'center', marginVertical:20 }}>Monthly Laundry Plan</Text>
                <ScrollView style={{ flex: 1, padding: 25, paddingTop:40, backgroundColor:'#F9F9F9', borderTopLeftRadius:30, borderTopRightRadius:30, elevation:1 }}>
                    <View style={{ flexDirection: 'row', padding: 20, paddingVertical:30, backgroundColor:'#FFFFFF', elevation:1, borderRadius:30 }}>
                        <View style={{ flexDirection:'column'}}>
                            <Image source={require('../assets/images/man.png')} style={{width:60, height:undefined, aspectRatio:1}} />
                        </View>
                        <View style={{ flexDirection:'column', marginLeft:15, justifyContent:'center'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:20, fontWeight:'bold'}}>Individual</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:5}}>
                                <Text style={{flexDirection:'column', width:'50%', color:'#0083FF', fontSize:16}}>&#8377;10,000</Text>
                                <Text style={{flexDirection:'column', color:'#C7C7C7', fontSize:16}}>100 Cloths</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 20, paddingVertical:30, backgroundColor:'#FFFFFF', elevation:1, borderRadius:30, marginTop:30 }}>
                        <View style={{ flexDirection:'column'}}>
                            <Image source={require('../assets/images/couple.png')} style={{width:60, height:undefined, aspectRatio:1}} />
                        </View>
                        <View style={{ flexDirection:'column', marginLeft:15, justifyContent:'center'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:20, fontWeight:'bold'}}>Couple</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:5}}>
                                <Text style={{flexDirection:'column', width:'50%', color:'#0083FF', fontSize:16}}>&#8377;16,000</Text>
                                <Text style={{flexDirection:'column', color:'#C7C7C7', fontSize:16}}>200 Cloths</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ elevation:1, borderRadius:30, marginTop:30 }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0083FF', '#4FCAE8']} style={{ borderRadius:30,flexDirection: 'row', padding: 20, paddingVertical:30,  }}>
                            <View style={{ flexDirection:'column'}}>
                                <Image source={require('../assets/images/family.png')} style={{width:60, height:undefined, aspectRatio:1}} />
                            </View>
                            <View style={{ flexDirection:'column', marginLeft:15, justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:20, fontWeight:'bold', color:'#FCC201'}}>Family</Text>
                                </View>
                                <View style={{flexDirection:'row', marginTop:5}}>
                                    <Text style={{flexDirection:'column', width:'50%', color:'#FFFFFF', fontSize:16}}>&#8377;25,000</Text>
                                    <Text style={{flexDirection:'column', color:'#FFFFFFCC', fontSize:16}}>350 Cloths</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>

                    <View><Text>&nbsp;</Text></View>


                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
})