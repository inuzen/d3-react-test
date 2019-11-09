import React, {useEffect, useState, useRef} from 'react';
import GlobalState from './context/global/GlobalState';
import GraphField from './components/GraphFiled';
import GraphControls from './components/graph-controls/GraphControls';
//TODO: add pseudo elements for wrapper


const App = () => {
  const [expandedRight, setExpandedRight] = useState(false);
  const [expandedLeft, setExpandedLeft] = useState(false);

  const leftPanelRef = useRef('');
  const rightPanelRef = useRef('');

  useEffect(() => {

    expandedLeft ?
      leftPanelRef.current.style.width = '0%'
      : leftPanelRef.current.style.width = '20%';

    expandedRight ?
      rightPanelRef.current.style.width = '0%'
      : rightPanelRef.current.style.width = '20%';

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
      <div ref={leftPanelRef} className='panel panel-left'>Panel 1</div>
      <div className='app-wrapper '>
        <span name='expand-left' onClick={onClick} className='expand position-left expand-left'></span>
        <div className='content-wrapper flex-row'>
        <GraphField/>
        <GraphControls/>
      </div>
        <span name='expand-right' onClick={onClick} className='expand position-right expand-right'></span>
      </div>
      <div ref={rightPanelRef} className='panel panel-right'>Panel 2</div>
      </div>
    </GlobalState>
  )
}

export default App;
