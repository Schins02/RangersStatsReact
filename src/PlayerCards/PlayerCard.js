import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class PlayerCard extends Component {

    state = { player: this.props.player }

    handleClick(e) {
        this.props.showPlayerProfile(this.state.player);
    }

    render() {
        const imagePath = `${process.env.PUBLIC_URL}/images/${this.state.player.firstName}_${this.state.player.lastName}.jpg`
        return (        
            <Card className="card" key={this.state.player.id} onClick={(e) => this.handleClick(e)}>
                <CardActionArea>
                    <div className="player-image-container">
                        <img className="player-image" src={imagePath} alt="player"/>
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
                </CardActionArea>
            </Card>
        );  
    }
}

export default PlayerCard;