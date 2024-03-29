import '../styles/AddGear.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();
    const url = 'https://rig-rundown.adaptable.app/';
    const previewImage =  () => {
        const reader =  new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(image);
    }
    const updatePage = () => {
        navigate('/user');
    }

    useEffect(() => {
        if (image) {
            previewImage();
            // console.log(image);
        }else {
            setPreview('');
        };
    }, [image], [])

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
        setType(e.target.value);
    };
    const handleImageChange =  (e) => {
        setImage(e.target.files[0]);
    }
    const handleDetailsChange =(e) => {
        setDetails(e.target.value);
    }
    console.log(imageUrl)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", preview);
        formData.append("upload_preset", "rigrundown");
        const uploadImage = await axios.post("https://api.cloudinary.com/v1_1/rush-media/image/upload", formData);
        const uploadedImageData = await uploadImage.data;
        const imageUrl = uploadedImageData.url;
        setImageUrl(imageUrl);
        const res = await axios.post(url + '/add-gear', {
            brand,
            model,
            color,
            serialNumber,
            year,
            type,
            image: imageUrl,
            details
        });
        const data = await res.data;
        console.log(data);
        setBrand('');
        setModel('');
        setColor('');
        setSerialNumber('');
        setYear('');
        setImage('');
        setImageUrl('');
        setDetails('');
        updatePage();
    }; 
    return (
      <article className='form-container'>
          <form className='add-gear-form' action='/add-gear' method='post'encType= "multipart/form-data" >
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
                  <select  name="type" id="type" className="brand-input" value={type} onChange={handleTypeChange} required>
                      <option value="" className=''>Select Gear</option>
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
                  <input type="file"  accept='image/*' name='image' id='image' className="image-select brand-input" value={image[0]} onChange={handleImageChange} required/>}
              </label>
              </div>
              </div>
              <div >
              <label htmlFor="details" className='brand-label'>
                  Details: 
                  <textarea type="text" name='details' id='details' className="brand-input" value={details} onChange={handleDetailsChange} placeholder='Details' required/>
              </label>
              </div>
              <button type='submit' className='add-gear-btn' onClick={handleSubmit}>Add Gear</button>
          </form>
      </article>
    )

}
export default AddGear;