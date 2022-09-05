import React, {Component} from "react";

// class component

// these are the two ways to destruture props in the class components


class Welcome extends Component{
    render(){
        const{name, heroName}= this.props
        // const{state1, state2} = th.state
        return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}

export default Welcome