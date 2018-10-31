import React from 'react';


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


export default Header;