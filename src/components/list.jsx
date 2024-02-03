import React from 'react'
import Item from './item'


const List =()=>{
    return(
      <lu>
        <li><Item lable='First point'/></li>
        <li><Item lable='Second point' important/></li>
        <li><Item lable='Third point'/></li>
      </lu>
    )
  }

  export default List