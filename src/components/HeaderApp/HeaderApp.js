import Logo from '../resources/img/92863224.jpg';
import Email from '../resources/img/Mail.png';
import Phone from '../resources/img/Phone.png';

import './headerApp.scss';

const HeaderApp = () => {
    return(
        <div className='header'>
            <nav className = 'header__nav'>
                <img src = {Logo} alt = 'AvatarPhoto' className='main__logo'/>
                <p>Dmitry Bartenev</p>
                <button className='button'>
                    <img src = {Email} alt = 'Email-logo'/>
                    <span>Message</span>
                </button>
                <button className = 'button' style={{width: 84, marginLeft: 16}}>
                    <img src = {Phone} alt = 'Phone-logo'/>
                    <span>Call</span>
                </button>
            </nav>
        </div>
    )
}


export default HeaderApp;