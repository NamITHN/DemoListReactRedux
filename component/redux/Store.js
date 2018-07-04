

import{createStore} from 'redux'
//state
const defaultState = {arrWords:[
    { id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: false },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false },
    { id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false },
    { id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
    { id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false },
    { id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false },
    { id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false },
    { id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false },
    { id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false },
    { id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false }
  ],
  filterStatus:'SHOW_ALL',
  isAdding:false
  };
  //reducer
  const reducer=(state=defaultState,action)=>{
    switch(action.type){
      case 'FILTER_SHOWALL':
      return {...state,filterStatus:'SHOW_ALL'}
      break;
      case 'FILTER_MEMORIED':
      return {...state,filterStatus:'MEMORIED'}
      break;
      case 'FILTER_NEED_PRACTIVE':
      return {...state,filterStatus:'NEED_PRACTIVE'}
      break;
      case'MEMORIED':
      return {...state,arrWords:state.arrWords.map(e=>{
        if(e.id !== action.id) return e;
        else return {...e,memorized:!e.memorized};
      })}
        break;
        case'isAdding':
        return {...state,isAdding:!state.isAdding}
        break;
        case 'ADD_WORD':
        return {
        ...state,
        arrWords:state.arrWords.concat(
            {id:state.arrWords.length+1,en:action.en,
        vn:action.vn, memorized: true, isShow: false}).reverse()
        }
        break;
        case "SHOW":
        return {
        ...state,
        arrWords:state.arrWords.map(e=>{
            if(e.id!=action.id) return e;
            else return{ ...e,isShow:!e.isShow}
        })
        }
        default:
        break;
        }
        return state;
  }
  
  const AddingReducer=(state=false,action)=>{
      if(action.type==='isAdding')return !state;
      return state;
  }
  const ShowReducer=(state="SHOW_ALL",action)=>{
    if(action.type==='FILTER_SHOWALL') return 'SHOWALL';
    return state;
}
  //store
  const store =createStore(reducer)
  export default store;