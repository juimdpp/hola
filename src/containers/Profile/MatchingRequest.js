import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import { withRouter } from 'react-router-dom'

//Local imports
//import * as actionCreators from '../../../store/actions/index'
import './MatchingRequest.css'
//TODO:
//should connect to store
class matchingRequest extends Component{
    state = {
        request: '',
        partner: {
            username: 'hola_user2',
            level: '레벨 4'
        },
        renderLong: false,
        renderShort: false,
        renderRequest: true,
        zoomURL: 'zoom.com/url/for/matching',
        zoomID: 'hola_user1'
    }
    componentDidMount(){
        this.setState({request: {requestedTime: window.localStorage.getItem('matchingRequest')}})
    }
    longRequestHandler(){
        this.setState({renderLong: true})
    }
    shortRequestHandler(){
        this.setState({renderShort: true})
        this.setState({renderRequest: false})
    }
    onClickGoBack(){
        this.props.history.push('/main-page/')
    }

    render(){ 
        return(
            <div className = 'MatchingRequest'>
                <h3>My matching</h3>
                {this.state.renderLong && 
                <div className='long-time-matching'>
                    <h4>장기 매칭 신청</h4>
                    <label>매칭 유형</label>
                    <p id='p'>장기 매칭</p>
                    <label>매칭 상대 닉네임</label>
                    <p id='p'>{this.state.partner.username}</p>
                    <br/>
                    <label>매칭 상대 실력</label>
                    <p id='p'>{this.state.partner.level}</p>
                    <br/>
                    <label>매칭 시간</label>
                    <p id='p'>{this.state.request['requestedTime']}</p>
                    <label>회의 링크</label>
                    <p id='p'>{this.state.zoomURL}</p>
                    <label>회의 ID</label>
                    <p id='p'>{this.state.zoomID}</p>
                </div>
                }
                {this.state.renderShort && 
                <div className='short-time-matching'>
                    <h4>단기 매칭 신청 완료!</h4>
                    <label>매칭 유형</label>
                    <p id='p'>단기 매칭</p>
                    <label>매칭 상대 닉네임</label>
                    <p id='p'>{this.state.partner.username}</p>
                    <br/>
                    <label>매칭 상대 실력</label>
                    <p id='p'>{this.state.partner.level}</p>
                    <br/>
                    <label>매칭 시간</label>
                    <p id='p'>{this.state.request['requestedTime']}</p>
                    <label>줌 링크</label>
                    <p id='p'>{this.state.zoomURL}</p>
                    <br/>
                    <button onClick={() => this.onClickGoBack()}>다른 매칭 알아보기</button>
                    <button onClick={() => this.longRequestHandler()}>정기 매칭 신청하기</button>
                </div>}
                {this.state.renderRequest && 
                    <div className='request'>
                    <h4>단기 매칭 신청 요청</h4>
                    <label id='label'>매칭 유형</label>
                    <p id='p'>단기 매칭</p>
                    <label id='label'>요청 매칭 상대 실력</label>
                    <p id='p'>{this.state.partner.level}</p>
                    <br/>
                    <label id='label'>요청 매칭 시간</label>
                    <p id='p'>{this.state.request['requestedTime']}</p>
                    <br/>
                    <button onClick={() => this.onClickGoBack()}>다른 매칭 알아보기</button>
                    <button onClick={() => this.shortRequestHandler()}>단기 매칭 성사 완료!</button>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       
    };
}
  
const mapDispatchToProps = dispatch => {
    return {
//        onLogin: (userCredentials) => dispatch(actionCreators.login(userCredentials)),

        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(matchingRequest));