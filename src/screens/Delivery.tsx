import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import RadioButton from "../components/RadioButton";


export class DeliveryScreen extends Component<{
    navigation: StackNavigationHelpers
}>{
    // Delivery
    render() {
        const pickupMethod = [
            {
                key: 'door_pickup',
                text: 'Door Pickup',
            },
            {
                key: 'office_drop',
                text: 'Office Drop of',
            }
        ];
        const devivaryMethod = [
            {
                key: 'door_delivery',
                text: 'Door Delivery',
            },
            {
                key: 'pick_up',
                text: 'Pick Up',
            }
        ];

        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: 'row', padding:20 }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <TouchableOpacity activeOpacity={0.8} style={{ width: 32 }} onPress={() => this.props.navigation?.goBack()} >
                            <Icon name="chevron-left" color='#000000' size={36} style={{ textAlign: 'center' }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ flex: 3, flexDirection: 'column', textAlign: 'center', fontSize: 20, fontWeight: 'bold', textAlignVertical: 'center' }}>Delivery & Pickup</Text>
                    <View style={{ flex: 1, flexDirection: 'column' }}>

                    </View>
                </View>
                <ScrollView style={{ flex: 1, padding: 20, marginBottom: 5 }}>

                    {/* <Text style={{ color: '#000000', fontSize: 34, fontWeight: 'bold', margin: 20 }} >Pick Up</Text> */}
                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20 }}>
                        <Text style={{ flex: 1, flexDirection: 'column', fontSize: 17, fontWeight: 'bold' }}>Address details</Text>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <TouchableOpacity activeOpacity={0.6} style={{ alignSelf: 'flex-end' }}>
                                <Text style={{ color: '#4FCAE8', fontSize: 15 }}>change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ padding: 20 }}>
                        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 30, padding: 20, paddingHorizontal: 25, elevation: 1 }}>
                            <Text style={{ fontSize: 17, fontWeight: '500', borderBottomWidth: 0.5, paddingBottom: 3, marginBottom: 8, borderBottomColor: '#b3b3b3' }}>Praveen Patel</Text>
                            <Text style={{ fontSize: 15, borderBottomWidth: 0.5, paddingBottom: 3, marginBottom: 8, borderBottomColor: '#b3b3b3' }}>935-9940 Tortor. Street Santa Rosa South Dakota 98804</Text>
                            <Text>(684) 579-1879</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20 }}>
                        <Text style={{ flex: 1, flexDirection: 'column', fontSize: 17, fontWeight: 'bold' }}>Pickup Method</Text>
                    </View>

                    <View style={{ margin: 20, padding: 20, backgroundColor: '#FFFFFF', borderRadius: 30 }}>
                        <RadioButton PROP={pickupMethod} />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20 }}>
                        <Text style={{ flex: 1, flexDirection: 'column', fontSize: 17, fontWeight: 'bold' }}>Delivery Method</Text>
                    </View>
                    <View style={{ margin: 20, padding: 20, backgroundColor: '#FFFFFF', borderRadius: 30, marginBottom: 30 }}>
                        <RadioButton PROP={devivaryMethod} />
                    </View>

                </ScrollView>
                <TouchableOpacity
                    activeOpacity={0.6} style={{ backgroundColor: '#0083FF', marginHorizontal: 30, marginBottom: 20, borderRadius: 30, paddingVertical: 16 }}
                    onPress={() => this.props.navigation?.navigate('Payment')}
                >
                    <Text style={{ color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>Proceed to payment of &#8377;100</Text>
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