import React from 'react';
import Header from '../header/header';
import Filter from '../filter/filter';
import Search from '../search/search';
import List from '../list/list';
import './app.css'


const App = () => {
  const data = [
    { label: 'First', important: false, id: 1 },
    { label: 'Second', important: true, id: 2 },
    { label: 'Third', important: false, id: 3 }
  ];

  return (
    <div className='todo-app'>
      <Header />
      <Filter />
      <Search />
      <List todos={data} />
    </div>
  );
};

export default App