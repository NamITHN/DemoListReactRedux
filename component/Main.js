import React ,{Component} from 'react'
import {View,FlatList,Text,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import Word from './Word'
import Header from './Header'
import Filter from './Filter'
import FormInsert from './FormInsert'
 class Main extends Component{
	 getWordList(){
		 const{myFilter,myWord}=this.props;
		 if(myFilter==='MEMORIED') return myWord.filter(e=>e.memorized);
		 if(myFilter==='NEED_PRACTIVE') return myWord.filter(e=>!e.memorized);
		 return myWord;
	 }
	render(){
		return (
		<View style={{flex:100,backgroundColor:'yellow',alignSelf:'stretch',justifyContent:'center'}}>
		<Header/>
		{this.props.myIsAdd?<FormInsert/>:null}
		<View style={{flex:80}}>
		<FlatList
	data={this.getWordList()}
	renderItem={({item})=>
		<Word myWord={item}/>
	}
	keyExtractor={item=>item.id+""}
	/>
		</View>
	<View View style={{flex:10}}>
	<Filter/>
	</View>
        </View>
		);
	}
}

function mapStateToProp(state){
	return {
		myFilter:state.filterStatus,
		myWord:state.arrWords,
		myIsAdd:state.isAdding
	};
}
  export default connect(mapStateToProp)(Main);