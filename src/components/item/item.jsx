import React, {Component} from "react";
import './item.css'

export default class Item extends Component{

state ={
    done: false
}

labelClick =()=>{
    this.setState({
        done: true
    })
}

render() {
    const { label, important = false } = this.props;
    const {done} = this.state
    const style = {
        color: important ? 'red' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };
    let classNames = 'todo-list-item'
    if (done){
        classNames += 'done'
    }

    return (
        <span className={classNames}>
            <span className="todo-list-item-label" style={style} onClick={this.labelClick}>{label}</span>

            <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"/>
            </button>

            <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className='fa fa-trash'/>
            </button>
        </span>
    );
}}