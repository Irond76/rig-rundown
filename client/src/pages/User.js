import { useEffect, useState, useNavigate } from "react";
import axios from 'axios';
import '../styles/User.css'
import AddItemButton from "../components/AddItemButton";


const User = () => {
  const [myGear, setMyGear] = useState([]);

  const getGearData = async () => {
    const res = await axios.get('/user');
    const data = await res.data;
    setMyGear(data)
    console.log(data);
  };
  useEffect(() => {
    getGearData();
  }, [])

  const handleClick = (_id) => {
    console.log(`btn clicked id: ${_id}`)
    // const navigate = useNavigate();
    // return (
    //   navigate('/single-gear')
    // )
  }

  return (
    <>
    <div>
      <AddItemButton />
    </div>
    <div>
      <article className="container">
        <section className="container-center">
        {myGear.map((item) => {
          const {_id, brand,color,type, details,image,model,year,serialNumber} = item;
          return (
            <ul className="gear-list-items" key={_id}>
              <li key={_id}>
                <div className="gear-main">
                  <h1 className="brand-text">Brand: <span className="sub-text-1">{brand}</span></h1>               
                  <h2 className="model-text">Model: <span className="sub-text-2">{model}</span></h2>
                  <hr />
                  <h3 className="gear-type-text">{type}</h3>
                  <h3 className="color-text">Color: <span className="sub-text-3">{color}</span></h3>
                  <h3 className="year-text">Year: {year}</h3>
                </div>
                <div>
                  <img  src={image} alt={`${brand} ${model}`} className='gear-image'/>
                </div>
                <div>
                  <h3 className="serial-number-text">Serial Nnmber: <span className="sub-text-4">{serialNumber}</span></h3>
                  {/* <p className="details-text">Details: {details}</p> */}
                  <button className="details-btn" onClick={() => handleClick(_id)}>See More Details...</button>
                </div>
              </li>
            </ul>
          )
        })}
        </section>
      </article>
    </div>
  </>
  )
}
export default User