import React from 'react'
import Heatmap from './components/Map'
import ConnectionSpeed from './components/ConnectionSpeed'

const App = () => {
  return (
    <div className='container'>
      <ConnectionSpeed/>
      <Heatmap/>
    </div>
  )
}

export default App