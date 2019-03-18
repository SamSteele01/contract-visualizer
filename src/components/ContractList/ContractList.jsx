import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SingleContract from '../SingleContract/SingleContract';
// import { contractData } from '../../zeppelinContractData';


export default class ContractList extends Component {

  static propTypes = {
    contractData: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      contracts: null,
    };
  }

  // componentDidMount() {
  //   // get contracts array
  //   this.setState({ contracts: getContractArray() })
  // }

  // map over list of contracts
  generateSingleContractCards() {
    return this.props.contractData.map((object) => {
      return (
        <SingleContract
          key={object.name}
          title={object.name}
          // abi={object.abi}
          imports={object.imports}
        />
      )
    })
  }

  render() {
    return (
      <div className='contract-list'>
        {/* ContractList ! */}
        {this.generateSingleContractCards()}
      </div>
    );
  }

}
