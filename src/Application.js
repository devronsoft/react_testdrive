import React, {Component} from 'react';
import HighScore from './HighScore';
import './css/style.css';

class Application extends Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            overTen: false
        }
    }

    componentWillMount(props, state){

    }

    componentDidMount(props, state){
        console.log("Mounted with", props, state);
    }

    componentWillReceiveProps(props){
        // State change, re-rendering
    }

    componentWillUpdate(props, state){
        // Properties and state that it will update to
    }

    componentDidUpdate(props, state){ // Called everytime the state changes
        console.log("updated from", state, "to", this.state);

        if(this.state.count > 10 && this.state.count !== state.count && !this.state.overTen){ // If state count has changed and overten is false
            this.setState({overTen: true});
        }
    }


     handleClick = () => {
         
          this.setState({count: this.state.count + 1});
    }


    resetCount = () => {
        this.setState({count: 0});
        this.setState({overTen: false});
    }


    render()
    {
        // if var can be used outside of function
        // if const can be changed

        let {count} = this.state;

        return ( //brackets if returning HTML. Only one top level element - so use Div as a wrapper.
            <div>
                <h1>You clicked the button {count} times.</h1>              
                            
                  <HighScore
                    overTen={this.state.overTen}                 
                  />
                                          
                <span>
                    <button onClick={() => this.handleClick()} >Click Here</button>
                    <button onClick={() => this.resetCount()}>Reset</button>
                </span>
            </div>

        ); // e in brackets would pass event else empty brackets
        
    }

}

export default Application;