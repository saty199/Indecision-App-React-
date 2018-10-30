console.log('App.js is running');

const app={
 title :'this is title',
 subTitle:'this is a subtitle',
 options: []
}
const submit =(e)=>{
    e.preventDefault();
    console.log("Form Submitted");
    const option=e.target.elements.option.value
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        console.log(app.options);
        render();
    }
};

const appRoot= document.getElementById('app');
const remove=()=>{
    app.options=[];
    render();
}
const number=[2,56,78,24];

const decision=()=>{
  const x= Math.floor(Math.random()* app.options.length);
  const y= app.options[x];
  console.log(y);
}
const render=()=>{

    let template= (
        <div>
            <p>{app.options.length>0 ? 'its is worked':'it is not worked'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length===0} onClick={decision}>what should i do</button>
            <button onClick={remove}>Remove All</button>
            {
                number.map((num)=>{
                    return <p key={num}>Number : {num}</p>
                })
            }
            <ol>
                { app.options.map((Element)=>{
                     return <li key={Element}>Element: {Element}</li>   
                }
                )}
            </ol>
            <form onSubmit={submit}>
                <input type="text" name="option"/>
                <button>Add options</button>
                </form>
        </div>
        );
        ReactDOM.render(template, appRoot);

}

render();


// var user={
//     name:'satt',
//     age:27,
//     location:'gurgaon'
// }
// const name= 'sattuu';
// const age= 26;
// const loc= 'gurugram';

// function getLocation(location){
//     if(location){
//         // return location;
//         return <p>Location :{location}</p>
//     }
// }
// let templateTwo= (
//    <div>
//        <h1>My name is {user.name ? user.name : 'anonymous'}</h1>
//        {/* <p>age is {age}</p> */}
//        {(user.age && user.age >=18) && <p>Age :{user.age}</p>}
//        {/* <p>location is {getLocation(user.location)}</p> */}
//        {getLocation(user.location)}
//        {<h2>hello penny</h2>}
//    </div>
// );





