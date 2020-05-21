class Album extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: 1
        }
        this.nextImg = this.nextImg.bind(this);
        this.prevImg = this.prevImg.bind(this);
    }
    nextImg(){
        this.state.image = this.state.image == 4?4 : this.state.image + 1;
        this.setState(
            this.state
        );
    }
    prevImg(){
        this.state.image = this.state.image == 1 ? 1 : this.state.image - 1;
        this.setState(
            this.state
        )
    }
    render(){
        return (
            <div>
            <h1>album</h1>
            <div className="slide">
                <img src={"images/" + this.state.image + ".jpg"}/>
                <button onClick={this.prevImg}>prev</button>
                <button onClick={this.nextImg}>next</button>
            </div>
            </div>
            
        )
    }
}

ReactDOM.render (
<div>
<Album />
</div>
,
    document.getElementById('root'));