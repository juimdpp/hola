import React, {Component} from 'react';
import './Header.scss';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { requirePropFactory } from '@material-ui/core';
import * as actionCreators from '../../store/actions/index'
import logo from './logo.png';

class Header extends Component{
	state = {
		currentUser: ''
	}

	componentDidMount(){
		this.props.getCurrentUser().then((res) => {
			if(res){
				this.setState({currentUser: res.username})
			}
		})
		// const storedUser = window.localStorage.getItem('currentUser');
		// this.setState({currentUser: storedUser?storedUser:''})
	}

	signupHandler = () => {
		this.props.history.push('/signup/');
	}
	loginHandler= () => {
		this.props.history.push('/login/');
		// alert("안녕하세요 송도관님, 좋은 밤입니다.");
		// window.localStorage.setItem('currentUser', '송도관');
		// this.setState({currentUser: '송도관'});
	}
	logoutHandler= () => {
		
		// window.localStorage.removeItem('currentUser');
		// this.setState({currentUser: ''});
		this.props.onLogout().then(res => {
			alert("안녕히 가세요.");
			window.location.reload()
		});
	}
	mypageHandler = () => {
		this.props.history.push('/mypage');
	}
	render(){
		// console.log("slkdj")
		return (
//src={'data:image/png;base64,'+require('./logo.png')}
			<div id="header">
				<div id="logo" className="grid-item">
					<img id="hola-logo" src={logo} alt="HOLA logo" onClick={() => this.props.history.push('/main-page')} />
				</div>
				<div id="navigation" className="grid-item">
					<button id="introduction-tap" type="button" onClick={() => this.props.history.push('/introduction')}>
						소개
					</button>
					<button id="matching-tap" type="button" onClick={() => this.props.history.push('/matching')}>
						매칭
					</button>
					<button id="notice-tap" type="button" onClick={() => this.props.history.push('/notice')}>
						공지사항
					</button>
					<button id="help-tap" type="button" onClick={() => this.props.history.push('/help')}>
						Q&amp;A
					</button>
				</div>
				<div id="right-header-buttons" className="grid-item">
					{this.state.currentUser 
						? <button 
							id="logout-button"
							type="button"
							onClick={() => this.logoutHandler()}>로그아웃</button>
						: <button
							id="login-button"
							type="button"
							onClick={() => this.loginHandler()}>로그인</button>}

						{/* <button 
							id="logout-button"
							type="button"
							onClick={() => this.logoutHandler()}>로그아웃</button>
						<button
							id="login-button"
							type="button"
							onClick={() => this.loginHandler()}>로그인</button> */}
					
					{this.state.currentUser
						? <button
							id="mypage-button"
							type="button"
							onClick={() => this.mypageHandler()}>마이페이지</button>
						: <button 
							id="signup-button" 
							type="button" 
							onClick={() => this.signupHandler()}>회원가입</button>}
				</div>
			</div>
		);
	}
} 

const mapStateToProps = state => {
	return {
		 
	};
}

const mapDispatchToProps = dispatch => {
	return {
			getCurrentUser: () => dispatch(actionCreators.currentUser()),
			onLogout: () => dispatch(actionCreators.logout()),
			}
	}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header));