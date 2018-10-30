class Visiblity extends React.Component{
    constructor(props){
        super(props);
        this.rend=this.rend.bind(this);
        this.state={
            visible:false
        }
    }
    rend(){
        this.setState((prevState)=>{
            return{
                visible:!(prevState.visible)
            }
        })
        console.log("done");
    }
    render(){
        return (
            <div>
            <h1>Visiblity toggle</h1>
            <button onClick={this.rend}>{
                this.state.visible ? 'Hide details' : 'show details'
                }</button>
                {this.state.visible ? <p>this is a toggling app</p>: ''}
            </div>
        );
    }
}
const appRoot= document.getElementById('app');
ReactDOM.render(<Visiblity/>,appRoot)


// let visible= false;
// const rend=()=>{
//      visible=!visible
//     render();
// };

// const appRoot= document.getElementById('app');

// const render=()=>{
//     let template= (
//         <div>
//         <h1>Visiblity toggle</h1>
//         <button onClick={rend}>{
//         visible ? 'Hide details' : 'show details'
//         }</button>
//         {visible ? <p>this is a toggling app</p>: ''}
//         {visible ? <h1>Hello saty</h1>: <h1>hello bawa</h1>}
//         </div>
//     );
//     ReactDOM.render(template,appRoot)
// };

// render();
