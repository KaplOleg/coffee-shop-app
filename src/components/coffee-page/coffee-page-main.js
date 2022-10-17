import BeansLogo from '../general/beans-logo/beans-logo'
import Header from '../general/header/header'
import Footer from '../general/footer/footer'

import './coffee-page-main.sass'

import img_about from '../../image/cards/coffee-about.png'

const CoffePageMain = () =>{
    return(
        <>
            <section className='main'>
                <div className="container">
                    <Header/>
                    <h1 className="header_text">Our coffee</h1>
                </div>
            </section>
            <section className="About_it">
                <div className="container">
                    <div className="image"><img src={img_about} alt="coffee" /></div>
                    <div className="wrapper_content">
                        <h2 className="wrapper_content_title">About it</h2>
                        <BeansLogo/>
                        <div className="wrapper_content_text">
                            <span>Country:</span>Brasil
                            <br/><br/>
                            <span>Description:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <div className="wrapper_content_price">
                                <span>Price:</span>16.99$
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default CoffePageMain