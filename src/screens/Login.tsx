import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import { InputLabel } from '../components/InputLabel'


export class LoginScreen extends Component<{
    navigation: StackNavigationHelpers
}>{

    state = {
        activeTab : 'login'
    }

    changeTab = (tab:string) => {
        this.setState({activeTab:tab})
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.topView}>
                    <View style={{ marginTop: 40 }}>
                        <Image style={{ width: 100, height: 100, alignSelf: 'center' }} source={require('../assets/images/logo-color.png')} />
                    </View>
                    <Text style={{ color: '#000000', fontSize: 30, fontWeight: 'bold', marginTop: 15, textAlign: 'center', elevation: 10 }}>
                        Greenway Laundry
                    </Text>
                    <View style={{ flexDirection:'row', marginTop:20}}>
                        <View style={{flex:1, flexDirection:'column'}}>
                            <TouchableOpacity activeOpacity={0.8} 
                                style={(this.state.activeTab == 'login')?styles.activeTab:null}
                                onPress={() => this.changeTab('login')}>
                                <Text style={styles.btnText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1, flexDirection:'column'}}>
                            <TouchableOpacity activeOpacity={0.8} 
                                style={(this.state.activeTab == 'signup')?styles.activeTab:null}
                                onPress={() => this.changeTab('signup')}>
                                <Text style={styles.btnText}>Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView style={{ flex: 1, padding:40}} keyboardShouldPersistTaps='always'>
                    {
                        (this.state.activeTab == 'login') ? 
                        <View>
                            <InputLabel 
                                label="Email or Phone"
                                value="user@email.com"
                            />
                            <InputLabel 
                                label="Password"
                                secureTextEntry={true}
                            />
                            <TouchableOpacity style={{marginVertical:20}}>
                                <Text style={{fontSize:17, fontWeight:'bold', color:'#0083FF'}}>Forgot passcode?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                activeOpacity={0.7} 
                                style={[styles.btn,{marginTop:40}]}
                                onPress={()=> this.props.navigation.push('main-drawer')}>
                                <Text style={styles.btnText1}>Login</Text>
                            </TouchableOpacity>
                        </View> :
                        <View>
                            <InputLabel 
                                label="Name"
                            />
                            <InputLabel 
                                label="Email address"
                            />
                            <InputLabel 
                                label="Phone Number"
                            />
                            <InputLabel 
                                label="Password"
                                secureTextEntry={true}
                            />
                            <InputLabel 
                                label="Confirm Password"
                                secureTextEntry={true}
                            />
                            <TouchableOpacity style={{marginVertical:20}}>
                                <Text style={{fontSize:17, fontWeight:'bold', color:'#0083FF'}}>Forgot passcode?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} style={[styles.btn,{marginTop:40, marginBottom:60}]}>
                                <Text style={styles.btnText1}>Create Account</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F2F2F2'
    },
    topView : {
        paddingTop:40, 
        paddingHorizontal:40,
        backgroundColor: '#FFFFFF',
        elevation:3,
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        // flex:1
    },
    btnText: {
        fontSize:18,
        color:'#000000',
        textAlign:'center',
        fontWeight:'bold',
        marginVertical:10
    },
    activeTab: {
        borderBottomWidth:3,
        borderBottomColor:'#0083FF'
    },
    btn: {
        backgroundColor: '#0083FF',
        width: "100%",
        borderRadius: 30,
        paddingVertical: 18,
        elevation:1
    },
    btnText1: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlignVertical: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
    },
})