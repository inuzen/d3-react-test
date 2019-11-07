import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../context/global/globalContext';

const DataItem = ({data}) => {
  const globalContext = useContext(GlobalContext);
  const {deleteDataPoint} = globalContext;
  const {id, timeStamp, dataPoint} = data;

  const onDelete = e => {
    e.preventDefault();

    deleteDataPoint(id);
  }

  return (<div className='item-container flex-row'>
    <span className='text'>{timeStamp}</span>
    <span className='text text-800'>{dataPoint}</span>
    <button onClick={onDelete} className='button button-remove'>Remove</button>
  </div>)
}

DataItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default DataItem;
