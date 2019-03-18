import React, { Component } from 'react';

import ContractList from './components/ContractList/ContractList';
import EBpanel from './components/EdgeBundle/EBpanel';
import contractData from './contractData';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" >
          ZeppelinOS Contract Visualizer
        </header>
        {/* circle Hierarchical Edge Bundling */}
        <EBpanel />
        {/* accordian list */}
        <ContractList
          contractData={contractData}
        />

      </div>
    );
  }
}

export default App;
