import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '../Common/SimpleTable'
import Select from '../Common/Select'
import Button from '../Common/Button'
import Loader from '../Common/Loader'
import {forces as forcesApi,categories as categoriesApi,crimes as crimeApi} from '../../config/api'

const style = theme => ({
    contain:{
        padding: theme.spacing.unit * 2,
    }
})

class Dashboard extends React.Component{

    constructor(){
        super();
        this.state={
            force:'',
            category:'',
            forcesData:[],
            categoriesData:[],
            crimeData:[],
            isSearch: false
        }
    }

    componentDidMount(){
        this.apiCalling()
    }

    apiCalling = async () => {
        try{
            const forcesData = await forcesApi();
            const categoriesData = await categoriesApi();
            this.setState({forcesData,categoriesData})
        }
        catch(e){
            console.log(e.message)
        }
    }

    handleClick = async () => {
        const {force,category} = this.state
        this.setState({isSearch:true})
        try{
            const crimeData = await crimeApi(force,category)
            this.setState({crimeData})
        }
        catch(e){
            console.log(e.message)
        }
        finally{
            this.setState({isSearch:false})
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    render(){
    const {classes} = this.props;
    return(
        <Grid container className={classes.contain} >
        <Grid item xs={12} >
        <Typography variant='display1' >DASHBOARD</Typography>
        </Grid>
        <Grid item xs={12} >
            <Select data={this.state.forcesData}
            onChange={this.handleChange}
            value={this.state.force}
            name='force'
            isForce={true}
            label='Select Force' />
            <Select data={this.state.categoriesData}
            onChange={this.handleChange}
            value={this.state.category}
            name='category'
            label='Select Category' />
            <Button onClick={this.handleClick} text='Search' />
        </Grid>
        <Grid item xs={12} >
            <Table data={this.state.crimeData} />
            {this.state.isSearch && <Loader />}
            {/* <p>No data Found</p> */}
        </Grid>
        </Grid>
    )
}

}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(style)(Dashboard)