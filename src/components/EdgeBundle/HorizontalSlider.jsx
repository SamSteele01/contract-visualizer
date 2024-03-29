import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
};

class HorizontalSlider extends React.Component {

  static propTypes = {

  }

  state = {
    value: 3,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, min, max, step, handleChange } = this.props;
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
        />
      </div>
    );
  }
}

HorizontalSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HorizontalSlider);
