import React from 'react'
import Item from './item'

const List =({todos})=>{

  const elements = todos.map((item)=>{

    const {id, ...items} = item

    return(
    <li key={id}><Item {...items}/></li>
    )
  })

    return(
      <ul>
        {elements}
      </ul>
    )
  }

  export default List