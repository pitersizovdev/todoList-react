import React from 'react'
import './header.css'


const Header =({toDo, done})=>{
    return(
      <div className='app-header d-flex'>
      <h1>Todo list</h1>
      <h2>{toDo} to do, {done} done</h2>
      </div>
    )
  }

export default Header