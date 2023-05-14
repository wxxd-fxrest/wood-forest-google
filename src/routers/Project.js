import REACT from '../img/reactnative_img.png' ;
import ASK from '../img/projectAsk.png' ;
import VUEKAOTALK from '../img/projectTalk.png' ;
import STARGRAM from '../img/projectStargram.png' ;
import WOOD from '../img/projectWooood.png' ; 
import { useNavigate } from 'react-router-dom';
import Search from '../img/Google_icons_search.png' ;
import ColorSearch from '../img/Google_color_search.png' ; 
import Wood from '../img/Wood.png' ;
import Trash from '../img/Trash-mumble.png';
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
                        <a href='https://wxxd-fxrest.github.io/wood-forest-MumbleMumble'>  
                            <img src={Trash} />
                        </a>
                        <div className='ProjectCard' style={{backgroundColor:"rgb(254, 214, 70, 0.7)", color:"black"}}> Diary app </div>
                        <div className='ProjectText'>
                            <h3> Wood-forest-TrashMumble </h3>
                            <h4> 2023/04/02 ~ 2023/05/11 </h4>
                            <div className='ProjectIfobox'>
                                <p> ▸ Personal project(Team) <br /> ▸ 공유형 일기장 </p>
                                <p> #React.js #Firebase #Last.fm </p>
                            </div>
                        </div>
                        <div className='ProjectLinkBox'>
                            <a href='#' className='Project_Notion'> Notion </a> 
                            <a href='https://github.com/wxxd-fxrest/wood-forest-MumbleMumble' className='Project_Github'> Github </a>
                        </div>
                    </div>
                    <div className='ProjectBox'>
                        <a href='https://wxxd-fxrest.github.io/wood-forest-google'>  
                            <img src={WOOD} />
                        </a>
                        <div className='ProjectCard' style={{backgroundColor:"rgb(219, 50, 54, 0.7)"}}> Portfolio </div>
                        <div className='ProjectText'>
                            <h3> Wood-forest-Google </h3>
                            <h4> 2023/03/18 ~ 2023/03/26 </h4>
                            <div className='ProjectIfobox'>
                                <p> ▸ Personal project <br /> ▸ 반응형 웹 페이지 </p>
                                <p> #React.js </p>
                            </div>
                        </div>
                        <div className='ProjectLinkBox'>
                            <a href='#' className='Project_Notion'> Notion </a> 
                            <a href='https://github.com/wxxd-fxrest/wood-forest-google' className='Project_Github'> Github </a>
                        </div>
                    </div>
                    <div className='ProjectBox'>
                        <a href='https://wxxd-fxrest.github.io/stargram'> 
                            <img src={STARGRAM} />
                        </a>
                        <div className='ProjectCard' style={{backgroundColor:"rgb(72, 133, 237, 0.8)"}}> Instagram - Clone </div>
                        <div className='ProjectText'>
                            <h3> Wood-forest-Stargram </h3>
                            <h4> 2023/02/20 ~ 2023/03/14 </h4>
                            <div className='ProjectIfobox'>
                                <p> ▸ Personal project <br /> ▸ SNS Clone </p>
                                <p> #React.js #Firebase </p>
                            </div>
                        </div>
                        <div className='ProjectLinkBox'>
                            <a href='https://puffy-poinsettia-b48.notion.site/React-wood-forest-Stargram-3b0ddf621f7d48249d518332840ee03d' className='Project_Notion'> Notion </a> 
                            <a href='https://github.com/wxxd-fxrest/stargram' className='Project_Github'> Github </a>
                        </div>
                    </div>
                    <div className='ProjectBox'>
                        <a href='https://wxxd-fxrest.github.io/wood-forest-ask'>  
                            <img src={ASK} />
                        </a>
                        <div className='ProjectCard' style={{backgroundColor:"rgb(0, 0, 0, 0.6)"}}> Ask - Chat app </div>
                        <div className='ProjectText'>
                            <h3> Wood-forest-ask </h3>
                            <h4> 2022/12/18 ~ 2022/12/31 </h4>
                            <div className='ProjectIfobox'>
                                <p> ▸ Personal project  <br /> ▸ Ask - Chat app </p>
                                <p> #React.js #Firebase </p>
                            </div>
                        </div>
                        <div className='ProjectLinkBox'>
                            <a href='https://puffy-poinsettia-b48.notion.site/React-wood-forest-ask-87d19d18eb044ec79fd7e18bdc70639a' className='Project_Notion'> Notion </a> 
                            <a href='https://github.com/wxxd-fxrest/wood-forest-ask' className='Project_Github'> Github </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project ; 