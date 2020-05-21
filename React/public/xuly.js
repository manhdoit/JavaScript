function getName(name){
    alert(name);
}


class DonnyNguyen extends React.Component {
    
    layThongTin(arg){
        alert(arg);
    }
    constructor(props){
        super(props);
        this.state = {
            tongHocVien: this.props.tongHocVien
        };
        this.addStudent = this.addStudent.bind(this);
    }
    addStudent(){
        this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;
        
        this.setState(
            this.state
        );
    }
    render(){
        return( 
        <div>
            <h1 className="red">{this.props.ten} - {this.props.giangvien}</h1>
            <div>So Hoc Vien: {this.state.tongHocVien}</div>
            <h4>{this.props.children}</h4>  
            <button onClick={() => this.layThongTin(this.props.children)}>Thong Tin</button>
            <button onClick={()=>{
                getName(this.props.giangvien)
            }}>
                Thong Tin1
            </button>
            <button onClick={this.addStudent}>Them Hoc vien</button>
            <KhoaHoc />
        </div>
        
        );
    }
};

class KhoaHoc extends React.Component {
    render (){
        return(
        <h3>Lap trinh ReactJS</h3>
        )  
    }
}

class InputTag extends React.Component{
    show(){
        var text = this.refs.txt.value;
        alert(text);
    }

    showSelect(){
        var val = this.refs.select.value;
        alert(val);
    }
    constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.showSelect = this.showSelect.bind(this);
    }
    render (){
        return (
            <div>
                <input type="text" ref="txt"/>
                <button onClick={this.show}>Hien thi</button>
                <div>
                    <select ref="select">
                        <option value="option 1">option 1</option>
                        <option value="option 2">option 2</option>
                        <option value="option 3">option 3</option>
                    </select>
                    <button onClick={this.showSelect}>Hien thi 2</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <InputTag/>
        <DonnyNguyen ten="ReactJS" giangvien="Donny" tongHocVien="10">Mon Hoc React</DonnyNguyen>
        <DonnyNguyen ten="NodeJS" giangvien="Nguyen" tongHocVien="20">Mon Hoc NodeJS</DonnyNguyen>

    </div>,
    document.getElementById("root"));