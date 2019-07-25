import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';



const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#00BCD4',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    backgroundColor: '#EEEEEE',
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
    },
  },
  tableconf:{
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,  }
});

class TableUsers extends Component {
  constructor(props){
    super(props);
    this.getData();
    this.state={
      data:[]
    }

   }

   getData(){
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    axios.get(apiBaseUrl+'allUsers/')
    .then(function (response) {
    if(response.status == 200){
    console.log('daaa', response.data.usuario)
     self.setState({data:response.data.usuario});
     console.log('state', self.state)
    }else{
    alert("No data");
    }
    })
    .catch(function (error) {
    console.log(error);
    alert("No data 2");
    });
   }




render () {
  console.log('staterender', this.state)
  return (
    <Paper style={styles.tableconf} >
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableCell>User Name</CustomTableCell>
            <CustomTableCell >Name</CustomTableCell>
            <CustomTableCell >Last Name</CustomTableCell>
            <CustomTableCell >Email</CustomTableCell>
            <CustomTableCell >Status</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.data.map(n => {
            return (
              <TableRow key={Math.random()}>
                <CustomTableCell component="th" scope="row">
                  {n.nombre_usuario}
                </CustomTableCell>
                <CustomTableCell >{n.nombre}</CustomTableCell>
                <CustomTableCell >{n.apellido}</CustomTableCell>
                <CustomTableCell >{n.email}</CustomTableCell>
                <CustomTableCell >{n.estatus}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}



}


export default TableUsers;