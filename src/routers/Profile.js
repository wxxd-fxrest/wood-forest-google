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
                    <img src="#" className='ProfileIMG'/>
                    <h3> wood </h3>
                </div>
                <p> 
                    소설은 대표적 산문 문학으로서 근대 이후 많이 사랑받고 있는 문학의 장르이다. 그 종류만 해도 무척 다양하며, 그 만큼 읽고 즐기는 사람들의 계층도 매우 다양하다.
                    근대 소설을 뜻하는 영어 Novel은 중세기 말 이탈리아에서 유행하던 노벨라(이탈리아어: Novella[7])에서 온 것으로 이 말은 새로운 것, 신기한 것이란 뜻을 담고 있다.
                    사실 '소설'이라는 말 그대로 풀이하자면 '작은이야기'이고 이는 그대로 중국 고대 문학의 한 양식, 혹은 보잘 것 없는 이야기잡설를 일컫는 말이었다. 대강 때려맞추면 중국의 소설小說이란 본래 고대 시기에 왕이나 황제를 비롯한 궁중 사람들을 대상으로 한 궁중문학을 비롯해서 유교 경전은 아닌 온갖 잡설을 가리키는 말이다. 그 중에서도 현대적으로 분류하자면 문학에 가까웠던 소설가들의 작품은 목록이야 많이 전해지긴 하지만 그 실제 내용은 소실되어 알려져 있지 않다. 19세기 일본의 한 소설가가 'novel'을 소설로 번역하면서 지금의 의미가 되었다. 참고
                    최초의 소설(Novel) 작품으로 11세기 초 헤이안시대의 궁녀였던 무라사키 시키부가 쓴 장편소설인 겐지모노가타리를 꼽기도 한다. 다만 여기에는 상당한 논쟁의 여지가 있다. 겐지모노가타리 이전에 이미 세계 각지에 다수의 소설(Fiction, 가상의 이야기로서의 소설) 전통이 존재하기 때문이며[8], 그렇다고 근대적 의미의 소설(Novel, 장르로서의 소설)의 시초로 겐지모노가타리를 꼽기에는 직간접적 조상인 것도 아닐 뿐 아니라 근대소설이 요구하는 내용적 측면[9]도 충분히 만족하지 못하기 때문이다. 겐지모노가타리가 최초의 소설이라는 주장은, 근대적 산문 문학(Novel)의 요건을 충족했느냐로 따진 기준으로서, 그 중에서도 특히 내면의 심리묘사라는 부분적 측면과 관련이 있다. 즉, 겐지모노가타리는 단순히 등장인물들의 행위만을 서술한 것이 아니라 내면의 심리 묘사와 발전에 상당 부분을 할애했다는 점에서 최초의 소설로서 소급적으로 주장되는 것이다. 근대적 소설(Novel)의 특징 중 하나가 과거의 산문 문학과 비교할 때 등장인물들의 심리와 동기를 써내려가는 경향이 있기 때문이다. 현재도 대다수의 소설들은 캐릭터들의 내면과 행위 모두를 골고루 묘사하는 것이 당연시 되어 있다.
                    따라서 부연설명 없이 겐지모노가타리가 최초의 소설이라고만 하면 별다른 문학 지식이 없는 일반인들은 그 이전에는 산문 픽션 자체가 없었던 것처럼 오해할 수도 있고, 전문가들 중에도 그 의견에 반대하는 사람이 많다. 예를 들어 기준을 완화해서 겐지모노가타리를 소설로 볼 경우, 같은 맥락에서 더 기준을 완화해 황금 당나귀를 최초의 소설로 볼 수도 있기 때문이다. 따라서 오해와 논쟁의 여지를 막기 위해 최초의 '심리' 소설(psychological fiction)이라고 하기도 한다. 
                </p>
            </div>
        </div>
    )
}

export default Profile ; 