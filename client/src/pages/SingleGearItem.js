import '../styles/SingleGearItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const SingleGearItem = (props) => {
    const {brand,color,type, details,image,model,year,serialNumber} = props.state;

  return (
    <>
    <article>
      <section className="single-item-container" >     
          <img src={image} alt="" />
        <h2 className="main-text">{brand} {model}</h2>
        <div className='text'>
        <h4>{details}</h4>
        </div>
      </section> 
        <FontAwesomeIcon icon={faArrowLeft} onClick={()=> window.location.reload(true)} className="back-btn" />
    </article>
    </>
  )
}
export default SingleGearItem