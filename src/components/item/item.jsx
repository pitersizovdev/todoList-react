import React from "react";
import './item.css'

const Item =({label, important =false})=>{

    const style = {
        color: important ? 'red': 'black',
        fontWeight: important ? 'bold': 'normal'
    }

    return (
    <span className="todo-list-item">
        <span className="todo-list-item-label" style={style}>{label}</span>

        <button type="button" className="btn btn-outline-success btn-sm">
            <i className="fa fa-exclamation"/>
        </button> 

        <button type="button" className="btn btn-outline-success btn-sm">
            <i className='fa fa-trash'/>
        </button> 
    </span>
)}

export default Item