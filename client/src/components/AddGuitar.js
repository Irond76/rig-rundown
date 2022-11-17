import React, {useState} from 'react';
import '../styles/addGuitarButton.css';
import '../styles/addGuitarForm.css';

const AddGuitar = () => {
    const [addGuitar, setAddGuitar] = useState(false);
    const [gtrBrand, setGtrBrand] = useState('');
    const [gtrModel, setGtrModel] = useState('');
    const [year, setYear] = useState('');

    const handleAddGuitar = (e) => {
        e.preventDefault();
        setAddGuitar(!addGuitar);
    }
  return (
    <>
    <button className='add-gtr-btn' onClick={handleAddGuitar}>Add A Guitar</button>
        <div className='add-gtr-form'>
            {addGuitar ? 
            <div>
                <form>
                    <label htmlFor="brand">Brand: </label>
                    <input type="text" id='brand' name='brand' value={gtrBrand} onChange={(e) => setGtrBrand(e.target.value)} />
                    <label htmlFor="model">Model: </label>
                    <input type="text" id='model' name='model' value={gtrModel} onChange={(e) => setGtrModel(e.target.value)}/>
                    <label htmlFor="year">Year: </label>
                    <input type="text" id='year' name='year'value={year} onChange={(e) => setYear(e.currentTarget.value)}/>
                </form>
            </div>
            : <div></div>}
        </div>
    </>
  )
}

export default AddGuitar
                    
    