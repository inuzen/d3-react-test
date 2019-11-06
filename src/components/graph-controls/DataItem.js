import React, {useContext} from 'react';
import PropTypes from 'prop-types';

const DataItem = ({data}) => {
  const {timeStamp, dataPoint} = data;
  return (<div className='item-container'>
    <span className='text'>{timeStamp}</span>
    <span className='text fw-800'>{dataPoint}</span>
    <button className='button button-remove'>Remove</button>
  </div>)
}

DataItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default DataItem;
