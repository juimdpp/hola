import * as actionTypes from './actionTypes';
import { push } from 'connected-react-router';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const requestMatching_ = (userCredentials) => {
  console.log(userCredentials)
  return { type: actionTypes.REQUEST_MATCHING, getuser: userCredentials};
};
export const requestMatching = (application) => {
  return dispatch => {
    return axios.post('/api/request/', application)
    .then(res => {
      if(res.status == 204){
        return false
      }
      else if(res.status= 200){
        return dispatch(requestMatching_(res.data))
      }
    })
  }
}

const getRequests_ = (data) => {
  console.log(data)
  return { type: actionTypes.GET_REQUEST, request: data}
}
export const getRequests = () => {
  return dispatch => {
    return axios.get('/api/request/')
      .then(res => {
        if(res.status == 204){ // no requests made
          return false
        }
        else{
          return dispatch(getRequests_(res.data))
        }
      })
  }
}

const deleteRequest_ = (data) => {
  console.log(data)
  return { type: actionTypes.DELETE_REQUEST, request: data}
}
export const deleteRequest = (index) => {
  console.log(index)
  return dispatch => {
    return axios.delete(`/api/request/${index}`)
      .then(res => {
        dispatch(deleteRequest_(res.data))
      })
      .catch(function(){
        return false
      })
  }
}

const getSingleMatching_ = (data) => {
  return { type: actionTypes.GET_SINGLE_MATCHING, request: data}
}
export const getSingleMatching = (index) => {
  return dispatch => {
    return axios.get(`/api/singlematch/${index}`)
      .then(res => {
        return dispatch(getSingleMatching_(res.data))
      })
      .catch(function(){
        return false
      })
  }
}