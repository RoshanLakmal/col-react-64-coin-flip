import React,{Component} from 'react';
import './Results.css';

class Results extends Component{
    render(){
        return(
            <div className="Results">
                Out of {this.props.flips} flips, there have been {this.props.head} heads and {this.props.tail} tails.
            </div>
        )
    }
}

export default Results;