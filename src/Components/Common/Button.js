import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class MaterialButton extends React.Component {
    
  constructor(){
    super();
    this.state={
      viewport: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      },
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this._resize_mixin_callback);
  }
  
  _resize_mixin_callback = () => {
    this.setState({
      viewport: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    });
  }
  
  componentWillUnmount(){
    window.removeEventListener('resize', this._resize_mixin_callback);
  }


  render(){
  const {height,width} = this.state.viewport
  const { classes } = this.props;
    const btnPos = width<480 ? {} : {position: 'relative',top: 25}
    return(
      <>
        <Button variant="contained" style={btnPos} onClick={()=>this.props.onClick()} color="primary" className={classes.button}>
            {this.props.text}
        </Button>
      </>
    )
  }

}
MaterialButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  
export default withStyles(styles)(MaterialButton);