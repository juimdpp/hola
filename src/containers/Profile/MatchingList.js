import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import { withRouter } from 'react-router-dom'

import MatchingRequest from './MatchingRequest';
import * as actionCreators from '../../store/actions/index'
import './MatchingList.css'
//TODO:
//should connect to store
class MatchingList extends Component{
    state = {
        init_requests: [],
        requests: []
    }
    componentDidMount(){
        let requests = []
        this.props.getRequests().then(res => {
            if(res){
                requests = res.request
                this.setState({requests: requests})
            }
            else{
                this.setState({requests: []})
            }
        })           
    }
    onClickGoBack(){
        this.props.history.push('/main-page/')
    }
    onClickDelete(id){
        this.props.deleteRequest(id).then(() => {
            alert('Request deleted')
            window.location.reload()
        })
    }

    render(){
        let requests = this.state.requests.length == 0 
                        ? <h3>There are no requests. Please make a request</h3> 
                        : this.state.requests.map((req) => (
                            <div className="request" key={req.id}>
                                <button id="deleteButton" onClick={() => this.onClickDelete(req.id)}>Delete</button>
                                <table id='requestInfo'>
                                    <tr id="row">
                                        <th>Requested Time:</th>
                                        <td>{req.requestedTime}</td>
                                    </tr>
                                    <tr>
                                        <th>Requested Level:</th>
                                        <td>{req.requestedLevel}</td>
                                    </tr>
                                    <tr>
                                        <th>Created date:</th>
                                        <td>{req.createdDate}</td>
                                    </tr>
                                    <tr>
                                        <th>Status:</th>
                                        <td>{req.status}</td>
                                    </tr>
                                    <tr>
                                        {req.status == 'accepted' && <th>Change status date:</th>}
                                        {req.status == 'accepted' && <td>{req.statusChangeDate}</td>}
                                    </tr>
                                    <tr>
                                        {req.status == 'accepted' && <th>Other user</th>}
                                        {req.status == 'accepted' && <td>{req.opponent}</td>}
                                    </tr>
                                    <tr>
                                        {req.status == 'accepted' && <th>Zoom URL</th>}
                                        {req.status == 'accepted' && <td>{req.zoomURL}</td>}
                                    </tr>
                                </table>
                            </div>
        ))
        return(
            <div className = 'MatchingList'>
                <h2>Requests I have made</h2>
                <div>{requests}</div>
                <button className="GoBack" onClick={()=>this.onClickGoBack()}>Go Back</button>
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
            getRequests: () => dispatch(actionCreators.getRequests()),
            deleteRequest: (id) => dispatch(actionCreators.deleteRequest(id)),
            getZoomLink: (id) => dispatch(actionCreators.getSingleMatching(id))
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MatchingList));