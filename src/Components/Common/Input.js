import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});
class OutlinedTextFields extends React.Component {
    
    render() {
        const { classes,onChange,value,label } = this.props;
        
        return (
            <form className={classes.container} noValidate autoComplete="off">
            <TextField
            id="outlined-name"
            label={label}
            className={classes.textField}
            value={value}
            onChange={(e)=>onChange(e)}
            margin="normal"
            variant="outlined"
            />
            </form>
            )
        }
    }
    
    OutlinedTextFields.propTypes = {
        classes: PropTypes.object.isRequired,
    };
    
    export default withStyles(styles)(OutlinedTextFields);