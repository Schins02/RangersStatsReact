import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

class HitterGameRecords extends Component {

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
    const tableCellStyle = { paddingLeft: '12px', paddingRight: '28px' };

    return (
      <div>
     <Table>
        <TableHead>
          <TableRow>
            <TableCell style={tableCellStyle}>Date</TableCell>
            <TableCell numeric style={tableCellStyle}>AB</TableCell>
            <TableCell numeric style={tableCellStyle}>H</TableCell>
            <TableCell numeric style={tableCellStyle}>2B</TableCell>
            <TableCell numeric style={tableCellStyle}>3B</TableCell>
            <TableCell numeric style={tableCellStyle}>HR</TableCell>
            <TableCell numeric style={tableCellStyle}>RBI</TableCell>
            <TableCell numeric style={tableCellStyle}>K</TableCell>
            <TableCell numeric style={tableCellStyle}>BB</TableCell>
            <TableCell numeric style={tableCellStyle}>AVG</TableCell>
            <TableCell numeric style={tableCellStyle}>OBP</TableCell>
            <TableCell numeric style={tableCellStyle}>SLG</TableCell>
            <TableCell numeric style={tableCellStyle}>wRC+</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.gameRecords.slice(this.state.page * this.state.rowsPerPage,
            this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
            .map(gameRecord => {
              return (
                <TableRow key={gameRecord.id}>
                  <TableCell style={tableCellStyle}>{gameRecord.gameDate}</TableCell>
                  <TableCell style={tableCellStyle}>{gameRecord.ab}</TableCell>
                  <TableCell style={tableCellStyle}>{gameRecord.h}</TableCell>
                  <TableCell style={tableCellStyle}>{gameRecord.doubles}</TableCell>
                  <TableCell style={tableCellStyle}>{gameRecord.triple}</TableCell>
                  <TableCell style={tableCellStyle}>{gameRecord.hr}</TableCell>
                  <TableCell style={tableCellStyle}>{gameRecord.rbi}</TableCell>
                  <TableCell style={tableCellStyle}>{gameRecord.bb}</TableCell>
                  <TableCell style={tableCellStyle}>{gameRecord.k}</TableCell>
                  <TableCell style={tableCellStyle}>{gameRecord.avg}</TableCell>
                  <TableCell style={tableCellStyle}>{gameRecord.obp}</TableCell>
                  <TableCell style={tableCellStyle}>{gameRecord.slg}</TableCell>
                  <TableCell style={tableCellStyle}>{gameRecord.wrcPlus}</TableCell>
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

export default HitterGameRecords;