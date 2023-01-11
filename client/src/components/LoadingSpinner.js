import '../styles/Logo-Spinner.css';
const logoSpinner = require('../spinner-logo.png');

const LoadingSpinner = () => {
  return (
    <>
        <img src={logoSpinner}  alt="Logo-Spinner" className={'logo-spin'} /><span>Loading ...</span>
    </>
  )
}
export default LoadingSpinner;
