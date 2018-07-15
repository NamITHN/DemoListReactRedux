import {combineReducers} from 'redux'
import addingReducer from './addingReducer'
import filterStatusReducer from './filterStatusReducer'
import  arrWorkReducer from './arrWorkReducer';
const reducer=combineReducers({
    arrWords:arrWorkReducer,
    isAdding:addingReducer,
    filterStatus:filterStatusReducer,
  })
  export default reducer;