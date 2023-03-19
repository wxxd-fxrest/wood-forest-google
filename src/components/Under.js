import NAVER from '../img/Google_NAVER_IMG.png' ;
const Under = () => {
    return (
        <div className="Under">
            <div className="Under_Box">
                <div className='Under_Icons'>
                    <a className="Under_Icon" title="" href="#">  
                        <img src={NAVER} className="Under_Icon_img"/>
                        <p className='Under_Icon_Text'> 자기소개 </p>
                    </a>
                    <a className="Under_Icon" title="" href="#">  
                        <img src={NAVER} className="Under_Icon_img"/>
                        <p className='Under_Icon_Text'> 프로젝트 </p>
                    </a>
                    <a className="Under_Icon" title="" href="#">  
                        <img src={NAVER} className="Under_Icon_img"/>
                        <p className='Under_Icon_Text'> 언어 </p>
                    </a>
                    <a className="Under_Icon" title="" href="#">  
                        <img src={NAVER} className="Under_Icon_img"/>
                        <p className='Under_Icon_Text'> 노션 </p>
                    </a>
                    <a className="Under_Icon" title="" href="#">  
                        <img src={NAVER} className="Under_Icon_img"/>
                        <p className='Under_Icon_Text'> github </p>
                    </a>
                    <a className="Under_Icon" title="" href="#">  
                        <img src={NAVER} className="Under_Icon_img"/>
                        <p className='Under_Icon_Text'>  연락처 </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Under ; 