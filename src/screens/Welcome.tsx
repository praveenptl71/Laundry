import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { ScrollView, StatusBar } from "react-native";


export class WelcomeScreen extends Component<{
    navigation: StackNavigationHelpers
}>{

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar animated={false} backgroundColor='#0083FF' barStyle='light-content' />
                <ScrollView style={{ flex: 1,paddingTop: 40 }} keyboardShouldPersistTaps='always'>
                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal:40 }}>
                        <View style={{ width: 100, height: 100, backgroundColor: '#FFFFFF', borderRadius: 50, justifyContent: 'center', flexDirection: 'column',elevation:5 }}>
                            <Image style={{ width: '60%', height: '60%', alignSelf: 'center' }} source={require('../assets/images/logo-color.png')} />
                        </View>
                        <View style={{ flexDirection: 'column', paddingHorizontal: 20, justifyContent: 'center' }}>
                            <Text style={styles.logoText}>Greenway</Text>
                            <Text style={styles.logoText}>Laundry</Text>
                        </View>
                    </View>
                    <Text style={{color:'#FFFFFF', fontSize:40, fontWeight:'bold', marginTop:8, paddingHorizontal:40, elevation:10}}>
                        Laundry for Everyone
                    </Text>
                    <Image style={styles.imgStyle} source={require('../assets/images/login-bg.png')} />

                </ScrollView>
                <View style={styles.bottomView}>
                    <TouchableOpacity style={styles.getStarted} activeOpacity={0.8} onPress={() => this.props.navigation.push('Login')}>
                        <Text style={styles.getStartedText}>Get started</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0083FF',
    },
    bottomView: {
        marginHorizontal: 40,
        marginBottom: 30,
        zIndex: 1,
    },
    getStarted: {
        backgroundColor: '#FFFFFF',
        width: "100%",
        borderRadius: 30,
        paddingVertical: 15,
        elevation:5
    },
    getStartedText: {
        color: '#0076FF',
        fontSize: 18,
        textAlignVertical: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    logoText: {
        fontSize: 24,
        color: '#FFFFFF',
        lineHeight: 26,
    },
    imgStyle : { 
        width: "90%", 
        resizeMode: "cover", 
        height: 'auto', 
        marginTop: 10, 
        aspectRatio: 828 / 950,
    }
})