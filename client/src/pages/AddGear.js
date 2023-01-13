import '../styles/AddGear.css';
import { useState, useEffect } from 'react';

const AddGear = () => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [year, setYear] = useState('');
    const [type, setType] = useState('');
    const [color, setColor] = useState('');
    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');
    const [details, setDetails] = useState('');

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(image);
        }else {
            setPreview('');
        };
    }, [image])

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    };
    const handleModelChange = (e) => {
        setModel(e.target.value);
    };
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    const handleSerialNumberChange = (e) => {
        setSerialNumber(e.target.value);
    };
    const handleYearChange = (e) => {
        setYear(e.target.value)
    }
    const handleTypeChange = (e) => {
        setType(...image, e.target.value);
    };
    const handleImageChange = (e) => {
        setImage( e.target.files[0]);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    };
    const handleDetailsChange =(e) => {
        setDetails(e.target.value);

    }

  return (
    <article className='form-container'>
        <form className='add-gear-form'>
            <div>
            <label htmlFor="brand" className='brand-label'>
                Brand: 
                <input type="text" name='brand' id='brand' className="brand-input" value={brand} onChange={handleBrandChange} placeholder='Fender etc...' required/>
            </label>
            </div>
            <div>
            <label htmlFor="model" className='brand-label'>
                Model: 
                <input type="text" name='model' id='model' className="brand-input" value={model} onChange={handleModelChange} placeholder='Telecaster etc...' required/>
            </label>
            </div>
            <div>
            <label htmlFor="color" className='brand-label'>
                Color: 
                <input type="text" name='color' id='color' className="brand-input" value={color} onChange={handleColorChange} placeholder='red etc....' required/>
            </label>
            </div>
            <div className='serial-number-div'>
            <label htmlFor="serialNumber" className='brand-label'>
                Serial: 
                <input type="text" name='serialNumber' id='serialNumber' className="brand-input" value={serialNumber} onChange={handleSerialNumberChange} placeholder='123 etc...' required/>
            </label>
            </div>
            <div >
            <label htmlFor="year" className='brand-label'>
                Year: 
                <input type="text" name='year' id='year' className="brand-input" value={year} onChange={handleYearChange} placeholder='EX: 1980 or N/A' required/>
            </label>
            </div>
            <div className='select-div'>
            <label htmlFor="type" className='brand-label'>
                Item Type: 
                <select name="type" id="type" className="brand-input" value={type} onChange={handleTypeChange} required>
                    <option value="Electric Guitar" className='value'>Electric Guitar</option>
                    <option value="Acoustic Guitar">Acoustic Guitar</option>
                    <option value="Bass Guitar">Bass Guitar</option>
                    <option value="Drums">Drums</option>
                    <option value="Keys">Keys</option>
                    <option value="12 string">12 string</option>
                    <option value="Microphone">Microphone</option>
                    <option value="Recording Gear">Recording Gear</option>
                    <option value="Misc Gear">Misc Gear</option>
                </select>
            </label>
            <div className='image-div'>
            <label htmlFor="image" className='brand-label'>
                Image: 
                {preview ?<img src={preview} alt="Image-Preview" className='img-preview' /> :   
                <input type="file" multiple accept='image/*' name='image' id='image' className="image-select brand-input" value={image[0]} onChange={handleImageChange} required/>}
            </label>
            </div>
            </div>
            <div >
            <label htmlFor="details" className='brand-label'>
                Details: 
                <textarea type="text" name='details' id='details' className="brand-input" value={details} onChange={handleDetailsChange} placeholder='Details' required/>
            </label>
            </div>
            <button type='submit' className='add-gear-btn' onChange={handleSubmit}>Add Gear</button>
        </form>
    </article>
  )
}
export default AddGear;