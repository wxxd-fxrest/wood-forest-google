import REACT from '../img/reactnative_img.png' ;
import ASK from '../img/ask_img.png' ;
import VUEKAOTALK from '../img/vuekaotalk_img.png' ;
import STARGRAM from '../img/stargram_img.png' ;
import { useNavigate } from 'react-router-dom';
import Search from '../img/Google_icons_search.png' ;
import ColorSearch from '../img/Google_color_search.png' ; 

const Project = () => {
    return (
        <div className='ProjectAll'>
            <div className="Project_wrapper">
                <img src={Search} className="Project_search"/>
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
            <div className='Project'>
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
            </div>
        </div>
    )
}

export default Project ; 