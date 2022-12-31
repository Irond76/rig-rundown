import '../styles/DarkModeButton.css';
import {useState} from 'react';


const DarkModeButton = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [btnText, setBtnText] = useState('Dark Theme')

    const handleClick = (e) => {
        setDarkMode(!darkMode);
        if (btnText === 'Dark Theme') {
            document.body.style.backgroundColor = "#050505"
            setBtnText('Light Theme')
        } else {
            setBtnText('Dark Theme')
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
