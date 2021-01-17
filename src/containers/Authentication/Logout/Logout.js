import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import { withRouter } from 'react-router-dom'

//Local imports
import './Logout.css'
import * as actionCreators from '../../../store/actions/index'

//TODO:
//should connect to store
class Login extends Component{
    state = {
        id: '',
        password: '',
        logged_in: false
    }

    onClickSubmit(){
        console.log("erewlkjx")
        //this.props.onSignup
        var userCredentials = this.state;
        console.log(userCredentials)
        this.setState({logged_in: true})
        this.props.onLogin(userCredentials)
        window.localStorage.setItem('currentUser', JSON.stringify(userCredentials))
        this.props.history.push('/main-page')
    }
    render(){
        return(
            <div className = 'LoginBackground'>
                <div className="Login">
                    <form className="Login" >
                        <label> HOLA </label>
                        <input type="text" name="id"  placeholder = "아이디" onChange={(event) => this.setState({id: event.target.value})}></input>
                        <input type="text" name="password" placeholder = "비밀번호" onChange={(event) => this.setState({password: event.target.value})}></input>
                        <button className="LoginButton" onClick={()=>this.onClickSubmit()}>로그인</button>
                    </form>
                </div>
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
        onLogin: (userCredentials) => dispatch(actionCreators.login(userCredentials)),

        }
    }

    export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));