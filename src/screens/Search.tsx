import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ScrollView } from "react-native";


export class SearchScreen extends Component<{
    navigation: StackNavigationHelpers
}>{

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{flex:1}}>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
})