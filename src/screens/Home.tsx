import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView, Text, View, ImageBackground, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProductCard } from '../components/ProductCard';
import { ServiceItems } from '../data';


export class HomeScreen extends Component<{
    navigation: DrawerNavigationProp<any>
}>{

    render() {
        
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ flex: 1, padding: 30 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <TouchableOpacity activeOpacity={0.8} style={{ width: 32 }} onPress={()=> this.props.navigation?.openDrawer()} >
                                <Image source={require('../assets/icons/menu.png')} resizeMode='cover' style={{width:24, height:28}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <TouchableOpacity activeOpacity={0.8} style={{ width: 32, alignSelf: 'flex-end' }}
                                onPress={() => this.props.navigation?.navigate('Cart')}>
                                <Icon name="cart-outline" color='#00000040' size={28} style={{ textAlign: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginVertical: 20 }}>
                        <Text style={{ fontSize: 34, fontWeight: 'bold', color: '#000000' }}>Welcome</Text>
                        <Text style={{ fontSize: 34, fontWeight: 'bold', color: '#0076FF', marginStart: 10 }}>Back</Text>
                    </View>
                    <View style={{ marginTop: 10, backgroundColor: '#FFFFFF', borderRadius: 30, paddingHorizontal: 20, paddingVertical: 28, elevation: 1 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000' }}>Subscribe to</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#0076FF', marginStart: 6 }}>Laundry+</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', marginStart: 6, }}>to get</Text>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', }}>monthly worth of laundry</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap", paddingHorizontal: 5, marginTop: 20 }}>

                        {
                            ServiceItems.map((item, index) => {
                                return (
                                    <ProductCard navigation={this.props.navigation} items={item} key={index} />
                                )
                            })
                        }
                        <View style={{ width: '50%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('AddDetails')}
                                activeOpacity={0.8}
                                style={[styles.card]}>
                                <ImageBackground resizeMode='cover' style={{ width: '100%', aspectRatio: 1, }} source={require('../assets/images/plus-bg.png')}>
                                    <View style={{margin:16, marginVertical:24}} >
                                        <Icon name="plus" size={65} color='#FFFFFF' style={{ textAlign: 'center', }} />
                                        <Text style={[styles.cardTitle]}>Laundry +</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    card: {
        width: '90%',
        borderRadius: 30,
        // padding: 16,
        marginVertical: 8,
        backgroundColor: 'transparent',
        // paddingVertical: 24,
        elevation: 2
    },
    cardTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 10,

    },
})