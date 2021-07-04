import React, { Component } from "react";
import { Image, ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    modalVisible : boolean;
    onRequestClose : any
}

export class OrderPlaced extends Component<Props>{

    render() {
        return (
            <Modal 
                presentationStyle='overFullScreen'
                animationType="slide"
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                    this.props.onRequestClose();
                }}
            >
                <View style={styles.centeredView}>
                    <View style={{height:400,width:'80%', backgroundColor:'#FFFFFF',borderRadius:30}}>
                        <Image
                            style={ styles.image}
                            source={require('../assets/images/order-placed.png')}
                        />
                        <Text style={{color:'#181725', fontSize:20, textAlign:'center', marginHorizontal:20, marginVertical:20}}>Your Order has been accepted</Text>

                        <View style={{paddingHorizontal:10, justifyContent:'flex-end', marginBottom:10}}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.cartBtn}>
                                <Text style={styles.cartBtnText}>Track Order</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={[styles.cartBtn,{backgroundColor:'transparent', marginTop:5}]}
                                onPress={() => this.props.onRequestClose()}>
                                <Text style={[styles.cartBtnText,{color:'#181725'}]}>Back to home</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent:'center',
        backgroundColor:'#00000099',
        alignItems:'center'
        
    },
    image: {
        width:'50%',
        height:undefined,
        aspectRatio:1,
        // textAlign:'center',
        alignSelf:'center',
        marginTop:50,
        alignItems:'center',
        
    },
    cartBtn: {
        width:"100%",
        backgroundColor:'#0083FF',
        borderRadius:18,
        // marginTop:20,
        // height:60
        padding:10,
        flexDirection:'column'
    },
    cartBtnText: {
        color:'#FFF9FF',
        fontSize:18,
        textAlignVertical:'center',
        textAlign:'center',
        justifyContent:'center',
        // flex:1
    }
});