import { useNavigate } from 'react-router-dom';
import Search from '../img/Google_icons_search.png' ;
import ColorSearch from '../img/Google_color_search.png' ; 
import Wood from '../img/Wood.png' ;
import Delete from '../img/Google_Delete.png' ; 
import Icons from '../img/Google_Project_Icons.png' ;
import PROFILEIMG from '../img/img 1.png' ; 

const Profile = () => {
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
                    <p> Profile </p>
                </div>
            </div>
            <div className='Project_under'>
                <div>
                    <img src={ColorSearch} className="Project_under_search" />
                    <p> 전체  </p>
                </div>
            </div>
            <div className='Profile'>
                <div className='ProfileTop'>
                    <img src={PROFILEIMG} className='ProfileIMG'/>
                    <div className='ProfileBox'>
                        <div className='ProfileTITLE'>
                            <h3 className='title1'> Frontend Engineer </h3>
                            <h3 className='title2'> 천천히 그러나 정확하게 성장하는 개발자 </h3>
                        </div>
                        <div className='Profile2'>
                            <h3 className='info1'> - 윤소연 </h3> 
                            <h3 className='info2'> - wood </h3> 
                            <h3 className='info3'> - 1999.09.12 </h3>
                        </div>
                        <div className='Profile3'>
                            <h3> - 구림 공업 고등학교(전자과) 졸업 (2017) </h3>
                            <h3> - 학점은행제(경찰행정학과) 수료 (2020) </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile ; 