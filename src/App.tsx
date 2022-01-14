import Header from './components/Header'
import SearchItem from './components/SearchItem'
import Content from './components/Content'
import Footer from './components/Footer'
import AddItem from './components/AddItem'
import { useState } from 'react'

const App = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')))
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id, checked: false, item}
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
  }

  const handleClick = (id: number) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
    setAndSaveItems(listItems)
  }

  const handleDelete = (id:number) => {
      const listItems = items.filter((item) => item.id !== id)
      setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return;
    // addItem
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header title="Grocery List"/>
      <AddItem 
        newItem = {newItem}  
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <Content 
        items={items.filter (item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleClick={handleClick}
        handleDelete={handleDelete}
      />
      <Footer 
        length={items.length}
      />
    </div>
  )
}

export default App
