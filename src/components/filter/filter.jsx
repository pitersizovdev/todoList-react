import React, { Component } from 'react'
import './filter'

export default class Filter extends Component{

  buttons=[
    {category:'all', name:'All'},
    {category:'active', name:'Active'},
    {category:'done', name:'Done'}
  ]

  render(){ 
    const {filter, filterChange}=this.props
    const buttons = this.buttons.map(({category, name})=>{
    const isActive = filter === category
    const clazz = isActive ? 'btn-info': 'btn-outline-secondary'

      return(
        <button key={category} type='button' className={`btn ${clazz}`} onClick={()=>filterChange(category)}>{name}</button>
      )
  })

    return (
    <div className='btn-group'>
        {buttons}
    </div>
)}}
