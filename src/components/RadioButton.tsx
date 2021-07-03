import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class RadioButton extends Component<{
    PROP: Array<any>
}> {
    state = {
        value: null,
    };

    render() {
        const { PROP } = this.props;
        const { value } = this.state;

        return (
            <View>
                {PROP.map((res: any, index:number) => {
                    return (
                        <TouchableOpacity key={res.key} style={styles.container}
                            activeOpacity={0.8}
                            onPress={() => {
                                this.setState({
                                    value: res.key,
                                });
                            }}>
                            <View style={{flexDirection:'column', marginEnd:15}}>
                                <View
                                    style={styles.radioCircle}
                                    >
                                    {value === res.key && <View style={styles.selectedRb} />}
                                </View>
                            </View>
                            
                            <Text style={[styles.radioText, (index!= PROP.length-1)? styles.textBorderBottom:null]}>{res.text}</Text>
                            {
                                (res.icon)? (
                                    <View style={{flexDirection: 'column', paddingEnd:15}}>
                                        <Icon name={res.icon} size={28} color='#0083FF' style={{}} />
                                    </View>
                                ) : null
                            }
                        </TouchableOpacity>
                    );
                })}
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // alignItems: 'center',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        flex: 1,
        
    },
    radioText: {
        // marginLeft: 15,
        fontSize: 17,
        color: '#000',
        textAlign: 'left',
        // flex: 2,
        flexDirection: 'column',
        alignSelf:'flex-start',
        width:'80%'

    },
    textBorderBottom:{
        borderBottomWidth:0.5, 
        borderBottomColor:'#b3b3b3',
        paddingBottom:15,
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#0083FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: '#0083FF',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});