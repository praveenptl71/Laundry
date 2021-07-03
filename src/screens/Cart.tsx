import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ProductListCard } from './../components/ProductListCard'
import { ProductItems } from "../data";
import { DrawerNavigationProp } from "@react-navigation/drawer";


export class CartScreen extends Component<{
    navigation: DrawerNavigationProp<any>
}>{

    render() {
        let cartItem = ProductItems;
        cartItem.length = 3;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ flex: 1, padding: 20, marginBottom: 5 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <TouchableOpacity activeOpacity={0.8} style={{ width: 32 }} onPress={() => this.props.navigation?.goBack()} >
                                <Icon name="chevron-left" color='#000000' size={36} style={{ textAlign: 'center' }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{flex:1, flexDirection:'column', textAlign:'center', fontSize:20, fontWeight:'bold', textAlignVertical:'center'}}>Cart</Text>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 5, marginTop: 20, marginBottom:30 }}>

                        {
                            cartItem.map((item, index) => {
                                return (
                                    <ProductListCard navigation={this.props.navigation} items={item} key={index} />
                                )
                            })
                        }
                        
                    </View>
                </ScrollView>
                <TouchableOpacity 
                    activeOpacity={0.6} style={{ backgroundColor: '#0083FF', marginHorizontal:30, marginBottom:20, borderRadius:30, padding:16 }}
                    onPress={() => this.props.navigation?.navigate('Delivery')}
                    >
                    <Text style={{ color: '#FFFFFF', textAlign:'center', fontWeight:'bold', fontSize:18 }}>Go to checkout</Text>
                </TouchableOpacity>
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