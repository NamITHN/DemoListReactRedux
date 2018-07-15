

const addingReducer = (state = false, action) =>  {
    if (action.type === 'isAdding')return ! state; 
    return state; 
}
export default addingReducer;