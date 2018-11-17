import React from 'react';


const Header=(props)=>(
    <div className='header'>
    <div className='container'>
    <h1 className="header__title">{props.title}</h1>
    {props.name && <h2 className="header__subtitle">{props.name}</h2>}
    </div>
    </div>
)

Header.defaultProps={
    title:'Indecision App!',
    name:'satyam agrawal'
}


export default Header;