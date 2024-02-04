import React, {Component} from 'react';
import Header from '../header/header';
import Filter from '../filter/filter';
import Search from '../search/search';
import List from '../list/list';
import './app.css'
import Add from '../add/add';

export default class App extends Component{

  maxId = 100
  state={
    data: [
      this.createItem('Created First'),
      this.createItem('Created Second'),
      this.createItem('Created Third')
    ],
    term: ''
  }

  createItem(label){
    return{
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  addItem=(txt)=>{
    const newItem = this.createItem(txt)

    this.setState(({data})=>{
      const newArr =[
        ...data,
        newItem
      ]

      return {
        data: newArr
      }
    })
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
  toggleProperty(arr, id, propName){
    const i = arr.findIndex((el)=> el.id === id)

    const oldItem = arr[i]
    const newItem = {...oldItem, [propName]: !oldItem[propName]}

    return [...arr.slice(0, i), newItem, ...arr.slice(i+1)]
  }
  onToggleDone=(id)=>{
    this.setState(({data})=>{
      return {
        data: this.toggleProperty(data, id, 'done')
      }
    })
  }
  onToggleImportant=(id)=>{
    this.setState(({data})=>{
      return {
        data: this.toggleProperty(data, id, 'important')
      }
    })
  }
  searchChange=(term)=>{
    this.setState({term})
  }
  search(items, term){
      if (term.length === 0){
        return items
      }
      return items.filter((item)=>{
        return item.label.toLowerCase().indexOf(term.toLowerCase())>-1
      })
  }
 
  render(){
    const{data, term} = this.state
    const visibleItems = this.search(data, term)
    const doneCount= this.state.data.filter((el)=>el.done).length
    const todoCount= this.state.data.length - doneCount

    return (
      <div className='todo-app'>
        <Header toDo={todoCount} done={doneCount}/>
        <Filter />
        <Search searchChange={this.searchChange}/>
        <List 
          todos={visibleItems} 
          deleted={this.deleteItem} 
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>
        <Add add={this.addItem}/>
      </div>
    );
  }
}