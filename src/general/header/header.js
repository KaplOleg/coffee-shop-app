
import './header.sass'

const Header = () => {
    return (
        <header className="header">
            <div className="header_logo">
                <div className='img'/>
            </div>
            <ul className="menu">
                <li className="menu_item"><a href="#home" className="menu_link">Coffee house</a></li>
                <li className="menu_item"><a href="#first" className="menu_link">Our coffee</a></li>
                <li className="menu_item"><a href="#second" className="menu_link">For your pleasure</a></li>
            </ul>
        </header>
    )
}

export default Header