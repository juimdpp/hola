import * as actionTypes from '../actions/actionTypes';

const initialState = {
  currentUser: '',
  getuser: null,
}

const reducer = (state = initialState, action) => {
  //  switch (action.type) {
  //    case actionTypes.SIGN_UP:
  //      return { ...state, currentUser: action.user };

  //    default:
  //      break;
  //  }
  switch(action.type) {
    case actionTypes.GET_CURRENT_USER:
      return {...state, currentUser: action.login_id};
    // case actionTypes.LOGIN:
    //   return {...state, getuser: action.getuser};
    case actionTypes.LOGOUT:
      return {...state, getuser: action.getuser}
  }
  return state;
};

export default reducer;