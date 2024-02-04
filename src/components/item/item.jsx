import React, {Component} from "react";
import './item.css'

export default class Item extends Component{

state ={
    done: false,
    important: false
}
labelClick =()=>{
    this.setState(({done})=>{
        return{
            done: !done
        }
    })
}
markImportant = () => {
    this.setState(({ important }) => {
        return {
            important: !important
        };
    });
};

render() {
    const { label, deleted } = this.props;
    const {done, important} = this.state

    let classNames = 'todo-list-item'
    if (done){
        classNames += 'done'
    }
    if (important){
        classNames +='important'
    }

    return (
        <span className={classNames}>
            <span className="todo-list-item-label" onClick={this.labelClick}>{label}</span>

            <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={this.markImportant}>
                <i className="fa fa-exclamation"/>
            </button>

            <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={deleted}>
                <span>-</span> 
            </button>
        </span>
    );
}}