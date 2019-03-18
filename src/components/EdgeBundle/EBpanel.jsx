import React, { Component } from 'react';
import EdgeBundle from './EdgeBundle';
import ToggleButton from '../Buttons/ToggleButton';
import Slider from '@material-ui/lab/Slider';

import VerticalSlider from './VerticalSlider';

export default class EBpanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggleButton: false,
      curveBeta: 0.4,
      clusterSize: 2
    };
  }

  componentDidMount() {
    this.setMedia();
    window.addEventListener('resize', this.setMedia);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setMedia);
  }

  setMedia() {
    this.setState({ windowWidth: window.innerWidth });
  }

  setToggleButtonValue = (event) => {
    console.log('SETTOGGLEBUTTONVALUE');
    this.setState({ toggleButton: !this.state.toggleButton })
  }

  handleChange = (event, value) => {
    event.preventDefault();
    if(this.state[event.target.id] !== undefined){
      this.setState({ [event.target.id]: value });
    }
    console.log('EVENT.TARGET.ID', event.target.id);
    console.log('VALUE', value);
  };

  render() {
    const { toggleButton, curveBeta, clusterSize } = this.state;

    return (
      <div className='edge-bundle-panel'>

        {/* desktop width */}
        {/* <div>
          <ToggleButton
            text='Initializable'
            returnValue={this.setToggleButtonValue}
          />
          <VerticalSlider
          />
        </div>
        <EdgeBundle
          toggleBool={this.state.toggleButton}
        />
        <VerticalSlider /> */}

        <EdgeBundle
          toggleBool={toggleButton}
          curveBeta={curveBeta}
          clusterSize={clusterSize}
        />
        <ToggleButton
          text='Initializable'
          returnValue={this.setToggleButtonValue}
        />
        <div style={{ width: 500 }}>

          <Slider
            // classes={{ container: classes.slider }}
            style={{ padding: '22px 20px', color: '#294279' }}
            id='curveBeta'
            value={curveBeta}
            min={0.1}
            max={2.5}
            step={0.1}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ width: 800 }}>
          <Slider
            // classes={{ container: classes.slider }}
            style={{ padding: '22px 20px', color: 'black' }}
            id='clusterSize'
            value={clusterSize}
            min={2}
            max={30}
            step={1}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }

}
