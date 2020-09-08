import React, {Component} from 'react';
import './Coin.css';

class Coin extends Component{
    render(){
        return(
        <div className='Coin'>{this.props.coin}</div>
        )
    }
}

export default Coin;