import * as actionTypes from './actionTypes';
import { push } from 'connected-react-router';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const getNotices_ = (data) => {
  return { type: actionTypes.GET_ALL_NOTICES, notices: data};
};
export const getNotices = () => {
  return dispatch => {
    return axios.get('/api/notices/')
    .then(res => {
      dispatch(getNotices_(res.data))
      return true;
    })
  }
}