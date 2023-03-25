import MORE from '../img/Google_More.png' ; 
import PROFILE from '../img/github.png' ; 
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    
    return (
        <div className="Header">
            <div className="Header_left">
                <h3> Wood 정보 </h3>
                <h3> Portfolio </h3>
            </div>
            <div className="Header_right">
                <a href='https://puffy-poinsettia-b48.notion.site/Wood-s-Portfolio-42d0cfc4769f47c3938961e53321f9c5'>  
                    <h3> Notion </h3>
                </a>
                <a href='https://github.com/wxxd-fxrest'>  
                    <h3> Github </h3>
                </a>
                <img src={MORE} className="Header_MORE_IMG" /> 
                <img src={PROFILE} className="Header_PROFILE_IMG" onClick={(() => navigate('/Profile'))}/> 
            </div>
        </div>
    )
}

export default Header ; 