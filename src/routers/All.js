import Top from "../components/Top" ;
import Header from "../components/Header" ;
import Under from "../components/Under" ;
import Google from '../img/Google.png' ;


const All = () => {
    return (
        <div className="All">
            <Header />
            <div className="Header_a"></div>
            <div className="All_IMG_Box">
                <div className="All_IMG_Div">
                    <img src={Google} className="All_google_img" height="92px" width="272px" />
                </div>
            </div>
            <Top />
            <Under />
        </div>
    )
}

export default All