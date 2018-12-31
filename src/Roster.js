import React, { Component } from 'react';
import PlayerCard from './PlayerCards/PlayerCard';

class Roster extends Component {

    state = { players: this.props.players };

    render() {
        return (
            <div className="roster-container">
                {this.state.players.map(player => {
                    return (
                        <PlayerCard player={player} 
                                    showPlayerProfile={this.props.showPlayerProfile} 
                                    key={player.id}>
                        </PlayerCard>
                    );                  
                })}
            </div>
        );
    }
}

export default Roster