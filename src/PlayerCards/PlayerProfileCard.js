import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class PlayerProfileCard extends Component {

    state = { player: this.props.player }

    render() {
        const imagePath = `${process.env.PUBLIC_URL}/images/${this.state.player.firstName}_${this.state.player.lastName}.jpg`
        return (        
            <Card className="card" key={this.state.player.id}>
                <div className="player-image-container">
                    <img className="player-image" src={imagePath} />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {this.state.player.firstName} {this.state.player.lastName}
                    </Typography>
                    <Typography component="p">
                        {this.state.player.position}
                    </Typography>
                    <Typography component="p">
                        B/T: {this.state.player.bat}/{this.state.player.throwHand}
                    </Typography>
                    <Typography component="p">
                        {this.state.player.height}/{this.state.player.weight}
                    </Typography>
                    <Typography>
                        Age: {this.state.player.age}
                    </Typography>
                </CardContent>
            </Card>
        );  
    }
}

export default PlayerProfileCard;