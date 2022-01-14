import LineItem from './LineItem'

const ItemList = ({items, handleClick, handleDelete}) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItem
                    item={item}
                    handleClick={handleClick}
                    handleDelete={handleDelete}
                />
            ))}
        </ul> 
    )
}

export default ItemList
