import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import HitterSeasonStats from './HitterSeasonStats';
import PitcherSeasonStats from './PitcherSeasonStats';

class SeasonStats extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            players: props.players, 
            hitterStats: props.hitterStats, 
            pitcherStats: props.pitcherStats 
        }
    }

    render() {
        return (
            <div>
                <div className='season-stats-container'>
                    <Paper>
                        <HitterSeasonStats 
                          players={this.state.players} 
                          stats={this.state.hitterStats}>
                        </HitterSeasonStats>
                    </Paper>
                </div>
                <div className='season-stats-container'>
                    <Paper>
                        <PitcherSeasonStats
                           players={this.state.players} 
                           stats={this.state.pitcherStats}>
                        </PitcherSeasonStats>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default SeasonStats;