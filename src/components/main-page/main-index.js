import Header from '../general/header/header'
import BeansLogo from '../general/beans-logo/beans-logo'
import Footer from '../general/footer/footer'

import img_1 from '../../image/cards/card-img-first.png'
import img_2 from '../../image/cards/card-img-second.png'
import img_3 from '../../image/cards/card-img-third.png'


import './main-index.sass'
import Card from './card/card'

const MainIndex = () => {
    return(
        <>
            <section className="main">
                <div className="container">
                    <Header/>
                    <div className="wrapper_content">
                        <h1 className="header_text">Everything You Love About Coffee</h1>
                        <BeansLogo/>
                        <div className="subtitle">
                            We makes every day full of energy and taste
                            Want to try our beans?
                        </div>
                        <button className="main-btn">More</button>
                    </div>
                </div>
            </section>

            <section className="about_us_section">
                <div className="container">
                    <h2 className="title">About Us</h2>
                    <BeansLogo/>
                    <div className="content">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    <br/><br/>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                    </div>
                </div>
            </section>

            <section className="our_best_section">
                <h2 className="title">About Us</h2>
                <div className="wrapper_cards">
                  <Card 
                    linkImg={img_1} 
                    name="Solimo Coffee Beans 2 kg" 
                    price="10.73$"/>
                  <Card 
                    linkImg={img_2} 
                    name="Presto Coffee Beans 1 kg" 
                    price="15.99$"/>
                  <Card 
                    linkImg={img_3} 
                    name="AROMISTICO Coffee 1 kg" 
                    price="6.99$"/>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default MainIndex