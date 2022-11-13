import React, { useState, useEffect} from 'react';

const guitarURL = '/api';
const GuitarsData = () => {
    const [guitars, setGuitars] = useState([]);
    
    const fetchGuitars = async () => {
        const res = await fetch(guitarURL);
        const guitarList = await res.json();
        console.log(guitarList);
        setGuitars(guitarList);
    }

    useEffect(() => {
        fetchGuitars();
    }, []);

  return (
    <div>
        <ul>
            {guitars.map((gtr) => {
                const {id,brand, model} = gtr;
                return(
                    <li key={id}>{brand}: {model}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default GuitarsData