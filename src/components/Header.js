import MORE from '../img/Google_More.png' ; 
import PROFILE from '../img/github.png' ; 
const Header = () => {
    return (
        <div className="Header">
            <div className="Header_left">
                <h3> Google 정보 </h3>
                <h3> 스토어 </h3>
            </div>
            <div className="Header_right">
                <h3> Gmail </h3>
                <h3> Image </h3>
                <img src={MORE} className="Header_MORE_IMG" /> 
                <img src={PROFILE} className="Header_PROFILE_IMG"/> 
            </div>
        </div>
    )
}

export default Header ; 