import { fromJS } from 'immutable';
import { INPUT_FOCUS, INPUT_BLUR, MOUSE_IN, MOUSE_OUT, ADD_KEY_LIST, ADD_PAGE_SIZE } from './actionTypes'
const initState = {
  focused: false,
  mouseIn: false,
  list: [],
  pageSize: 1,
  currentPage: 1
}

export default (state = fromJS(initState), action) => {
  switch (action.type) {
    case INPUT_FOCUS:
      return state.set('focused', true)
    case INPUT_BLUR:
      return state.set('focused', false)
    case MOUSE_IN:
      return state.set('mouseIn', true)
    case MOUSE_OUT:
      return state.set('mouseIn', false)
    case ADD_KEY_LIST:
      return state.merge({
        'list': action.list,
        'pageSize': Math.ceil(action.list.size / 10)
      })
    case ADD_PAGE_SIZE:
     return state.set('currentPage', action.currentPage)
    default:
      return state;
  }
}
