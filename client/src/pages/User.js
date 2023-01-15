import { useEffect, useState } from "react";
import axios from 'axios';
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
      <article>
        <section>
        {myGear.map((item) => {
          const {_id, brand,color,details,image,model,year,serialNumber} = item;
          return (
            <ul>
              <li key={_id}>
                <h1>{brand}</h1>
                <h2>{model}</h2>
                <h2>{color}</h2>
                <h3>{year}</h3>
                <img src={image} alt={`${brand} ${model}`} />
                <h3>Serial Nnmber: {serialNumber}</h3>
                <p>{details}</p>
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