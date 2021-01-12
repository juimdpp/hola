import React, {Component}  from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import GoBack from '../../components/GoBack/GoBack';
import ReactHtmlParser from 'react-html-parser';

import * as actionCreators from '../../store/actions/index'
import './Notice.css'

// const notice = ["HOLA 수어 스터디 시범 운영
// HOLA 수어 스터디 시범 운영에 참여해주셔서 감사합니다.
// 첫 번째 시범운영 날짜는 2020년 10월 9일 오전 10시부터 10시 20분까지입니다. 다음 페이지 부터는 수어 스터디에서 활용할 수 있는 자료입니다. 시범운영 전까지 찬찬히 읽어보시고 스터디 에 참고하시면 좋을 것 같습니다.
// 수어 스터디에서 숙지해야 할 사항은 다음과 같습니다.
// 1. 음소거를 한 후 진행해주세요. 대화는 오직 수어와 채팅을 이용한 필담으로만 이루어집니다.
// 2. 대화를 하던 중 상대방의 수어를 정확하게 보지 못하여 다시 보고 싶을 때는 수어로 ‘다시’ 라고 말해주세요!(다시: 오른손 주먹을 쥔 채 엄지, 검지 손가락만 펴서 칼로 허공을 베듯이 대각 선 위에서 아래로 내려줍니다.) 상대방이 ‘다시’라고 말하면 직전에 말한 수어를 다시 보여주시면 됩니다. 아래 블로그에서 영상을 시청하시는 것을 추천드립니다!
// https://blog.naver.com/ixdus97/221601636254
// 3. 대화를 하던 중 상대방의 수어를 이해하지 못한다면 수어로 ‘써 주세요’라고 말해주세요!
// 상대방이 ‘써 주세요’라고 말하면 채팅을 이용해서 직전에 말한 수어를 글로 다시 써줍니다.
// 몰라서 글로 알게 된 수어는 화면 상에서 따라해 본 후 상대방에게 확인을 받으면 더 좋습니다.
// 4. 본 시범운영은 HOLA 팀의 프로젝트의 참고 자료로서 활용됩니다. 때문에 녹화되거나 HOLA 관계자가 참관할 수 있습니다. 이 부분은 카톡 등을 이용해서 다시 말씀드리겠습니다.
// 5. 시범운영이 끝난 후 피드백 자료를 작성해주시면 감사하겠습니다."]


class Notice extends Component{
  state = {
    display: false
  }

	render(){		
		return (	
			<div className="notice">
				<p id="title" onClick={() => this.setState({display: !this.state.display})}>{this.props.title}</p>
        {this.state.display && <p id="body">{ReactHtmlParser(this.props.body)}</p>}
			</div>);
	}
	
}

const mapStateToProps = state => {
	return {
		notices: state.info.notices
	}
}
const mapDispatchToProps = dispatch => ({
	getNotices: () => dispatch(actionCreators.getNotices())
});

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Notice));