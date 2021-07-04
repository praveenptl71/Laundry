import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { OrderPlaced } from "../components/OrderPlaced";
import RadioButton from "../components/RadioButton";


export class PaymentScreen extends Component<{
    navigation: StackNavigationHelpers
}>{
    state= {
        presentActionSheet:false,
        placedOrder:false,
        failedOrder:false
    }

    openOrderPlaced = (state:boolean) => {
        this.setState({placedOrder:state})
    }

    render() {
        let paymentMethods = [
            {
                key: 'card',
                text: 'Credit/Debit Card',
                icon : 'credit-card-outline'
            },
            {
                key: 'bank',
                text: 'Net Banking',
                icon: 'bank-outline'
            },
            {
                key: 'cash',
                text: 'Cash on delivery',
                icon: 'cash-usd-outline'
            },
        ]
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <TouchableOpacity activeOpacity={0.8} style={{ width: 32 }} onPress={() => this.props.navigation?.goBack()} >
                            <Icon name="chevron-left" color='#000000' size={36} style={{ textAlign: 'center' }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ flex: 3, flexDirection: 'column', textAlign: 'center', fontSize: 20, fontWeight: 'bold', textAlignVertical: 'center' }}>Payment</Text>
                    <View style={{ flex: 1, flexDirection: 'column' }}>

                    </View>
                </View>
                <ScrollView style={{ flex: 1, padding: 20, marginBottom: 5 }}>
                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20 }}>
                        <Text style={{ flex: 1, flexDirection: 'column', fontSize: 17, fontWeight: 'bold' }}>Payment Method</Text>
                    </View>

                    <View style={{ margin: 20, padding: 20, backgroundColor: '#FFFFFF', borderRadius: 30 }}>
                        <RadioButton PROP={paymentMethods} />
                    </View>
                </ScrollView>
                <TouchableOpacity
                    activeOpacity={0.6} style={{ backgroundColor: '#0083FF', marginHorizontal: 30, marginBottom: 20, borderRadius: 30, paddingVertical: 16 }}
                    onPress={() => this.openOrderPlaced(true)}
                >
                    <Text style={{ color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>Complete order</Text>
                </TouchableOpacity>
                <OrderPlaced modalVisible={this.state.placedOrder} onRequestClose={()=> this.openOrderPlaced(false)} />
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