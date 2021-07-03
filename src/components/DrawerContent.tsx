import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MenuItem } from '../data';

export class DrawerContent extends React.Component<{
    navigation?: any,
    state?: any
}> {

    state = {
        username : '',
        phone :''
    }
    
    componentDidUpdate(){
        
    }
    
    render() {
        const { navigation, state } = this.props;
        
        return (
            <View
                style={styles.container}
            >
                <View style={{  flexDirection:'row', padding:40,}}>
                    <View style={{ flexDirection:'column', justifyContent:'center'}}>
                        <TouchableOpacity style={{ alignSelf:'flex-end'}} onPress={()=> navigation.closeDrawer()} >
                            <Icon name="close" size={32} color="#FFFFFF" style={{textAlign:'right'}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection:'column', marginLeft:20}}>
                        <Text style={{color:'#FFFFFF', fontSize:20, fontWeight:'bold'}} >Greenway Laundry</Text>
                    </View>
                </View>
                <ScrollView style={{paddingHorizontal:40}}>
                    {
                        MenuItem.map((item, index)=>{
                            return(
                                <View key={index} style={[styles.menuItem]}>
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate(item.route);
                                    }}
                                    >
                                        <View style={styles.menuInner}>
                                            <Icon name={item.icon} size={28} color="#FFFFFF" ></Icon>
                                            <Text style={styles.menuLabel}>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View style={{padding:40}}>
                    <TouchableOpacity style={{flexDirection:'row', marginBottom:30}}>
                        <Text style={{fontSize:20, marginEnd:20, fontWeight:'bold', color:'#FFFFFF'}}>Logout</Text>
                        <Icon name="arrow-right" size={28} color="#FFFFFF" />
                    </TouchableOpacity>
                    <Text style={{color:'#FFFFFF', fontSize:14}}>Version 1.0.0</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#0076FF',
        flexDirection:'column'
    },
    menuItem : {
        // paddingHorizontal : 20,
        paddingVertical:8,
        paddingBottom:12,
        borderLeftWidth:4,
        marginVertical:5,
        borderColor:'transparent',
        borderBottomWidth:0.3,
        borderBottomColor:'#F4F4F8'
    },
    menuItemSelected:{
        borderColor: '#567DF4'
    },
    menuInner : {
        flexDirection : "row",
        paddingEnd : 5
    },
    menuLabel : {
        textAlignVertical:'center', 
        marginStart:20, 
        fontSize:24, 
        color:'#FFFFFF'
    },
    menuSelectedLabel : {
        fontWeight:'bold'
    },
});
