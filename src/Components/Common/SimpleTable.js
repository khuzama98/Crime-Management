import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    // minWidth: 700,
  },
});



function SimpleTable(props) {
  const { classes ,data } = props;
  console.log(data)
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
            </TableRow>
          ))} */}
          {
            data.map(item=>(
              <TableRow key={item.id} >
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.outcome_status.category}</TableCell>
                <TableCell>{item.outcome_status.date}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
