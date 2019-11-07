import React, {useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import GlobalState from './context/global/GlobalState';
import GraphField from './components/GraphFiled';
import GraphControls from './components/graph-controls/GraphControls';
//TODO: add pseudo elements for wrapper


const App = () => {

  return (
    <GlobalState>
    <div className='app-container'>
      <span className='expand expand-left'></span>
      <div className='app-wrapper flex-row'>
        <GraphField/>
        <GraphControls/>
      </div>
      <span className='expand expand-right'></span>
      </div>
    </GlobalState>
  )
}

App.propTypes = {

};

export default App;
