import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IProduct } from "../interface";


export type Props = {
    items: IProduct,
    navigation: DrawerNavigationProp<any>,
    onQuantityChange?: (e:any) => void;
}

export class ProductListCard extends Component<Props>{

    getColor = (colour: string, value: number = 2) => {
        const opacity = Math.floor(0.1 * value * 255).toString(16);
        return colour + opacity;
    };

    render() {
        const { items } = this.props;

        return (
            <View style={{ width: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 30, marginBottom: 20, elevation: 1, padding: 5 }}>
                <TouchableOpacity
                    // onPress={() => this.props.navigation.navigate('product-listing')}
                    activeOpacity={0.9}
                    style={[styles.card]}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center' }}>
                            <Image resizeMode='cover' source={items.image} style={{ alignSelf: 'flex-start', width: 48, height: 48, aspectRatio: 1 }} />
                        </View>
                        <TouchableOpacity style={{ flex: 6, flexDirection: 'column' }} activeOpacity={0.6}>
                            <Text style={[styles.cardTitle, { color: '#22215B' }]}>{items.title}</Text>
                            <Text style={[styles.cardSubTitle, { color: '#0083FF' }]}>&#8377;{items.price}</Text>
                        </TouchableOpacity>
                        <View style={{ flex: 3, flexDirection: 'column', justifyContent: 'center' }}>
                            <View style={{flex:1, flexDirection:'row'}}>
                                <TouchableOpacity style={{backgroundColor:'#EEEEEE', height:28, width:28, borderRadius:14, justifyContent:'center', alignSelf:'center', marginEnd:5}}
                                    onPress={() => (this.props.onQuantityChange) ? this.props.onQuantityChange(1) : null}>
                                    <Icon name="minus" color={'#22215B'} size={18} style={{ flex:1, flexDirection: 'column', textAlign: 'center', textAlignVertical: 'center' }} />
                                </TouchableOpacity>
                                <Text style={{flex:1,flexDirection:'column', textAlign:'center', textAlignVertical:'center', fontWeight:'bold', fontSize:16}}>{items.quantity}</Text>
                                <TouchableOpacity style={{backgroundColor:'#EEEEEE', height:28, width:28, borderRadius:14, justifyContent:'center', alignSelf:'center', marginStart:5}}
                                    onPress={() => (this.props.onQuantityChange) ? this.props.onQuantityChange(2) : null}>
                                    <Icon name="plus" color={'#22215B'} size={18} style={{ flex:1, flexDirection: 'column', textAlign: 'center', textAlignVertical: 'center' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5
        // marginVertical: 8,
    },
    cardImage: {
        width: 100,
        height: 100,
        marginVertical: 15,
        alignSelf: 'center',
        flexDirection: 'column'
    },
    cardTitle: {
        color: '#000',
        fontSize: 16,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 10,
    },
    cardSubTitle: {
        color: '#000',
        fontSize: 12,
        textAlign: 'left',
        marginBottom:10
    }
})