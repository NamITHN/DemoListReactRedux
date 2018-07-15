import React ,{Component} from 'react'
import {View,FlatList,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Word from './Word'
import {filterMemoried,filterNeedPractive,filterShowAll} from '../component/redux/actionCreator'
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
           this.props.filterShowAll();
        }} >
			<Text style={this.getTextStyle("SHOW_ALL")}>SHOWALL</Text>
		</TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            this.props.filterMemoried();
        }} >
			<Text style={this.getTextStyle("MEMORIED")}>MEMORIED</Text>
		</TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            this.props.filterNeedPractive();
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
  export default connect(mapStateToProp,{filterMemoried,filterNeedPractive,filterShowAll})(Filter);

  const styles=StyleSheet.create({
      button:{
          
      }
  })