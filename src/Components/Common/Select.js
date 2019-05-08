import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'inline-block',
  },
  formControl: {
    margin: theme.spacing.unit,
    maxWidth: 300,
    width:280
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  

//   componentDidMount() {
//     this.setState({
//       labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
//     });
//   }

  

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">{this.props.label}</InputLabel>
          <Select
            value={this.props.value}
            onChange={(e)=>{this.props.onChange(e)}}
            inputProps={{
              name: this.props.name,
              id: 'age-simple',
            }}
          >
            
            {this.props.data.map(item=> {
              return this.props.isForce ?  <MenuItem value={item.id} >{item.name}</MenuItem> : <MenuItem value={item.url} >{item.name}</MenuItem>
            })}
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};
SimpleSelect.defaultProps = {
  isForce: false,
  isCategory: false,
}

export default withStyles(styles)(SimpleSelect);
