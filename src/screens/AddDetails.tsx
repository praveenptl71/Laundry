import { DrawerNavigationProp } from "@react-navigation/drawer";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ProductListCard } from './../components/ProductListCard'
import { ProductItems } from '../data';


export class AddDetailsScreen extends Component<{
    navigation: DrawerNavigationProp<any>
}>{
    state = {
        productItems: ProductItems
    }

    updateQuantity(event: number, index: number) {
        let temp = this.state.productItems;
        temp[index].quantity = (event == 2) ? ++temp[index].quantity : (temp[index].quantity > 0) ? --temp[index].quantity : temp[index].quantity;
        this.setState({ productItems: temp })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ flex: 1, padding: 20, marginBottom: 5 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <TouchableOpacity activeOpacity={0.8} style={{ width: 32 }} onPress={() => this.props.navigation?.goBack()} >
                                <Icon name="chevron-left" color='#000000' size={36} style={{ textAlign: 'center' }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{flex:1, flexDirection:'column', textAlign:'center', fontSize:20, fontWeight:'bold', textAlignVertical:'center'}}>Add Details</Text>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <TouchableOpacity activeOpacity={0.8} style={{ width: 32, alignSelf: 'flex-end' }}>
                                <Icon name="magnify" color='#000000' size={30} style={{ textAlign: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 5, marginTop: 20, marginBottom:30 }}>

                        {
                            this.state.productItems.map((item, index) => {
                                return (
                                    <ProductListCard onQuantityChange={(e) => this.updateQuantity(e, index)} navigation={this.props.navigation} items={item} key={index} />
                                )
                            })
                        }
                        
                    </View>

                </ScrollView>
                <TouchableOpacity 
                    activeOpacity={0.6} style={{ backgroundColor: '#0083FF', marginHorizontal:30, marginBottom:20, borderRadius:30, padding:16 }}
                    onPress={() => this.props.navigation?.navigate('Cart')}
                    >
                    <Text style={{ color: '#FFFFFF', textAlign:'center', fontWeight:'bold', fontSize:18 }}>Add to cart</Text>
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