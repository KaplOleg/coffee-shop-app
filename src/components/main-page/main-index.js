import Header from '../general/header/header'
import BeansLogo from '../general/beans-logo/beans-logo'
//import Footer from '../general/footer/footer'


import './main-index.sass'

const MainIndex = () => {
    return(
        <>
            <section className="main">
                <div className="container">
                    <Header/>
                    <div className="wrapper_content">
                        <h1 className="title">Everything You Love About Coffee</h1>
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
        </>
    )
}

export default MainIndex