import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity,
    ToastAndroid,
    Alert
} from 'react-native';
import   {Actions} from 'react-native-router-flux'

export default class TabView extends Component<{}> {

    componentDidMount() {

    }

    render() {
        let num=this.props.testSum;
        return (
            <View style={styles.contain}>
                <TouchableOpacity onPress={()=>Actions.popTo('Test2')}>
                    <Text >HOME1</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={()=>Actions.drawerOpen()}>
                   <Text style={{marginTop:30}}>Open Drawer</Text>
                 </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        justifyContent:'center'
    },

});