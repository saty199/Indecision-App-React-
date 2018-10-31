class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        this.state={
            options:props.options 
        }
    }
    handleDeleteOptions(){
        this.setState(()=>({options:[]}))
    }
    handleDeleteOption(optionPart){
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>optionPart!=option)})
        )
    }
    handlePick(){
            const random= Math.floor(Math.random()* this.state.options.length);
            const element= this.state.options[random];
            console.log(random);
            alert(element);
    }
    handleAddOption(option){
        if(!option){
            return 'Enter some valid value';
        }else if(this.state.options.indexOf(option)>-1){
            return 'Typed value is already exist';
        }
        this.setState((prevState)=>({options:prevState.options.concat(option)}))
        // console.log(options);
    }
    componentDidMount(){
        console.log('componentDidMount');
        try{
            const json= localStorage.getItem('options');
            const options= JSON.parse(json);
            if(options){
                this.setState(()=> ({options}))
            }
        }catch(e){

        } 
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!==this.state.options.length){
            const json=JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
            console.log('componentDidUpdate!');            
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount!');
    }
    render(){
        const title= 'heello';
        const name= 'this is coming from header components';    
        return (
            <div>
            <Header title={title} name={name} />
            <Action handlePick={this.handlePick} />
            <Options 
            options={this.state.options}
            handleDeleteOption={this.handleDeleteOption}
            handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
} 

const Header=(props)=>{
    return(
        <div>
        <h1>{props.title}</h1>
        {props.name && <h2>{props.name}</h2>}
        <h1>this is an header </h1>
        </div>
    ); 
}

Header.defaultProps={
    title:'Indecision App!',
    name:'satyam agrawal'
}

// class Header extends React.Component{
//     render(){
//         console.log(this.props);
//         return(
//             <div>
//             <h1>{this.props.id}</h1>
//             <h1>{this.props.name}</h1>
//             <h1>this is an header </h1>
//             </div>
//         ) 
//     }
// }

const Action=(props)=>{
    return (
        <div>
        <button disabled={props.hasOption} 
        onClick={props.handlePick}
        >What should i do</button>
        </div>
    )
}

// class Action extends React.Component{
//     // hit(){
//     //     alert('hello');
//     //     console.log(`this is ${React.Component}`)
//     // }
//     render(){
//         return (
//             <div>
//             <button disabled={this.props.hasOption} onClick={this.props.handlePick}>What should i do</button>
//             </div>
//         )
//     }
// }

const Options=(props)=>{
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>remove all</button>
        {props.options.length===0 && <p>Please add an option to get started</p>}
        {
            props.options.map((option)=> (
            <Option
             key={option}
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
              />
              ))
        }
        </div>  
    );
}

const Option=(props)=>{
    return (
        <div>
        {props.optionText}   <button
         onClick={(e)=>{
         props.handleDeleteOption(props.optionText);
         }}
         >remove</button>
        </div>
            )
}
// class Options extends React.Component{
//     // constructor(props){
//     //     super(props);
//     //     this.rend=this.rend.bind(this);
//     // }
//     // rend(){
//     //     console.log(this.props.options);
//     // }
//     render(){
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>remove all</button>
//             <p>{this.props.id}</p>
//             {
//             this.props.options.map((option)=> <Option key={option} optionText={option}/>)
//             }
//             </div>  
//         );
//     }
// }

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option= e.target.elements.option.value.trim();
       const error =this.props.handleAddOption(option);
       this.setState(()=>({ error}))
       if(!error){
           e.target.elements.option.value='';
       }
    }
    render(){       
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>                                
            <input type="text" name="option" />
            <button>submit</button>
            </form>
            </div>
        )
    }
}

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//             <p>{this.props.optionText}</p>  
//             </div>
//                 )
//     }
// }

const User= (props)=>{
   return(
       <div>
       <p>Name : {props.Name}</p>
       <p>Age : {props.age} </p>
       </div>
   )
}


ReactDOM.render(<IndecisionApp options={[2,3,4,5,0,6]}/>,document.getElementById('app'));
