import React, {Fragment, useRef, useState, useContext, useEffect} from 'react';
import DataItem from './DataItem';

const GraphControlsForm = () => {
  const state = 0;
  return (<div>
    <div className='controls-wrapper'>
      <div className='number-input-container'>
        <h3 className='text text-h3 text-700'>Data</h3>
        <div className='input-wrapper'>
          <input type="number" placeholder=''/>
        </div>
      </div>
      <div className='data-list-container'>
        <p className='text text-500'>List of values</p> 
        <Fragment>{
            state &&
            state.map((item,i)=>(<DataItem key={i} data = {item} />))
          }
          </Fragment>
      </div>
    </div>
  </div>)
}

export default GraphControlsForm;
