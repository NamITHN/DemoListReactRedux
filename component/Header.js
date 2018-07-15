import React ,{Component} from 'react'
import {View,FlatList,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Word from './Word'
 class Header extends Component{
render(){
    return(
<View style={{flex:10,justifyContent:'space-between',alignItems:'center',backgroundColor:'gray',flexDirection:'row'}}>
		<Text></Text>
		<Text>My Word</Text>
		<TouchableOpacity 
		onPress={()=>{this.props.dispatch({type:"isAdding"})}}>
		<Text style={{marginRight:30}}>+</Text>
		</TouchableOpacity>
        </View>
    );
}


 }
 export default connect ()(Header);