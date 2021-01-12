import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

import './GoBack.css'
class GoBack extends Component{
    onClickGoBack(){
        this.props.history.push('/main-page')
    }
    render(){
        return(<button id="go-back" onClick={()=>this.onClickGoBack()}>돌아가기</button>);
    }
}

export default withRouter(GoBack);