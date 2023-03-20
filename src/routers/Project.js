import REACT from '../img/reactnative_img.png' ;
import ASK from '../img/ask_img.png' ;
import VUEKAOTALK from '../img/vuekaotalk_img.png' ;
import STARGRAM from '../img/stargram_img.png' ;
import { useNavigate } from 'react-router-dom';
import Search from '../img/Google_icons_search.png' ;
import ColorSearch from '../img/Google_color_search.png' ; 
import Wood from '../img/Wood.png' ;
import Delete from '../img/Google_Delete.png' ; 
import Icons from '../img/Google_Project_Icons.png' ;

const Project = () => {
    const navigate = useNavigate();

    return (
        <div className='ProjectAll'>
            <div className="Project_Wood_Box">
                <img src={Wood} className="Project_Wood" onClick={(() => navigate("/"))}/>
            </div>
            <div className="Project_wrapper">
                <img src={Search} className="Project_search"/>
                <img src={Delete} className="Project_delete" onClick={(() => navigate("/"))}/>
                <img src={Icons} className="Project_Icons"/>
                <div className="Project_wrapper_box">
                    <p> Project </p>
                </div>
            </div>
            <div className='Project_under'>
                <div>
                    <img src={ColorSearch} className="Project_under_search" />
                    <p> 전체  </p>
                </div>
            </div>
            <div className='ProjectAll'>
                <div className='Project'>
                    <div className='ProjectBox'>
                        <img src={ASK} />
                        <div className='ProjectText'>
                            <h3> Wood-forest-ask </h3>
                        </div>
                        <div className='ProjectLinkBox'>
                            <a href='https://puffy-poinsettia-b48.notion.site/React-wood-forest-ask-87d19d18eb044ec79fd7e18bdc70639a' className='Project_Notion'> Notion </a> 
                            <a href='https://github.com/wxxd-fxrest/wood-forest-ask' className='Project_Github'> Github </a>
                        </div>
                    </div>
                    <div className='ProjectBox'>
                        <img src={VUEKAOTALK} />
                        <div className='ProjectText'>
                            <h3> Wood-forest-VuekaoTalk </h3>
                        </div>
                        <div className='ProjectLinkBox'>
                            <a href='https://puffy-poinsettia-b48.notion.site/Vue-js-wood-forest-VuekaoTalk-e93840aa52b5425bb8774a28bc416afc' className='Project_Notion'> Notion </a> 
                            <a href='https://github.com/wxxd-fxrest/wood-forest-talk' className='Project_Github'> Github </a>
                        </div>
                    </div>
                    <div className='ProjectBox'>
                        <img src={STARGRAM} />
                        <div className='ProjectText'>
                            <h3> Wood-forest-Stargram </h3>
                        </div>
                        <div className='ProjectLinkBox'>
                            <a href='https://puffy-poinsettia-b48.notion.site/React-wood-forest-Stargram-3b0ddf621f7d48249d518332840ee03d' className='Project_Notion'> Notion </a> 
                            <a href='https://github.com/wxxd-fxrest/stargram' className='Project_Github'> Github </a>
                        </div>
                    </div>
                    <div className='ProjectBox'>
                        <img src={REACT} />
                        <div className='ProjectText'>
                            <h3> Wood-forest-Google </h3>
                        </div>
                        <div className='ProjectLinkBox'>
                            <a href='#' className='Project_Notion'> Notion </a> 
                            <a href='https://github.com/wxxd-fxrest/wood-forest-google' className='Project_Github'> Github </a>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className='Project'>
                <div className='ProjectBox'>
                    <img src={ASK} />
                    <div className='ProjectText'>
                        <h3> Wood-forest-ask </h3>
                        <div className='ProjectEmpty'></div>
                        <div className='ProjectLinkBox'>
                            <a href='#' className='Project_Notion'> Notion </a> 
                            <a href='#' className='Project_Github'> Github </a>
                        </div>
                    </div>
                </div>
                <div className='ProjectBox'>
                    <img src={VUEKAOTALK} />
                    <div className='ProjectText'>
                        <h3> Wood-forest-VuekaoTalk </h3>
                        <div className='ProjectEmpty'></div>
                        <div className='ProjectLinkBox'>
                            <a href='#' className='Project_Notion'> Notion </a> 
                            <a href='#' className='Project_Github'> Github </a>
                        </div>
                    </div>
                </div>
                <div className='ProjectBox'>
                    <img src={STARGRAM} />
                    <div className='ProjectText'>
                        <h3> Wood-forest-Stargram </h3>
                        <div className='ProjectEmpty'></div>
                        <div className='ProjectLinkBox'>
                            <a href='#' className='Project_Notion'> Notion </a> 
                            <a href='#' className='Project_Github'> Github </a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Project ; 