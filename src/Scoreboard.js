import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Player from './Player'

export default class Scoreboard extends Component {
    static defaultProps = {
        timestamp: new Date()
    };
    constructor(props) {
        super(props);
    };

    renderPlayerList = () => {
        return this.props.players.map(player => {
            const { key, id, name, score } = player
            return  (
                <Player
                    key={key}
                    id={id}
                    name={name}
                    score={score}
                    handleEndRound={this.props.endRound}
                    buttonText='End Round'
                />
            )
        });
    };
    
    render() {
        const { topScorer } = this.props;
        return (
            <div>
                <h2>Scoreboard</h2>
                {/* {console.log(this.props.topScorer)} */}
                {topScorer && Object.keys(topScorer).length !== 0 ? <h4>{`${topScorer.name} is in the lead with ${topScorer.score} points!`}</h4> : undefined}
                {this.renderPlayerList()}
                <Link to='/' onClick={this.props.endGame}>End Game</Link>
            </div>
        )
    };
};