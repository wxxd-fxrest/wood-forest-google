import REACT from '../img/reactnative_img.png' ;
import ASK from '../img/projectAsk.png' ;
import VUEKAOTALK from '../img/projectTalk.png' ;
import STARGRAM from '../img/projectStargram.png' ;
import WOOD from '../img/projectWooood.png' ; 
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
                        <img src={WOOD} />
                        <div className='ProjectCard' style={{backgroundColor:"rgb(219, 50, 54, 0.7)"}}> Portfolio </div>
                        <div className='ProjectText'>
                            <h3> Wood-forest-Google </h3>
                            <h4> 2023/03/18 ~ </h4>
                            <p> personal </p>
                        </div>
                        <div className='ProjectLinkBox'>
                            <a href='#' className='Project_Notion'> Notion </a> 
                            <a href='https://github.com/wxxd-fxrest/wood-forest-google' className='Project_Github'> Github </a>
                        </div>
                    </div>
                    <div className='ProjectBox'>
                        <img src={STARGRAM} />
                        <div className='ProjectCard' style={{backgroundColor:"rgb(72, 133, 237, 0.8)"}}> Instagram - Clone </div>
                        <div className='ProjectText'>
                            <h3> Wood-forest-Stargram </h3>
                            <h4> 2023/02/20 ~ 2023/03/14 </h4>
                        </div>
                        <div className='ProjectLinkBox'>
                            <a href='https://puffy-poinsettia-b48.notion.site/React-wood-forest-Stargram-3b0ddf621f7d48249d518332840ee03d' className='Project_Notion'> Notion </a> 
                            <a href='https://github.com/wxxd-fxrest/stargram' className='Project_Github'> Github </a>
                        </div>
                    </div>
                    <div className='ProjectBox'>
                        <img src={VUEKAOTALK} />
                        <div className='ProjectCard' style={{backgroundColor:"rgb(60, 186, 84, 0.8)"}}> Chat app </div>
                        <div className='ProjectText'>
                            <h3> Wood-forest-VuekaoTalk </h3>
                            <h4> 2023/01/08 ~ 2023/02/12 </h4>
                        </div>
                        <div className='ProjectLinkBox'>
                            <a href='https://puffy-poinsettia-b48.notion.site/Vue-js-wood-forest-VuekaoTalk-e93840aa52b5425bb8774a28bc416afc' className='Project_Notion'> Notion </a> 
                            <a href='https://github.com/wxxd-fxrest/wood-forest-talk' className='Project_Github'> Github </a>
                        </div>
                    </div>
                    <div className='ProjectBox'>
                        <img src={ASK} />
                        <div className='ProjectCard' style={{backgroundColor:"rgb(0, 0, 0, 0.6)"}}> Ask - Chat app </div>
                        <div className='ProjectText'>
                            <h3> Wood-forest-ask </h3>
                            <h4> 2022/12/18 ~ 2022/12/31 </h4>
                        </div>
                        <div className='ProjectLinkBox'>
                            <a href='https://puffy-poinsettia-b48.notion.site/React-wood-forest-ask-87d19d18eb044ec79fd7e18bdc70639a' className='Project_Notion'> Notion </a> 
                            <a href='https://github.com/wxxd-fxrest/wood-forest-ask' className='Project_Github'> Github </a>
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