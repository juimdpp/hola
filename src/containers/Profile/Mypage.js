import React from 'react';
import { NavLink } from 'react-router-dom';
import GoBack from '../../components/GoBack/GoBack';

import './Mypage.css'

const Mypage = ({ history }) => {
	return (
		<div className='Mypage'>
			<h2>마이페이지</h2>
			<NavLink to="/matching-list" exact>Matching list</NavLink>
			<br/>
			<GoBack history={history} />
		</div>);
};

export default Mypage;
