import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/AddItemButton.css';

const AddItemButton = () => {
  return (
    <div>
        <button className='add-item-button'>
            <FontAwesomeIcon icon={faPlus} className='plus-icon' />
            <p>Gear</p>
        </button>
    </div>
  )
}
export default AddItemButton