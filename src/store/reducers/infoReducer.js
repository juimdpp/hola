import * as actionTypes from '../actions/actionTypes';

const initialState = {
  notices: '',
  temp: 'h'
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_ALL_NOTICES:
      return {...state, notices: action.notices, temp: 'g'};
    default:
      break;
  }
  return state;
};

export default reducer;