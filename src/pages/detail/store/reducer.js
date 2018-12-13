import { fromJS } from 'immutable';
import { GET_COMMENT_LIST } from './actionTypes';

const initState = fromJS({
  commentList: []
})

export default (state = initState, action) => {
  switch (action.type) {
    case GET_COMMENT_LIST:
      return state.set('commentList', action.list)
    default:
      return state
  }
}