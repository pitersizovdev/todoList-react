import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Search from './components/search';
import List from './components/list';

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
