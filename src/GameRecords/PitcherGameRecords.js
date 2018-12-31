import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

class PitcherGameRecords extends Component {

  state = { 
    gameRecords: this.props.gameRecords,
    page: 0,
    rowsPerPage: 25 
   }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const tableCellStyle = { paddingLeft: '18px', paddingRight: '42px' };

    return (
    <div>
      <Table>
        <TableHead>
            <TableRow>
            <TableCell style={tableCellStyle}>Date</TableCell>
            <TableCell numeric style={tableCellStyle}>W</TableCell>
            <TableCell numeric style={tableCellStyle}>L</TableCell>
            <TableCell numeric style={tableCellStyle}>IP</TableCell>
            <TableCell numeric style={tableCellStyle}>BF</TableCell>
            <TableCell numeric style={tableCellStyle}>ER</TableCell>
            <TableCell numeric style={tableCellStyle}>R</TableCell>
            <TableCell numeric style={tableCellStyle}>H</TableCell>
            <TableCell numeric style={tableCellStyle}>BB</TableCell>
            <TableCell numeric style={tableCellStyle}>K</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {this.state.gameRecords.slice(this.state.page * this.state.rowsPerPage,
            this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
            .map(gameRecord => {
            return (
            <TableRow key={gameRecord.id}>
                <TableCell style={tableCellStyle}>{gameRecord.gameDate}</TableCell>
                <TableCell style={tableCellStyle}>{gameRecord.w}</TableCell>
                <TableCell style={tableCellStyle}>{gameRecord.l}</TableCell>
                <TableCell style={tableCellStyle}>{gameRecord.ip}</TableCell>
                <TableCell style={tableCellStyle}>{gameRecord.bf}</TableCell>
                <TableCell style={tableCellStyle}>{gameRecord.er}</TableCell>
                <TableCell style={tableCellStyle}>{gameRecord.r}</TableCell>
                <TableCell style={tableCellStyle}>{gameRecord.h}</TableCell>
                <TableCell style={tableCellStyle}>{gameRecord.bb}</TableCell>
                <TableCell style={tableCellStyle}>{gameRecord.hr}</TableCell>
            </TableRow>
            );
            })}
        </TableBody>
      </Table>
      <TablePagination
            component="div"
            count={this.state.gameRecords.length}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
             backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
    </div>
    );
  }

}

export default PitcherGameRecords;