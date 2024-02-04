import React, { Component } from "react"
import './search.css'

export default class Search extends Component{
  state = {
    term:''
  }

  searchChange =(event)=>{
    const term = event.target.value
    this.setState({term})
    this.props.searchChange(term)
  }

  render(){

    return(<input
      type='text'
      placeholder='Search' 
      className="search-input"
      value={this.state.term}
      onChange={this.searchChange}
      ></input>
)}}