export default (state, action) =>{
  switch(action.type){
    case 'GET_DATA':
    return {
      ...state,
      data: action.payload
    }
    case 'ADD_ITEM':
    return {
      ...state,
      data: [...state.data, action.payload],
    }
    case 'DELETE_ITEM':
    return {
      ...state,
      data: state.data.filter(item=> item.id !== action.payload),
    }
    default:
    return state;

  }
}
