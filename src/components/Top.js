import Search from '../img/Google_icons_search.png' ;
import Icons from '../img/Google_icons.png' ;
import Time from '../img/Google_icons_time.png' ;
import Arrow from '../img/Google_icons_arrow.png' ;

const Top = () => {
    return (
        <div className="Top">
            <form className="Top_From">
                <div className="Top_From_Box">
                    <div className="Top_Form_div">

                    <div className="Top_wrapper"> 
                        <div className="wrapper_bady">
                            <img src={Search} className="wrapper_search"/>
                            <img src={Icons} className="wrapper_icons"/>
                            <div className="wrapper">
                                <p> coding is </p>
                                <div className="words"> 
                                    <span> fantastic </span>
                                    <span> interesting </span>
                                    <span> interesting2 </span>
                                    <span> interesting3 </span>
                                    <span> fantastic </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Top ; 