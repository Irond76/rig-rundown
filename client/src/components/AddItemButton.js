import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/AddItemButton.css';
import { useNavigate } from 'react-router-dom';

const AddItemButton = () => {
    const url = 'https://rig-rundown.adaptable.app/';
    const navigate = useNavigate();
    const handleClick = (e) => {
        return (
            navigate(url + '/add-gear') 
        )
    }
  return (
    <div>
        <button className='add-item-button' onClick={handleClick} >
            <FontAwesomeIcon icon={faPlus} className='plus-icon' />
            <p>Gear</p>
        </button>
    </div>
  )
}
export default AddItemButton