import React,{Component} from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '../Common/Input'
import {forces as api} from '../../config/api'

const style = theme => ({
    contain:{
        padding: theme.spacing.unit * 2,
    }
})

class Forces extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            searchData:[],
            toSearch:''
        }
    }

    componentDidMount(){
        this.callingApi()
    }

    callingApi = async () => {
        try{
            const data = await api();
            this.setState({data})
        }
        catch(e){
            console.log(e.message)
        }
    }

    search = (val) =>{
        const toSearch = val.target.value;
        const searchData = this.state.data.filter(item=>{
            return item.name.substring(0,toSearch.length).toLowerCase()===toSearch.toLowerCase()
        })
        this.setState({toSearch,searchData})
    }

    render(){
        const {classes} = this.props;
        const {data,toSearch,searchData} = this.state;
        const list = toSearch ? searchData : data
        return(
            <Grid container className={classes.contain} >
            <Grid item xs={12} >
            <Typography variant='display1' >FORCES</Typography>
            </Grid>
            <Grid item xs={12} >
                <Input onChange={this.search} value={toSearch} label='Search' />
            </Grid>
            <Grid item xs={12} >
                <ol>
                    {list.map(item=>{
                        return <li key={item.id} >{item.name}</li>
                    })}
                </ol>
            </Grid>
            </Grid>
        )
    }
}
Forces.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(style)(Forces)