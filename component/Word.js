import React ,{Component} from 'react'
import {View,Button,Text,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
 class Word extends Component{

    memorizedWord(){
        this.props.dispatch({
            type:'MEMORIED',
            id:this.props.myWord.id
        })
    }
    showWord(){
        this.props.dispatch(
            {
                type:"SHOW",
                id:this.props.myWord.id
            }
        )
    }
    
	render(){
       
        const{en,vn,memorized,isShow}=this.props.myWord;
        const textDecorationLine=memorized?'line-through':'none';
        const memorizedButtonText=memorized?'Foget':'Memoried'
        const showVn=isShow?vn:"______"
		return (
		<View style={{backgroundColor:'white' ,margin:10,padding:10}}>
            <Text style={{textDecorationLine}}>{en}</Text>
            <Text>{showVn}</Text>
            <View style={{flexDirection:'row',
            justifyContent:'space-around'}}>
            <Button
            title={memorizedButtonText}
            onPress={()=>{this.memorizedWord()}}/>
         
            <Button
            title={'Show'}
            onPress={()=>{this.showWord()}}
            />
            </View>

        </View>
		);
	}
}

export default connect()(Word)