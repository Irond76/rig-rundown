import '../styles/AddGear.css';
import { useState } from 'react';

const AddGear = () => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('')

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    };
    const handleModelChange = (e) => {
        setModel(e.target.value);
    };
  return (
    <article className='form-container'>
        <form className='add-gear-form'>
            <div>
            <label htmlFor="brand" className='brand-label'>
                Brand: 
                <input type="text" name='brand' id='brand' className="brand-input" value={brand} onChange={handleBrandChange}/>
            </label>
            </div>
            <div>
            <label htmlFor="model" className='brand-label'>
                Model: 
                <input type="text" name='model' id='model' className="brand-input" value={model} onChange={handleModelChange}/>
            </label>
            </div>
        </form>
    </article>
  )
}
export default AddGear;