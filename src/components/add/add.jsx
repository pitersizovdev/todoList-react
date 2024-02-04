import React, {Component} from 'react'
import './add.css'

export default class Add extends Component{

    state ={
        label:''
    }

    lableChange =(e)=>{
        this.setState({
            label: e.target.value
        })
    }
    onSubmit =(e)=>{
        e.preventDefault()
        this.props.add(this.state.label)
        this.setState({
            label:''
        })
    }

  render(){
    return(
    <form className='item-add-form' onSubmit={this.onSubmit}>
        <input type='text' className='form-control' onChange={this.lableChange} placeholder='Write a task' value={this.state.label}></input>
        <button className='btn btn-outline-secondary item-add-form' >Add Item</button>
    </form>
  )} 
}
