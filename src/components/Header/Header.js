import './Header.css'
import config from '../../config.json'

const Header = () => {

    const handleLogin = () => {
        window.location = `${config.authorize_url}?client_id=${config.client_id}&redirect_uri=${config.redirect_url}&response_type=token&show_dialog=true`;
    };

    return <div className="header">
        <img src="https://kreitech.io/wp-content/themes/understrap-child/images/kreitech__logo.svg" alt="Kreitech"></img>
        <button className="login-button" onClick={handleLogin}>Get token</button>
    </div>
}

export default Header;