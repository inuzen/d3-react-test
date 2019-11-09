import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../context/global/globalContext';

const leadingZero = (num) => `0${num}`.slice(-2);

const formatTime = (date) =>
  [date.getHours(), date.getMinutes(), date.getSeconds()]
  .map(leadingZero)
  .join(':');

const DataItem = ({data}) => {
  const globalContext = useContext(GlobalContext);
  const {deleteDataPoint} = globalContext;
  const {id, timeStamp, dataPoint} = data;
  const dateObj = new Date(timeStamp);
  const time = formatTime(dateObj)+":"+dateObj.getMilliseconds();
  const onDelete = e => {
    e.preventDefault();

    deleteDataPoint(id);
  }

  return (<div className='item-container flex-row'>
    <span className='text'>{time}</span>
    <span className='text text-700'>{dataPoint}</span>
    <button onClick={onDelete} className='button button-remove'>Remove</button>
  </div>)
}

DataItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default DataItem;
