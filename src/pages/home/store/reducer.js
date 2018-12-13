import { fromJS } from 'immutable';
import { GET_CONTENT_LIST, GET_AUTHOR_LIST, TOGGLE_SHOW } from './actionTypes';

const initState = fromJS({
  contentList: [],
  authorList: [],
  isShow: false
})

export default (state = initState, action) => {
  switch (action.type) {
    case GET_CONTENT_LIST:
      let list = state.get('contentList').concat(action.list)
      return state.set('contentList', list)
    case GET_AUTHOR_LIST:
      return state.set('authorList', action.list)
    case TOGGLE_SHOW:
      return state.set('isShow', action.bool)
    default:
      return state
  }
}