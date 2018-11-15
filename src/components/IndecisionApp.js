import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';



export default class IndecisionApp extends React.Component{
    state={
        options:[]
    }
    // constructor(props){
    //     super(props);
    //     this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    //     this.handlePick=this.handlePick.bind(this);
    //     this.handleAddOption=this.handleAddOption.bind(this);
    //     this.handleDeleteOption=this.handleDeleteOption.bind(this);
    //     this.state={
    //         options:props.options 
    //     }
    // }
    handleDeleteOptions=()=>{
        this.setState(()=>({options:[]}))
    };
    handleDeleteOption=(optionPart)=>{
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>optionPart!=option)})
        )
    };
    handlePick=()=>{
            const random= Math.floor(Math.random()* this.state.options.length);
            const element= this.state.options[random];
            console.log(random);
            alert(element);
    };
    handleAddOption=(option)=>{
        if(!option){
            return 'Enter some valid value';
        }else if(this.state.options.indexOf(option)>-1){
            return 'Typed value is already exist';
        }
        this.setState((prevState)=>({options:prevState.options.concat(option)}))
        // console.log(options);
    };
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