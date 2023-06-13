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
                <img alt='#' src={Wood} className="Project_Wood" onClick={(() => navigate("/"))}/>
            </div>
            <div className="Project_wrapper">
                <img alt='#' src={Search} className="Project_search"/>
                <img alt='#' src={Delete} className="Project_delete" onClick={(() => navigate("/"))}/>
                <img alt='#' src={Icons} className="Project_Icons"/>
                <div className="Project_wrapper_box">
                    <p> Profile </p>
                </div>
            </div>
            <div className='Project_under'>
                <div>
                    <img alt='#' src={ColorSearch} className="Project_under_search" />
                    <p> 전체  </p>
                </div>
            </div>
            <div className='Profile'>
                <div className='ProfileTop'>
                    <img src={PROFILEIMG} className='ProfileIMG' alt='#'/>
                    <div className='ProfileBox'>
                        <div className='ProfileTITLE'>
                            <h3 className='title1'> Frontend Engineer </h3>
                            <h3 className='title2'> 천천히 그러나 정확하게 성장하는 개발자 </h3>
                        </div>
                        <div className='Profile2'>
                            <h3 className='info1'> 윤소연 (wood) | 1999.09.12 </h3> 
                        </div>
                        <div className='Porfile_aboutME'>
                            <h6> √ 사용자 경험을 중요하게 생각하여 UX와 기획에 관심이 많습니다. </h6>
                            <h6> √ 프로젝트에서 협업을 가장 중요하게 생각하여, 꾸준한 소통을 통해 커뮤니케이션 능력을 기르고자 노력하며 맡은 업무는 끝까지 마무리합니다. </h6>
                            <h6> √ 재사용 할 수 있는 코드를 구현하고자 노력하며, 이를 위해 프로젝트 진행 시 코드 아카이빙과 기록하는 습관을 들이려 노력합니다. </h6>
                            <h6> √ 주로 파이어 베이스 및 리액트 라이브러리를 사용하여 반응형 웹사이트를 구현할 수 있으며, 빠르게 변화하는 언어에 꾸준히 관심을 가지고 자바, 스프링 등의 백엔드 언어는 물론 리액트 네이티브를 학습하여 백엔드 및 크로스 플랫폼 영역까지 확장하고자 합니다. </h6>
                        </div>
                        <div className='Profile3'>
                            <h3> 구림 공업 고등학교 (전자과) 졸업 (2017.02) </h3>
                            <h3> 경찰행정학과 수료 (2020.08, 학점은행제) </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile ; 