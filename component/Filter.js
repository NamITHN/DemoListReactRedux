import React ,{Component} from 'react'
import {View,FlatList,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Word from './Word'
 class Filter extends Component{
     getTextStyle(statusName){
         const {myFilterStatus}=this.props
        if(statusName===myFilterStatus)
        return {color:'red'}
         }
     
     setFiltetStatus(actionType){
         this.props.dispatch({type:actionType})
     }
	render(){
		return (
        <View style={{flexDirection:'row',
        justifyContent:'space-around',alignItems:'center'}} >
        <TouchableOpacity onPress={()=>{
            this.setFiltetStatus("FILTER_SHOWALL")
        }} >
			<Text style={this.getTextStyle("SHOW_ALL")}>SHOWALL</Text>
		</TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            this.setFiltetStatus("FILTER_MEMORIED")
        }} >
			<Text style={this.getTextStyle("MEMORIED")}>MEMORIED</Text>
		</TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            this.setFiltetStatus("FILTER_NEED_PRACTIVE")
        }} >
			<Text style={this.getTextStyle("NEED_PRACTIVE")}>NEED PRACTIVE</Text>
		</TouchableOpacity>
        </View>
		);
	}
}

function mapStateToProp(state){
	return {
		myFilterStatus:state.filterStatus,
		
	};
}
  export default connect(mapStateToProp)(Filter);

  const styles=StyleSheet.create({
      button:{
          
      }
  })