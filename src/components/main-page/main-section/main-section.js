import Header from '../../general/header/header'
import BeansLogo from '../../general/beans-logo/beans-logo'

import './main-section.sass'

const MainSection = () => {
    return(
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
    )
}

export default MainSection