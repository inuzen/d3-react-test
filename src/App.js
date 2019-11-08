import React, {useEffect, useContext, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import GlobalState from './context/global/GlobalState';
import GraphField from './components/GraphFiled';
import GraphControls from './components/graph-controls/GraphControls';
//TODO: add pseudo elements for wrapper


const App = () => {
  const [expandedRight, setExpandedRight] = useState(false);
  const [expandedLeft, setExpandedLeft] = useState(false);

  let appWrapperRef = useRef('');

  useEffect(() => {

    expandedLeft ?
      appWrapperRef.current.style.marginLeft = '0'
      : appWrapperRef.current.style.marginLeft = '20%';

    expandedRight ?
      appWrapperRef.current.style.marginRight = '0'
      : appWrapperRef.current.style.marginRight = '20%';

  },[expandedRight, expandedLeft])

  const onClick = (e) => {
    e.preventDefault();
    if(e.target.getAttribute('name')==='expand-left'){
      setExpandedLeft(!expandedLeft);    

    } else {
      setExpandedRight(!expandedRight);
    }
    e.target.classList.toggle('expand-right');

  }

  return (
    <GlobalState>
    <div className='app-container'>
      <div ref = {appWrapperRef} className='app-wrapper flex-row'>
        <span name='expand-left' onClick={onClick} className='expand position-left expand-left'></span>
        <GraphField/>
        <GraphControls/>
        <span name='expand-right' onClick={onClick} className='expand position-right expand-right'></span>
      </div>
      </div>
    </GlobalState>
  )
}

App.propTypes = {

};

export default App;
