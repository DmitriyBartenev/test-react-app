import './headerApp.scss';
import Logo from '../resources/img/AvatarProfile.png';
import Email from '../resources/img/Mail.png';
import Phone from '../resources/img/Phone.png';




const HeaderApp = () => {
    return(
        <div className='header'>
            <nav className = 'header__nav'>
                <img src = {Logo} alt = 'AvatarPhoto'/>
                <p>Ricardo Cooper</p>
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