import * as actionTypes from './actionTypes';
import { push } from 'connected-react-router';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';


const signUp_ = (userCredentials) => {
  console.log(userCredentials)
  return { type: actionTypes.SIGN_UP, user: userCredentials};
};
export const signUp = (userCredentials) => {
  return dispatch => {
    console.log(userCredentials)
    return axios.post('/api/signup/', userCredentials)
    .then(res => {
      dispatch(signUp_(res.data));
      return true;
    })
    .catch(() => {
      return false;
    })
  };
};

const login_ = (userCredentials) => {
  return {type: actionTypes.LOGIN, user: userCredentials};
};
export const signin = (userCredentials) => {
  return dispatch => {
    return axios.post('/api/signin/', userCredentials).then((res) => {
        dispatch(login_(res.data))
        return true;
    })
    .catch(function(){
      return false
    })
  }
}

const currentUser_ = (login_id) => {
  return {type: actionTypes.GET_CURRENT_USER, currentUser: login_id}
}
export const currentUser = () => {
  return dispatch => {
    return axios.get('/api/currentUser/').then(res => {
      dispatch(currentUser_(res.data))
      if(res.data.id == '0')
        return false;
      else
        return res.data;
    })
    .catch(function(){
      return false
    })
  }
}


const logout_ = (userCredentials) => {
  return {type: actionTypes.LOGOUT, user: userCredentials};
};
export const logout = () => {
  return dispatch => {
    return axios.get('/api/logout/')
      .then(res => dispatch(logout_(res.data)))
  }
}



