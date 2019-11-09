import React, {Fragment, useRef, useContext, useEffect} from 'react';
import DataItem from './DataItem';
import GlobalContext from '../../context/global/globalContext';


const GraphControlsForm = () => {
  const globalContext = useContext(GlobalContext);
  const {data, addDataPoint, getDataFromStorage} = globalContext;

  useEffect(() => {
    let initData = localStorage.getItem('data');
    if(initData){
      getDataFromStorage(initData);
    }
    //eslint-disable-next-line
  },[]);

  const numRef = useRef(0);
  const enterListener = (e) =>{
    if(e.keyCode===13){
      e.preventDefault();
      addDP();
    }
  }
  const onClick = (e) => {
    e.preventDefault();
    addDP();
  }

  const addDP = () => {
    let curValue = numRef.current.value;
    if(curValue && !isNaN(curValue)){
      //item = {id, dataPoint, timeStamp}
    addDataPoint({id: data.length>0? data[data.length-1].id+1 : 0, dataPoint: Number(curValue), timeStamp: new Date()});
  }
    numRef.current.value="";
  }

  return (<div className='controls-container'>
    <div className='controls-wrapper flex-column'>
      <div  className='number-input-container flex-column'>
        <h3 className='text text-h3 text-700'>Data</h3>
        <input ref={numRef} onKeyDown={enterListener} className='controls-input' type="number" placeholder='enter new datapoint'/>
        <button onClick={onClick} className='button button-add'>Add</button>
      </div>
      <div className='data-list-container flex-column'>
        <p className='text text-500'>List of values</p>
        <Fragment>{
            data &&
            data.map((item)=>(<DataItem key={item.id} data = {item} />))
          }
          </Fragment>
      </div>
    </div>
  </div>)
}

export default GraphControlsForm;
