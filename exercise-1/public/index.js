class Com extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            num: 0
        }
        this.addNum = this.addNum.bind(this);
    }
    addNum(){
        this.state.num = this.state.num + 1;
        this.setState(
            this.state
        )
    }
    render (){
        return (
        <button onClick = {this.addNum} >Hello {this.state.num} </button>
        )
    }
}


ReactDOM.render(
    <div>
        <h1>Vi du 1</h1>
        <Com/>

        <h1>Vi du 2</h1>
    </div>
    
    ,
    document.getElementById("root")
)
