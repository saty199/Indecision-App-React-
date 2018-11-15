import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';


ReactDOM.render(<IndecisionApp options={[2,3,4,5,0,6]}/>,document.getElementById('app'));

class OldSyntax {
    constructor(){
        this.name='mike';
        this.getGreeting=this.getGreeting.bind(this);
    }
    getGreeting(){
        return `Hi my name is ${this.name}`
    }
}
const oldSyntax= new OldSyntax();
const getGreeting= oldSyntax.getGreeting;
console.log(getGreeting());

//--------------

class NewSyntax{
    name= 'saty';
    getGreeting=()=>{
        return `Hi my name is ${this.name}`
    }
}
const newSyntax= new NewSyntax();
const newgetGreeting= newSyntax.getGreeting;
console.log(newgetGreeting());