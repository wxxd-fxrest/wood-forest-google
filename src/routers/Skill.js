import { useNavigate } from 'react-router-dom';
import Search from '../img/Google_icons_search.png' ;
import ColorSearch from '../img/Google_color_search.png' ; 
import Wood from '../img/Wood.png' ;
import Delete from '../img/Google_Delete.png' ; 
import Icons from '../img/Google_Project_Icons.png' ;
import HTML5 from '../img/html5_img.png' ; 
import CSS3 from '../img/css3_img.png' ; 
import JAVASCRIPT from '../img/javascript_img.png' ; 
import REACT from '../img/react_img.png' ; 
import VUE from '../img/vue.js_img.png' ; 
import REACTNATIVE from '../img/reactnative_img.png' ; 
import FLUTTER from '../img/flutter_img.png' ; 

const Skill = () => {
    const navigate = useNavigate();

    return (
        <div className='SkillAll'>
            <div className="Skill_Wood_Box">
                <img src={Wood} className="Skill_Wood" onClick={(() => navigate("/"))}/>
            </div>
            <div className="Skill_wrapper">
                <img src={Search} className="Skill_search"/>
                <img src={Delete} className="Skill_delete" onClick={(() => navigate("/"))}/>
                <img src={Icons} className="Skill_Icons"/>
                <div className="Skill_wrapper_box">
                    <p> Skill </p>
                </div>
            </div>
            <div className='Skill_under'>
                <div>
                    <img src={ColorSearch} className="Skill_under_search" />
                    <p> 전체  </p>
                </div>
            </div>
            <div className='Skill'>
                <div className='SkillBox'>
                    <img src={HTML5} />
                    <div className='SkillEmpty'></div>
                    <div className='SkillTextBox'>
                        <h3> html5 </h3>
                    </div>
                </div>
                <div className='SkillBox'>
                    <img src={CSS3} />
                    <div className='SkillEmpty'></div>
                    <div className='SkillTextBox'>
                        <h3> css3 </h3>
                    </div>
                </div>
                <div className='SkillBox'>
                    <img src={JAVASCRIPT} />
                    <div className='SkillEmpty'></div>
                    <div className='SkillTextBox'>
                        <h3> JavaScript </h3>
                    </div>
                </div>
                <div className='SkillBox'>
                    <img src={REACT} />
                    <div className='SkillEmpty'></div>
                    <div className='SkillTextBox'>
                        <h3> React.js </h3>
                    </div>
                </div>
                <div className='SkillBox'>
                    <img src={VUE} />
                    <div className='SkillEmpty'></div>
                    <div className='SkillTextBox'>
                        <h3> Vue.js </h3>
                    </div>
                </div>
                <div className='SkillBox'>
                    <img src={REACTNATIVE} />
                    <div className='SkillEmpty'></div>
                    <div className='SkillTextBox'>
                        <h3> React Native </h3>
                    </div>
                </div>
                <div className='SkillBox'>
                    <img src={FLUTTER} />
                    <div className='SkillEmpty'></div>
                    <div className='SkillTextBox'>
                        <h3> Flutter </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill ; 