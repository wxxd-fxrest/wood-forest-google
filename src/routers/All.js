import Top from "../components/Top" ;
import Header from "../components/Header" ;
import Under from "../components/Under" ;
import Wood from '../img/Wood.png' ;

const All = () => {
    return (
        <div className="All">
            <Header />
            <div className="All_empty"></div>
            <div className="All_IMG_Box">
                <div className="All_IMG_Div">
                    <img src={Wood} className="All_google_img" />
                </div>
            </div>
            <Top />
            <Under />
        </div>
    )
}

export default All