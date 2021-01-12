import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import GoBack from '../../components/GoBack/GoBack';
import './Introduction.css';

const intro = ["HOLA웹은 Hands On Language Application web이란 뜻으로 청각장애인의 언어인 ‘수어’로 장애의 유무와 관계없이 직접 소통할 수 있는 플랫폼입니다. \
                    즉, 청각장애인에 대한 인식을 제고하고 소통을 증진하는 배리어프리(barrier free) 수어 회화 매칭 사이트입니다.",
                "*배리어프리(barrier-free)는 사회적 약자들이 살기 좋은 사회를 만들기 위하여 장벽을 허물자는 운동입니다.",
                "우리는 사회속에서 개성을 가진 타자와 함께 살아갑니다. 각자 다른 우리의 개성은 소통을 통해 다양한 색을 낼 수 있습니다. \
                소통은 단순히 타인의 존재에 대한 인정에서 나아가 타인에 대한 이해가 필요합니다. 충분한 소통이 이루어지기 위해서는 각기 다른 서로의 환경에 대한 이해할 기회와 여건을 제공해야 합니다. \
                그러나 청각 장애인의 실태를 알아보기 위한 설문조사 결과 청각 장애인의 소통은 대부분 가족과 통역사와의 교류에 한정되어 있었습니다. 청각장애인과 비장애인 사이의 소통은 플랫폼 부재로 시작될 수 없었습니다.",
                "저희 HOLA팀은 Web을 선택하여 컴퓨터와 핸드폰 모두를 사용할 수 있는 있도록 플랫폼을 구상하였습니다. 1:1, 혹은 세명 이상을 동시에 매칭해서 회화 연습을 하도록 진행합니다. \
                실력과 시간대를 고려하여 매칭할 때 ‘배리어프리’라는 목적에 맞게 청각장애인 사용자가 한 명 이상 포함되도록 진행할 예정입니다. \
                장애의 유무와 상관없이 플랫폼을 이용할 수 있도록 스터디를 진행할 때 장애 여부에 대한 사전 정보를 제공하지 않습니다. \
                이를 위해 ZOOM에서 마이크를 사용하지 않고 회화를 진행합니다. 또한, 원활한 소통을 위하여 매칭할 때마다 간단한 단어와 대화 주제를 담은 매뉴얼을 제공합니다. \
                웹의 <공지사항>에서 web 사용 시 지켜야 할 규칙과 미션이 제공됩니다.",
                "우리는 같이 있어 가치 있는 사회 속에서 살아갑니다. 각자의 개성을 이해하여 더불어 살아가는 사회를 위한 첫 걸음, HOLA와 함께해주세요. "]


class Introduction extends Component{
    render(){
        return(
            <div className="Introduction">
                <h1>HOLA의 소개</h1>
                <p>{intro[0]}</p>
                <p id="subtext">{intro[1]}</p>
                <p>{intro[2]}</p>
                <p>{intro[3]}</p>
                <p>{intro[4]}</p>
                <GoBack history={this.props.history} />
            </div>
        )
    }
}

export default withRouter(Introduction);