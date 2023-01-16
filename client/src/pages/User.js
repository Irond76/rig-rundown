import { useEffect, useState } from "react";
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
                  <h1>{brand}</h1>               
                  <h2>{model}</h2>
                  <h3>{type}</h3>
                  <h2>{color}</h2>
                  <h3>{year}</h3>
                </div>
                <div>
                  <img  src={image} alt={`${brand} ${model}`} className='gear-image'/>
                </div>
                <div>
                  <h3>Serial Nnmber: {serialNumber}</h3>
                  <p>{details}</p>
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