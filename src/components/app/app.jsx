import React, {Component} from 'react';
import Header from '../header/header';
import Filter from '../filter/filter';
import Search from '../search/search';
import List from '../list/list';
import './app.css'
import Add from '../add/add';

export default class App extends Component{

  state={
    data: [
      { label: 'First', important: false, id: 1 },
      { label: 'Second', important: true, id: 2 },
      { label: 'Third', important: false, id: 3 }
    ]
  }

  deleteItem=(id)=>{
    this.setState(({data})=>{
      const i = data.findIndex((el)=> el.id === id)

      const newArr = [...data.slice(0, i), ...data.slice(i+1)]

      return{
        data:newArr
      }
    })
  }

  render(){
    return (
      <div className='todo-app'>
        <Header />
        <Filter />
        <Search />
        <List todos={this.state.data} deleted={this.deleteItem}/>
        <Add/>
      </div>
    );
  }

}