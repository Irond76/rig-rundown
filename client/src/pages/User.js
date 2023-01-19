import { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/User.css'
import AddItemButton from "../components/AddItemButton";
import SingleGearItem from "./SingleGearItem";
import EditGearDetail from "../components/EditGearDetail";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";


const User = () => {
  const [loading, setLoading] = useState(true);
  const [myGear, setMyGear] = useState([]);
  const [showSingleItem, setShowSingleItem] = useState(false);
  const [singleGearItem, setSingleGearItem] = useState([]);
  const [itemToEdit, setItemToEdit] = useState();
  const [edit, setEdit] = useState(false);
  const url = 'https://rig-rundown.adaptable.app/';
// =======================================================================================================

// ===================================================================================================================
  const getGearData = async () => {
    const res = await axios.get(url + '/user');
    const data = await res.data;
    setMyGear(data)
    setLoading(false)
    console.log(data);
  };

  const deleteGearItem = async (_id) => {
    const id = _id;   
    const res = await axios.delete(url + `/user/${id}`);
    const data = await res.data;
    const newGear = myGear.filter((item) => item.id !== data._id);
    setMyGear(newGear);
    window.location.reload();
    console.log(data)

  }
  const editGearItem = async (_id) => {
    const id = _id;
    const res = await axios.get(url + `/user/${id}`);
    const data = await res.data;
    setItemToEdit(data)
    setEdit(!edit)
  }


  useEffect(() => {
     getGearData();
  },[])
  
 
  // Get Individual Item From DB
  const handleDetailsClick = async (_id) => {
    const id = _id;   
    const res = await axios.get( url + `/user/${id}`);
    const data = await res.data;
    setShowSingleItem(!showSingleItem);
    setSingleGearItem(data);
  }
if (!showSingleItem && !edit) {
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
                  <button className="details-btn" onClick={() => handleDetailsClick(_id)}>See More Details...</button>
                </div>
                <div className="icon-container" >
                  <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" onClick={() => editGearItem(_id) }/>
                  <FontAwesomeIcon icon={faTrashAlt} className="edit-icon" onClick={() => deleteGearItem(_id)} />
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
  }else if (showSingleItem){
    return (
      <SingleGearItem state={singleGearItem}/>
    )
  } if (edit) {
    return(
      <EditGearDetail state={itemToEdit}/>
    )
  }
}
export default User;