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
      loading: false
    }
    case 'DELETE_ITEM':
    return {
      ...state,
      contacts: state.contacts.filter(item=> item.id !== action.payload),
    }
    default:
    return state;

  }
}
