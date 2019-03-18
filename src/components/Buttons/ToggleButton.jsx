import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
// import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
// import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
// import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
// import FormatBoldIcon from '@material-ui/icons/FormatBold';
// import FormatItalicIcon from '@material-ui/icons/FormatItalic';
// import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
// import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const styles = theme => ({
  toggleContainer: {
    height: 56,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: `${theme.spacing.unit}px 0`,
    background: theme.palette.background.default,
  },
});

class ToggleButtons extends React.Component {

  static propTypes = {
    text: PropTypes.string,
    returnValue: PropTypes.func.isRequired,
  };

  state = {
    toggle: false,
  };

  handleFormat = (event, formats) => this.setState({ formats });

  handletoggle = (event, toggle) => {
    console.log('HANDLETOGGLE');
    this.props.returnValue(event);
    this.setState({ toggle: toggle });
  }

  render() {
    const { classes, text } = this.props;
    const { toggle } = this.state;

    return (
      // <Grid container spacing={16}>
        // <Grid item xs={12} sm={6}>
          <div className={classes.toggleContainer}>
            <ToggleButtonGroup value={toggle} exclusive onChange={this.handletoggle}>

              <ToggleButton value="center">
                {text}
              </ToggleButton>

            </ToggleButtonGroup>
          </div>

        // </Grid>

      // </Grid>
    );
  }
}

ToggleButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToggleButtons);
