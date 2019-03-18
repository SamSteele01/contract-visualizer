import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ControlledExpansionPanels extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    imports: PropTypes.array,
  };

  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    let list = null;
    if (this.props.imports.length >= 1) {
      let listItems = this.props.imports.map((item) => {
        return (
          <li key={item}>{item}</li>
        )
      })
      list = (
        <ul>{listItems}</ul>
      )
    }

    return (
      <div className={classes.root}>

        <ExpansionPanel
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}
        >

          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{this.props.title}</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            {list}
          </ExpansionPanelDetails>

        </ExpansionPanel>

      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);
