import React from 'react';
import Item from '../item/item';
import './list.css';

const List = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...items } = item;
    return (
      <li key={id} className='list-group-item'>
        <Item {...items} />
      </li>
    );
  });

  return (
    <ul className='list-group todo-list'>
      {elements}
    </ul>
  );
};

export default List;