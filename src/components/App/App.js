import { useState, useEffect } from "react";

import CardsList from "../CardsList/CardsList";
import HeaderApp from "../HeaderApp/HeaderApp";

import './app.scss'

const App = () =>{

    const [cardsList, setCardsList] = useState([]);
    
    useEffect(() => {
        fetch('https://boiling-refuge-66454.herokuapp.com/images')
            .then(res => res.json())
            .then(json => {
                setCardsList(json)
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    
    return(
        <main>
            <HeaderApp/>
            <div className='cards'>
                {cardsList.map((obj,i) => (
                    <CardsList 
                        key ={i} 
                        cards = {obj.url} 
                        id = {obj.id}/>
                ))}
            </div> 
        </main>
    )
}

export default App;