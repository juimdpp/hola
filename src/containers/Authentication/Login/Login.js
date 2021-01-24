import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import { withRouter } from 'react-router-dom'

//Local imports
import * as actionCreators from '../../../store/actions/index'
import './Login.css'
//TODO:
//should connect to store
class Login extends Component{
    state = {
        username: '',
        password: '',
    }

    onClickSubmit(event){
        event.preventDefault();
        var userCredentials = {
            username:this.state.username,
            password:this.state.password}
        this.props.onLogin(userCredentials).then(res => {
            if(res){
                alert('Welcome!')
                this.props.history.push('/main-page')
                window.location.reload()
            }
            else{
                alert('Username or Password incorrect')
            }
        })
        console.log("hello")
        // window.localStorage.setItem('currentUser', JSON.stringify(userCredentials))
        
    }
    render(){
        return(
            <div className = 'LoginBackground'>
                <div className="Login">
                    <form className="Login" >
                        <label> ID </label>
                        <input type="text" name="id" onChange={(event) => this.setState({username: event.target.value})}></input>
                        <label> PW </label>
                        <input type="text" name="password" onChange={(event) => this.setState({password: event.target.value})}></input>
                        <button className="LoginButton" onClick={(event)=>this.onClickSubmit(event)}>로그인</button>

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
        onLogin: (userCredentials) => dispatch(actionCreators.signin(userCredentials)),

        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));