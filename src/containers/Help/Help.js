import React from 'react';
import GoBack from '../../components/GoBack/GoBack';

const Help = ({ history }) => {
	return (
		<div>
			<p>Q&amp;A</p>
			<h3>문의사항이 있으면 hola.vess.official@gmail.com 로 메일 문의 주세요!</h3>
			<GoBack history={history} />
		</div>);
};

export default Help;
