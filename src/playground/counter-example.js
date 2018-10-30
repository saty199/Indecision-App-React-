class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne=this.addOne.bind(this);
        this.minusOne=this.minusOne.bind(this);
        this.reset=this.reset.bind(this);
        this.state={
            count:props.count
        }
    }
    addOne(){
        this.setState((prevState)=>{
            return{
                count:prevState.count+1
            }
        });
       console.log("One is Added",this.state.count);
    }
    minusOne(){
        this.setState((prevState)=>{
            return{
                count:prevState.count-1
            }
        });
         console.log("One is subtracted");
     }
     reset(){
        this.setState(()=>{
            return{
                count:0
            }
        });
         console.log("Reset is called");
     }
    render(){
        return (
            <div>
            <h1>Count :{this.state.count}</h1>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps={
    count:23
}

ReactDOM.render(<Counter count={36} />, document.getElementById('app'));










// let count=0;
// const addOne=()=>{
//     count++;
//     console.log("Hello",count);
//     renderCount();
// }
// const minusOne=()=>{
//     count--;
//     console.log("minusOne");
//     renderCount();
// }
// const reset=()=>{
//     count=0;
//     console.log("reset");
//     renderCount();
// }

// const appRoot= document.getElementById('app');


// const renderCount=()=>{
//     const templateThree =(
//         <div>
//         <h1>count : {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//         </div>
    
//     );

//     ReactDOM.render(templateThree, appRoot);

// }
// renderCount();