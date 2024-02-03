import React from 'react';
import Header from '../header/header';
import Filter from '../filter/filter';
import Search from '../search/search';
import List from '../list/list';


const App = () => {
  const data = [
    { label: 'First', important: false, id: 1 },
    { label: 'Second', important: true, id: 2 },
    { label: 'Third', important: false, id: 3 }
  ];

  return (
    <>
      <Header />
      <Filter />
      <Search />
      <List todos={data} />
    </>
  );
};

export default App