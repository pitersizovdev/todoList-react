import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Search from './components/search';
import List from './components/list';

const App =()=>{

  const data =[
    {label: 'First', important:false, id:1},
    {label: 'Second', important:true, id:2},
    {label: 'Third', important:false, id:3}
  ]

  return(
    <>
    <Header/>
    <Search/>
    <List todos={data}/>
  </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);
