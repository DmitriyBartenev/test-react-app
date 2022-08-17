import Comments from '../Comments/Comments';

import './modalWindow.scss'


const ModalWindow = ({open, setOpen, cards}) => {

    return(
        <>
            <div className={`overlay ${open ? 'animated' : ''}`}> 
                <div className='modal'>
                    <span 
                        className='close' 
                        onClick={() => setOpen(true)}>×</span>
                    <img
                        className='modal_big_photo' 
                        src = {cards} 
                        alt = 'selected-ph' />
                    <Comments/>
                </div>
            </div>
        </>
    )
}


export default ModalWindow;