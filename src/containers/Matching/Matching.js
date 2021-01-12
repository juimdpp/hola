import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import StylishButton from '../../components/StylishButton/StylishButton';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';

import * as actionCreators from '../../store/actions/index'
import './Matching.scss';

const matching_introduce_text = ' 맛보기 매칭이란, 수화 회화를 처음 시작할 때 시간, 관심사가 비슷한 \n사람들과 만나 자유롭게 수화 회화를 할 수 있는 단기성 매칭입니다.\n맛보기 매칭을 통해 자신에게 맞는 사람을 찾고 정기매칭까지 해보세요.';
    const caution_message = [
        '*원활한 매칭을 위해 가능한 시간을 최대한 많이 기입해주세요!',
        '\'내 정보\'에 기입된 내용을 바탕으로 매칭이 이루어집니다. 2주 이내에 일정이 이전에 기입된 내용과 동일하다면, 위 칸에 \'변동 없음\'이라고 적어주세요. 변동이 있는 경우 변동사항을 구체적으로 적어주세요!',
    ];

class Matching extends Component{
    state = {
        time: '',
        level: '1'
    }
    componentDidMount(){
        this.props.checkLogin().then(res => {
            if(!res){
                alert('Please login');
                this.props.history.push('/login')
            }else{
                console.log("Matching request")
            }
        })
    }
    onClickMatching = () => {
        this.props.matchingRequest(this.state).then( res => {
            if(!res){
                alert("이미 매칭을 신청하였습니다. 한번 이상 신청은 불가합니다.")
            }
            else{
                alert("매칭이 신청되었습니다.");
                this.props.history.push('/matching-list/')
            }
        })
    }
    inputHandler(event){
        this.setState({time: event.target.value})
    }
    addSelectedLevelHandler(event){
        this.setState({level: event.target.value})
    }

    render(){
    return(
        <div id="matching">
            <div id="matching-title">
                <h1>맛보기 매칭</h1>
            </div>
            <div id="matching-body">
                <div id="matching-introduce" className="flex-item">
                    <EmojiPeopleRoundedIcon color="primary" className="icon" />
                    <h3>맛보기 매칭이란?</h3>
                    <p>{matching_introduce_text}</p>
                </div>
                <div id="matching-form" className="flex-item">
                    <div className="row">
                        <ErrorOutlineRoundedIcon color="secondary" className="icon inline" />
                        <h2>필수기입사항</h2>
                    </div>
                    <div className="row">
                        <EmojiPeopleRoundedIcon color="inherit" className="icon inline" />
                        <h3>2주 이내 매칭 가능 시간대</h3>
                    </div>
                    <p className="caution">{caution_message[0]}</p>
                    <textarea 
                        id="matching-prefer-date"
                        name="prefer-date"
                        rows="8"
                        col="50"
                        value={this.state.time}
                        onChange={(event) => this.inputHandler(event)}
                        placeholder="ex)월요일 14시~17시" />
                    <div className="row">
                        <EmojiPeopleRoundedIcon color="inherit" className="icon inline" />
                        <h3>원하는 상대방의 실력</h3>
                    </div>
                    <div className="row">
                        <select value={this.state.level} onChange={(event) => this.addSelectedLevelHandler(event)}>
                        <option id='level' value="1">레벨 1</option>
                        <option id='level' value="2">레벨 2</option>
                        <option id='level' value="3">레벨 3</option>
                        <option id='level' value="4">레벨 4</option>
                        </select>
                    </div>
                    <p className="caution">{caution_message[1]}</p>
                </div>
                <StylishButton id="matching-apply-button" onClick={this.onClickMatching} text="매칭신청" />
            </div>
        </div>
    );
    }
}

const mapStateToProps = state => {
    return {};
}
const mapDispatchToProps = dispatch => ({
    checkLogin: () => dispatch(actionCreators.currentUser()),
    matchingRequest: (info) => dispatch(actionCreators.requestMatching(info))
});

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Matching));