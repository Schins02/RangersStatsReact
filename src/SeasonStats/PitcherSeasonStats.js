import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class PitcherSeasonStats extends Component {

  constructor(props) {
    super(props);
    this.state = { players: props.players, stats : props.stats }
  }

  render() {

    const tableCellStyle = { paddingLeft: '12px', paddingRight: '28px' };
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={tableCellStyle}>Player</TableCell>
            <TableCell numeric style={tableCellStyle}>G</TableCell>
            <TableCell numeric style={tableCellStyle}>W</TableCell>
            <TableCell numeric style={tableCellStyle}>L</TableCell>
            <TableCell numeric style={tableCellStyle}>SV</TableCell>
            <TableCell numeric style={tableCellStyle}>IP</TableCell>
            <TableCell numeric style={tableCellStyle}>WHIP</TableCell>
            <TableCell numeric style={tableCellStyle}>K/9</TableCell>
            <TableCell numeric style={tableCellStyle}>K</TableCell>
            <TableCell numeric style={tableCellStyle}>BB/9</TableCell>
            <TableCell numeric style={tableCellStyle}>HR/9</TableCell>
            <TableCell numeric style={tableCellStyle}>BABIP</TableCell>
            <TableCell numeric style={tableCellStyle}>ERA</TableCell>
            <TableCell numeric style={tableCellStyle}>FIP</TableCell>
            <TableCell numeric style={tableCellStyle}>xFIP</TableCell>
            <TableCell numeric style={tableCellStyle}>WAR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.stats.map(statLine => {
            var player = this.state.players.find(p => p.id === statLine.playerId);
            return (
              <TableRow key={player.id}>
                <TableCell style={tableCellStyle}>{player.firstName} {player.lastName}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.g}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.w}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.l}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.sv}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.ip}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.whip}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.kperNine}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.k}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.bbPerNine}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.hrPerNine}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.babip}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.era}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.fip}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.xfip}</TableCell>
                <TableCell style={tableCellStyle}>{statLine.war}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    );
  }

}

export default PitcherSeasonStats;