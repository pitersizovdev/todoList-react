import React from "react";

const Item =({lable, important =false})=>{
    const style = {color: important ? 'red': 'black'}

    return <span style={style}>{lable}</span>
}

export default Item