import React from 'react';
import PropTypes from 'prop-types';
import GraphField from './components/GraphFiled';
import GraphControls from './components/graph-controls/GraphControls';

//TODO: add pseudo elements for wrapper

const App = () => {

  return (
    <div className='app-container'>
      <span className='expand expand-left'></span>
      <div className='app-wrapper'>
        <GraphField/>
        <GraphControls/>
      </div>
      <span className='expand expand-right'></span>
      </div>
  )
}

App.propTypes = {

};

export default App;
