import React, {Component}  from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import GoBack from '../../components/GoBack/GoBack';

import * as actionCreators from '../../store/actions/index'
import './Notices.css'
import Notice from './Notice'

class Notices extends Component{
	componentDidMount(){
		this.props.getNotices()
	}

	render(){
		let notice = ''
		notice = this.props.notices && this.props.notices.map(not => (
			<div>
				<Notice id={not.id} title={not.title} body={not.notice}>{not.title}</Notice>
			</div>
		))		
		return (	
			<div className="notices">
				<button id="notice-tap" type="button" onClick={() => {this.props.history.push('/pdf/')
								window.location.reload()}}>매뉴얼
				</button><br/>
				<h3>공지사항</h3>
				{notice}
				<br/>
				<GoBack history={this.props.history} />
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Notices));