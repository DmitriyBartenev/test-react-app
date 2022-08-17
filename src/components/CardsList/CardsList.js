import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';

import './cardsList.scss';


const CardsList = ({id, cards}) => {

    const [open, setOpen] = useState(true);

    return(
        <>
            <div className='card' onClick={() => setOpen(false)}>
                <img src = {cards} alt = 'test'/>
                <span>id: {id}</span>
            </div>
            <ModalWindow open = {open} setOpen = {setOpen} cards = {cards} id = {id}/>
        </>
        
    )
}


export default CardsList;