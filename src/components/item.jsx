import React from "react";

const Item =({label, important =false})=>{

    const style = {color: important ? 'red': 'black'}

    return <span style={style}>{label}</span>
}

export default Item