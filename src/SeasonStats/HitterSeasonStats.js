import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import numeral from 'numeral';

class HitterSeasonStats extends Component {

  state = { players: this.props.players, stats : this.props.stats }

  render() {

    const tableCellStyle = { paddingLeft: '12px', paddingRight: '28px' };
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={tableCellStyle}>Player</TableCell>
            <TableCell numeric style={tableCellStyle}>G</TableCell>
            <TableCell numeric style={tableCellStyle}>AB</TableCell>
            <TableCell numeric style={tableCellStyle}>H</TableCell>
            <TableCell numeric style={tableCellStyle}>1B</TableCell>
            <TableCell numeric style={tableCellStyle}>2B</TableCell>
            <TableCell numeric style={tableCellStyle}>3B</TableCell>
            <TableCell numeric style={tableCellStyle}>HR</TableCell>
            <TableCell numeric style={tableCellStyle}>RBI</TableCell>
            <TableCell numeric style={tableCellStyle}>K</TableCell>
            <TableCell numeric style={tableCellStyle}>BB</TableCell>
            <TableCell numeric style={tableCellStyle}>AVG</TableCell>
            <TableCell numeric style={tableCellStyle}>OBP</TableCell>
            <TableCell numeric style={tableCellStyle}>SLG</TableCell>
            <TableCell numeric style={tableCellStyle}>OPS</TableCell>
            <TableCell numeric style={tableCellStyle}>WAR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.stats.map(statLine => {
            var player = this.state.players.find(p => p.id === statLine.playerId);
            return (
              <TableRow key={player.id}>
                <TableCell style={tableCellStyle}>
                  {player.firstName} {player.lastName}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {statLine.g}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {statLine.ab}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {statLine.h}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {statLine.single}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {statLine.doubles}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {statLine.triple}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {statLine.hr}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {statLine.rbi}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {statLine.k}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {statLine.bb}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {numeral(statLine.avg).format('.000')}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {numeral(statLine.obp).format('.000')}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {numeral(statLine.slg).format('.000')}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {numeral(statLine.ops).format('.000')}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {statLine.war}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    );
  }

}

export default HitterSeasonStats;