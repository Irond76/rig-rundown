import '../styles/DarkModeButton.css';
import {useState} from 'react';


const DarkModeButton = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [btnText, setBtnText] = useState('Dark Mode On')

    const handleClick = (e) => {
        setDarkMode(!darkMode);
        if (btnText === 'Dark Mode On') {
            document.body.style.backgroundColor = "#050505"
            setBtnText('Dark Mode Off')
        } else {
            setBtnText('Dark Mode On')
            document.body.style.backgroundColor = '#FAFAFA'
    }
        setDarkMode(!darkMode);

}

  return (
    <button className={darkMode ? "dark-mode-toggle-on": 'dark-mode-toggle-off'}
    onClick={handleClick}
    >{btnText}</button>
  )
}
export default DarkModeButton;
