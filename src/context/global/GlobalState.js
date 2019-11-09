import React, {useReducer} from 'react';
import GlobalContext from './globalContext';
import globalReducer from './globalReducer';


const GlobalState = (props) => {
  const initialState = {data: []};

  const [state, dispatch] = useReducer(globalReducer, initialState);

  //ACTIONS:
  //get datapoints from local storage if present
  const getDataFromStorage = (data) =>{
    //data = whole data array
  dispatch({type: "GET_DATA", payload: JSON.parse(data)});
  }

  //add new dataPoint
  const addDataPoint = (item) => {
    //item = {id, dataPoint, timeStamp}
    dispatch({type: 'ADD_ITEM', payload: item});
  }

  //delete dataPoint
  const deleteDataPoint = (id) => {
    dispatch({type: 'DELETE_ITEM', payload: id});
  }


  return (<GlobalContext.Provider value={{
    data: state.data,
    getDataFromStorage, addDataPoint, deleteDataPoint
  }}>
    {props.children}
  </GlobalContext.Provider>)
}

export default GlobalState;
