import React, {Fragment, useRef, useState, useContext, useEffect} from 'react';
import DataItem from './DataItem';
import GlobalContext from '../../context/global/globalContext';
//temporary hardcoded datapoints
const DummyData = [
  {
    id:0,
    dataPoint: 1,
    timeStamp: 40
  },
  {
    id: 1,
    dataPoint: 3,
    timeStamp: 45
  },
  {
    id: 2,
    dataPoint: -2,
    timeStamp: 50
  },
];

const GraphControlsForm = () => {
  const globalContext = useContext(GlobalContext);
  const {data, addDataPoint, getDataFromStorage} = globalContext;

  useEffect(() => {
    getDataFromStorage(JSON.stringify(DummyData));
    //eslint-disable-next-line
  },[]);//empty brackets = at the beginning

  const numRef = useRef(0);

  const onClick = (e) => {
    e.preventDefault();
    //item = {id, dataPoint, timeStamp}
    addDataPoint({id: data[data.length-1].id+1, dataPoint: numRef.current.value, timeStamp: new Date().getMinutes()});
  }

  return (<div className='controls-container'>
    <div className='controls-wrapper flex-column'>
      <div  className='number-input-container flex-column'>
        <h3 className='text text-h3 text-700'>Data</h3>
        <div className='input-wrapper'>
          <input ref={numRef} type="number" placeholder='enter new datapoint'/>
        </div>
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
