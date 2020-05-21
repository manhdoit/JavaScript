class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hinh: 1
        }
        this.changeImage = this.changeImage.bind(this);
    }
    changeImage(){
        this.setState({
            hinh: (this.state.hinh % 4)+1
        });
    }
    render () {
        return(
            <div>
                <h1>Donny Nguyen</h1>
            <img src={"images/"+this.state.hinh+ ".jpg"}/>
            </div>
            
        )
        
    } 
    componentDidMount(){
        setInterval(this.changeImage, 1000);
    }
}

ReactDOM.render(
    <div>
        <Image/>
    </div>,
    document.getElementById("root")
)
