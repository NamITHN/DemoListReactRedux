import React,{Component} from 'react'
import {View,TextInput,TouchableOpacity
    ,StyleSheet,Text} from 'react-native'
    import {connect} from 'react-redux'

class FormInsert extends Component{
    constructor(props){
        super(props)
        this.state={
            en:'',
            vn:'',
        }
this.onAdd=this.onAdd.bind(this);
    }
    onAdd(){
        const{en,vn}=this.state;
        this.props.dispatch({type:"ADD_WORD",en,vn})
        this.props.dispatch({type:'isAdding'})
    }
    render(){
        return(
        <View>
            <TextInput
            value={this.state.en}
            onChangeText={(text)=>this.setState({en:text})}></TextInput>
            <TextInput
                value={this.state.vn}
                onChangeText={(text)=>this.setState({vn:text})}
            ></TextInput>
            <TouchableOpacity
            style={{justifyContent:'center',alignItems:'center'}}
            onPress={()=>{this.onAdd()}}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
        );
    }
}
export default connect()(FormInsert)