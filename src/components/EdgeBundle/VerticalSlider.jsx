import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    // flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  slider: {
    padding: '0px 22px',
  },
};

class VerticalSlider extends React.Component {

  state = {
    value: 50,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          min={0}
          max={6}
          step={1}
          onChange={this.handleChange}
          vertical
        />
      </div>
    );
  }
}

VerticalSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VerticalSlider);
