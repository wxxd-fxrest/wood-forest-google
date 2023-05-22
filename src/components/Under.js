import NOTION from '../img/Notion.png' ; 
import GITHUB from '../img/GithubMark.png' ; 
import MY from '../img/MY.png' ; 
import PROJECT from '../img/project.png' ;
import SKILL from '../img/<:>.png' ; 
import INFO from '../img/Info.png' ;
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Under = () => {
    const navigate = useNavigate();
    const [more, setMore] = useState(false) ; 

    const onClick = () => {
        setMore(!more) ; 
    }

    return (
        <div className="Under">
            <div className="Under_Box">
                <div className='Under_Icons'>
                    <div className="Under_Icon" onClick={(() => navigate('/Profile'))}>  
                        <img src={MY} className="Under_Icon_img" />
                        <p className='Under_Icon_Text'> 자기소개 </p>
                    </div>
                    <div className="Under_Icon" onClick={(() => navigate('/Project'))}>  
                        <img src={PROJECT} className="Under_Icon_img" />
                        <p className='Under_Icon_Text'> 프로젝트 </p>
                    </div>
                    <div className="Under_Icon" onClick={(() => navigate('/Skill'))}>  
                        <img src={SKILL} className="Under_Icon_img" />
                        <p className='Under_Icon_Text'> 언어 </p>
                    </div>
                    <div className="Under_Icon">  
                        <a href='https://puffy-poinsettia-b48.notion.site/Wood-s-Portfolio-42d0cfc4769f47c3938961e53321f9c5'>  
                        <img src={NOTION} className="Under_Icon_img" />
                            <p className='Under_Icon_Text'> Notion </p>
                        </a>
                    </div>
                    <div className="Under_Icon">  
                        <a href='https://github.com/wxxd-fxrest'>
                        <img src={GITHUB} className="Under_Icon_img" />
                            <p className='Under_Icon_Text'> Github </p>
                        </a>
                    </div>
                    <div className="Under_Icon">  
                        <img src={INFO} className="Under_Contact" onClick={onClick}/>
                        <p className='Under_Icon_Text'>  연락처 </p>
                    </div>
                    {more ? 
                    <div className='Contact'>
                        <div className='Contact_box'>
                            <h4> Email </h4>
                            <p> ↬ fxrest704@gmail.com </p>
                            <h4> Phone Number </h4>
                            <p> ↬ 010-7609-7821 </p>
                        </div>
                    </div> : null}
                </div>
            </div>
        </div>
    )
}

export default Under ; 