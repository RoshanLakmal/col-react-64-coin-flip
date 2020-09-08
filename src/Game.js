import React, {Component} from 'react';
// import Results from './Results';
import Coin from './Coin';
import './Game.css';
import {choice} from './helpers';


class Game extends Component{
    static defaultProps = {
        coins: [
            {side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"}, 
            {side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails:0
        }
        

        // this.state = {coin: 'head', flips: 0, head: 0, tail:0};
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
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
           return{
               currCoin: newCoin,
               nFlips: st.nFlips + 1,
               nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
               nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
           }
        });
        /* Long way */
        // this.setState(st => {
        //     let newState = {
        //         ...st, 
        //         currCoin: newCoin,
        //         nFlips: st.nFlips + 1
        //     };
        //     if(newCoin.side === "heads"){
        //         newState.nHeads += 1;
        //     }else{
        //         newState.nTails += 1;
        //     }
        //     return newState;
        // });
    }

    handleFlip(){
        this.flipCoin();
        // let myCoin = Math.floor(Math.random() * 2);
        // console.log(myCoin);
        // if(myCoin===0? this.setState({coin: 'head', flips: this.state.flips+1, head: this.state.head+1}) : this.setState({coin: 'tail', flips: this.state.flips+1, tail: this.state.tail+1}));
    }
    render(){
        return(
            <div className="Game">
                 <h1>Let's flip a coin</h1>
                 {this.state.currCoin && <Coin info={this.state.currCoin} />}
                 {/* {this.state.currCoin && <Coin coin={this.state.currCoin.side} imgSrc={this.state.currCoin.imgSrc}/>} */}
                {/* <Coin coin={this.state.coin}/> */}
                <button onClick={this.handleFlip}>Flip Me!</button>
                <p> Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
                {/* <Results flips={this.state.flips} head={this.state.head} tail={this.state.tail}/> */}
            </div>
        )
    }
}
export default Game;