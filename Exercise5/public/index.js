class Note extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.src}/>
                <span>{this.props.children}</span>
            </div>
        
        )
    }
}

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mang: [
                {srcImg: "images/1.jpg", noidung: "Nhim Con"},
                {srcImg: "images/2.jpg", noidung: "Moon Con"},
                {srcImg: "images/3.jpg", noidung: "Hong Xinh"},
                {srcImg: "images/4.jpg", noidung: "Donny"}
            ]
        }
        this.add = this.add.bind(this);
    }
    add(){
        this.state.mang.unshift({
            srcImg: "images/4.jpg", noidung: "Happy Family"
        });
        this.setState(this.state);
    }
    render(){
        return(
            <div>
                <button onClick = {this.add}> ADD </button>
                {
                    this.state.mang.map(
                        function(note, index){
                            return <Note key={index} src={note.srcImg}>{note.noidung}</Note>
                        }
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <List/>

    
    </div>
    ,
    document.getElementById("root")
);