import Search from '../img/Google_icons_search.png' ;
import Icons from '../img/Google_icons.png' ;
import HTML5 from '/Users/drizzle/wood-forest-google/src/img/html5_img.png' ; 
import CSS3 from '/Users/drizzle/wood-forest-google/src/img/css3_img.png' ; 
import JAVASCRIPT from '/Users/drizzle/wood-forest-google/src/img/javascript_img.png' ; 
import REACT from '/Users/drizzle/wood-forest-google/src/img/react_img.png' ; 
import VUE from '/Users/drizzle/wood-forest-google/src/img/vue.js_img.png' ; 
import REACTNATIVE from '/Users/drizzle/wood-forest-google/src/img/reactnative_img.png' ; 
import FLUTTER from '/Users/drizzle/wood-forest-google/src/img/flutter_img.png' ; 


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
                                <p> skill : </p>
                                <div className="words"> 
                                    <span> <img src={HTML5} className='wrapper_icon_img'/> html5 </span>
                                    <span> <img src={CSS3} className='wrapper_icon_img'/> css3 </span>
                                    <span> <img src={JAVASCRIPT} className='wrapper_icon_img'/> JavaScript </span>
                                    <span> <img src={REACT} className='wrapper_icon_img'/> React.js </span>
                                    <span> <img src={VUE} className='wrapper_icon_img'/> Vue.js </span>
                                    <span> <img src={REACTNATIVE} className='wrapper_icon_img'/> React Native </span>
                                    <span> <img src={FLUTTER} className='wrapper_icon_img'/> Flutter </span>
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