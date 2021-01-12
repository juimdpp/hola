import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import './MainPage.scss';

class MainPage extends Component{
    matchingHandler(){
        this.props.history.push('/matching')
    }
    
    render(){
        const introduce_text = [
            '안녕하세요, 저희는 서울대학교 기술나눔단 VESS의 HOLA팀입니다. VESS는 적정기술 정신을 기반으로 소외계층의 삶에 도움을 주고자 사회 공헌 프로젝트를 진행하는 동아리로, 저희 HOLA팀은 청각장애인에 대한 인식 개선 및 청각장애인과 비장애인의 소통을 늘리고 수어를 널리 보급하기 위해 수어 회화 매칭 사이트를 만들려고 합니다.\nVESS에 대해 더 자세한 정보를 알고 싶으시다면 다음 링크를 참고해주세요.',
            '청각장애인에 대한 인식 개선 및 청각장애인과 비장애인의 소통을 늘리고 수어를 널리 보급하기 위한 수어 회화 매칭 사이트입니다. 청각장애인과 비장애인을 구별하지 않고 1:1, 혹은 세명 이상을 동시에 매칭해서 회화 연습을 하도록 진행하며, 매칭할 때마다 간단한 단어와 대화 주제를 제공할 계획입니다.',
        ];
        return(
            <div id="MainPage">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <p id="vess-introduce">
                    <h1>VESS 동아리 소개 및 인사말</h1>
                    <p className="text-body">
                        {introduce_text[0]}
                    </p>
                    <p id="vess-sns">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="https://www.facebook.com/vess201509" target="_blank" className="link">페이스북 페이지</a>
                        <br />
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="https://instagram.com/snu_vess" target="_blank" className="link">인스타그램 페이지</a>
                    </p>
                </p>
                <br />
                <p id="hola-introduce">
                    <h1>HOLA(Hands On Language Application) 소개</h1>
                    <p className="text-body">
                        {introduce_text[1]}
                    </p>
                </p>
            </div>
        )
    }
}

export default withRouter(MainPage);