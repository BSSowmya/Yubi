import React from "react";



class Counter extends React.Component{

constructor(){
    console.log("I'm inside Constructor");
super()
    this.state ={
        count:0

    }
;

}

increament=()=>{
this.setState({
    count :this.state.count +1
}
)

}

decreament=()=>{
    this.setState({
        count :this.state.count -1
    }
    )
    
    }

   componentDidMount=()=>{
    console.log("I'm inside componentDidMount");
    this.setState({
        count :50
    })
   }
   componentDidUpdate =()=>{
    console.log("I'm inside componentDidUpdate");

}
componentWillUnmount = ()=>{
    console.log("I'm inside componentWillUnmount");

}

render(){
    console.log("I'm inside render");
return(
<>
<div className="count">
<p>{this.state.count}</p>
<button onClick={this.increament}>+</button>
<button onClick={this.decreament}>-</button>
</div>
</>


)

}

}


export default Counter;