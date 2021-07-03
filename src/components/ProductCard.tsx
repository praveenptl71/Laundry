import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IService } from "../interface";


export type Props = {
    items: IService,
    navigation: DrawerNavigationProp<any>
}

export class ProductCard extends Component<Props>{

    state = {
        
    }

    getColor = (colour: string, value: number = 1.5) => {
        const opacity = Math.floor(0.1 * value * 255).toString(16);
        return colour + opacity;
    };

    render() {
        const { items } = this.props;

        return (
            <View style={{ width: '50%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('AddDetails')}
                    activeOpacity={0.9}
                    style={[styles.card]}>
                    <View >
                        <Image resizeMode='contain' style={{width:65, height:65, alignSelf:'center'}} source={items.image} />
                        <Text style={[styles.cardTitle]}>{items.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        borderRadius: 30,
        padding: 16,
        marginVertical: 8,
        backgroundColor:'#FFFFFF',
        paddingVertical:24,
        elevation:1
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
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 10,
        
    },
    cardSubTitle: {
        color: '#000',
        fontSize: 12,
        textAlign: 'left'
    },
})