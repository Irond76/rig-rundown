


const SingleGearItem = (props) => {
    const {brand,color,type, details,image,model,year,serialNumber} = props.state;

  return (
    <>
    <div>
        <h1>testing</h1>
        <h2>{brand}</h2>
        <img src={image} alt="" />
    </div>
        <button onClick={()=> window.location.reload(true)}>Back</button>
    </>
  )
}
export default SingleGearItem