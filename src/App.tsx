import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { useState } from 'react'

const App = () => {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: false,
        item: "One half pound back of Cocoa covered almonds unsalted"
    },
    {
        id: 2,
        checked: false,
        item: "item 2"
    }
  ])
  const handleClick = (id: number) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
    setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems))
  }

  const handleDelete = (id:number) => {
      const listItems = items.filter((item) => item.id !== id)
      setItems(listItems)
      localStorage.setItem('shoppingList', JSON.stringify(listItems))
  }
  return (
    <div className="App">
      <Header title="Grocery List"/>
      <Content 
        items={items}
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
