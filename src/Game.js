import React, {Component} from 'react';
import Results from './Results';
import Coin from './Coin';
import './Game.css';


class Game extends Component{
    constructor(props){
        super(props);
        this.state = {coin: 'head', flips: 0, head: 0, tail:0};
        this.handleFlip = this.handleFlip.bind(this);
    }

    // increamentScore(curState){
    //     let idx = Math.floor(Math.random() * this.props.maxNum) + 1;
    //     return { nums: [...curState.nums, idx] };
    // }

    // increament(currentState){
    //     let coin = Math.floor(Math.random * 1);
    //     this.currentState.coin = 'tale';
    //     // if(coin===1? this.setState(currentState.coin);)
        
    // }

    handleFlip(){
        let myCoin = Math.floor(Math.random() * 2);
        console.log(myCoin);
        if(myCoin===0? this.setState({coin: 'head', flips: this.state.flips+1, head: this.state.head+1}) : this.setState({coin: 'tail', flips: this.state.flips+1, tail: this.state.tail+1}));
        

    }
    render(){
        return(
            <div className="Game">
                 <h1>Let's flip a coin</h1>
                <Coin coin={this.state.coin}/>
                <button onClick={this.handleFlip}>Flip Me!</button>
                <Results flips={this.state.flips} head={this.state.head} tail={this.state.tail}/>
            </div>
        )
    }
}
export default Game;