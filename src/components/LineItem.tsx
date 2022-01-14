import {FaTrashAlt} from 'react-icons/fa'

const LineItem = ({item, handleClick, handleDelete}) => {
    return (
        <li className="item" key={item.id}>
            <input 
                type="checkbox" 
                onChange = {() => handleClick(item.id)}
                checked = {item.checked}
            />
            <label
                style={(item.checked) ? {textDecoration: 'line-through'} : {}}
                onDoubleClick={() => handleClick(item.id)}
            >{item.item}</label>
            <FaTrashAlt 
            onClick={() => handleDelete(item.id)}
                role="button" 
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default LineItem
