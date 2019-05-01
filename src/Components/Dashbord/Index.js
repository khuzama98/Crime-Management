import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
    contain:{
        padding: theme.spacing.unit * 2,
    }
})

const Dashboard = (props) => {
    const {classes} = props;
    return(
        <Grid container className={classes.contain} >
        <Grid item  >
        <Typography variant='display1' >DASHBOARD</Typography>
        </Grid>
        </Grid>
    )
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(style)(Dashboard)