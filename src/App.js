import React, { Component } from 'react';
import  axios  from 'axios';
import './App.css';
import AppToolbar from './AppToolbar';
import HomeSplash from './HomeSplash';
import Roster from './Roster';
import SeasonStats from './SeasonStats/SeasonStats';
import PlayerProfile from './PlayerProfile';

class App extends Component {

  state = {contents: <HomeSplash></HomeSplash> }

  changeTab(tab) {
    switch(tab.options.label) {
      case "Home":
        this.setState({contents: <HomeSplash></HomeSplash>});
        break;
      case "Roster":
        this.showRoster();
        break;
      case "Season Stats":
        this.showSeasonStats();
        break;
      default:
        break;
    }
  }

  showRoster = () => {
    axios
    .get(`${process.env.REACT_APP_RANGERS_STATS_API}/player/all`)
    .then(res => this.setState({contents: <Roster players={res.data} showPlayerProfile={this.showPlayerProfile}></Roster>}));
  }

  showSeasonStats = () => {
    var playersReq = `${process.env.REACT_APP_RANGERS_STATS_API}/player/all`;
    var hitterStatsReq = `${process.env.REACT_APP_RANGERS_STATS_API}/hitter-season-stats/all`;
    var pitcherStatsReq = `${process.env.REACT_APP_RANGERS_STATS_API}/pitcher-season-stats/all`;
    axios.all([axios.get(playersReq),
              axios.get(hitterStatsReq),
              axios.get(pitcherStatsReq)])
        .then(axios.spread((playerResp, hitterStatsResp, pitcherStatsResp) => {
          this.setState({
            contents:
              <SeasonStats players={playerResp.data} 
                           hitterStats={hitterStatsResp.data} 
                           pitcherStats={pitcherStatsResp.data}>
              </SeasonStats>
          });
        }));
  }

  showPlayerProfile = (player) => {
    var gameRecordType = player.position === 'P' ? 'pitcher-game-record' : 'hitter-game-record'

    axios
      .get(`${process.env.REACT_APP_RANGERS_STATS_API}/${gameRecordType}/${player.id}`)
      .then(res => 
        this.setState({ 
          contents:
            <PlayerProfile player={player} 
                           gameRecords={res.data}
                           showRoster={this.showRoster}>
            </PlayerProfile>
        }));
  }

  render() {
    return (
      <div className="App">
        <AppToolbar onTabChange={tab => this.changeTab(tab)}></AppToolbar>
        {this.state.contents}
      </div>
    );
  }
}

export default App;
