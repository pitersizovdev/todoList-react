import React from 'react';
import ReactDOM from 'react-dom/client';


const Header =()=>{
  return(
    <h1>Todo list</h1>
  )
}
const Search =()=>{
  return(
    <input placeholder='Search'></input>
  )
}
const List =()=>{
  const items = ['First point', 'Second point', 'Third point']
  return(
    <lu>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
    </lu>
  )
}
const App =()=>{
  return(
    <>
    <Header/>
    <Search/>
    <List/>
  </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);
