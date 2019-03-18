import React, { Component } from 'react';
import EdgeBundle from './EdgeBundle';
import ToggleButton from '../Buttons/ToggleButton';
import VerticalSlider from './VerticalSlider';

export default class EBpanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggleButton: false,
    };
  }

  setToggleButtonValue = (event) => {
    console.log('SETTOGGLEBUTTONVALUE');
    this.setState({ toggleButton: !this.state.toggleButton })
  }

  render() {
    return (
      <div className='container-edge-bundle'>
        {/* <div>
          <ToggleButton
            text='Initializable'
            returnValue={this.setToggleButtonValue}
          />
          <VerticalSlider
          />
        </div> */}
        <EdgeBundle
          toggleBool={this.state.toggleButton}
        />
        {/* <VerticalSlider /> */}
      </div>
    );
  }

}
