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
import GITHUB from '../img/GithubMark.png' ; 
import FIREBASE from '../img/firebase_img.png' ; 
import IMG1 from '../img/img 1.png' ; 
import IMG2 from '../img/img 2.png' ; 
import IMG3 from '../img/img 3.png' ; 

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
            <div className='skill_box'>
                <div className='skill_a'>
                    <div className='skill_title'>
                        <img src={IMG3}  />
                        <h3> 업무에 활용해요. </h3>
                    </div>
                    <div className='skill_in_box'>
                        <img src={REACT} />
                        <div className='skill_in_text'>
                            <h3> React.js </h3>
                        </div>
                    </div>
                    <div className='skill_in_box'>
                        <img src={JAVASCRIPT} />
                        <div className='skill_in_text'>
                            <h3> JavaScript </h3>
                        </div>
                    </div>
                    <div className='skill_in_box'>
                        <img src={HTML5} />
                        <div className='skill_in_text'>
                            <h3> HTML5 </h3>
                        </div>
                    </div>
                    <div className='skill_in_box'>
                        <img src={CSS3} />
                        <div className='skill_in_text'>
                            <h3> CSS3 </h3>
                        </div>
                    </div>
                    <div className='skill_in_box'>
                        <img src={FIREBASE} />
                        <div className='skill_in_text'>
                            <h3> Firebase </h3>
                        </div>
                    </div>
                    <div className='skill_in_box'>
                        <img src={GITHUB} />
                        <div className='skill_in_text'>
                            <h3> Github </h3>
                        </div>
                    </div>
                </div>

                {/* <div className='skill_b'>
                    <div className='skill_title'>
                        <img src={IMG2}   />
                        <h3> 어느 정도 사용할 줄 알아요. </h3>
                    </div>
                    <div className='skill_in_box'>
                        <img src={GITHUB} />
                        <div className='skill_in_text'>
                            <h3> Github </h3>
                        </div>
                    </div>
                    <div className='skill_in_box'>
                        <img src={VUE} />
                        <div className='skill_in_text'>
                            <h3> Vue.js </h3>
                        </div>
                    </div>
                </div> */}

                <div className='skill_c'>
                    <div className='skill_title'>
                        <img src={IMG1}  />
                        <h3> 배우고 싶어요. </h3>
                    </div>
                    <div className='skill_in_box'>
                        <img src={REACTNATIVE} />
                        <div className='skill_in_text'>
                            <h3> React Native </h3>
                        </div>
                    </div>
                    <div className='skill_in_box'>
                        <img src={FLUTTER} />
                        <div className='skill_in_text'>
                            <h3> Flutter </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill ; 