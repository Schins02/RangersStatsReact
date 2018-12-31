import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import ArrowBack from '@material-ui/icons/ArrowBack'
import Paper from '@material-ui/core/Paper'
import PlayerProfileCard from './PlayerCards/PlayerProfileCard';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PitcherGameRecords from './GameRecords/PitcherGameRecords';
import HitterGameRecords from './GameRecords/HitterGameRecords';

class PlayerProfile extends Component {

  state = { player : this.props.player, gameRecords: this.props.gameRecords }

  theme = createMuiTheme({
    palette: {
      primary: {
      main: '#0b215c',
      }
    },
  });

  showRoster(e) {
    this.props.showRoster();
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="player-profile-container">
        <MuiThemeProvider theme={this.theme}>
          <Fab color="primary" aria-label="Back" onClick={(e) => this.showRoster()}>
            <ArrowBack></ArrowBack>
          </Fab>
        </MuiThemeProvider>
        <div>
            <PlayerProfileCard player={this.state.player} key={this.state.player.id}></PlayerProfileCard>
        </div>
        
        
        {this.state.player.position === "P" && 
            <Paper className="pitcher-profile-paper">
                <PitcherGameRecords gameRecords={this.state.gameRecords}></PitcherGameRecords>
            </Paper>
        }
        {this.state.player.position != "P" &&
        <Paper className="hitter-profile-paper">
            <HitterGameRecords gameRecords={this.state.gameRecords}></HitterGameRecords>
        </Paper>
         }
        
      </div>
    );
  }

}

export default PlayerProfile