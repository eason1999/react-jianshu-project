import { fromJS } from 'immutable';
import { GET_FOCUS_LIST } from './actionTypes';

const initState = fromJS({
  foucsList: []
})

export default (state = initState, action) => {
  switch (action.type) {
    case GET_FOCUS_LIST:
      let list = state.get('foucsList').concat(action.list)
      return state.set('foucsList', list)
    default:
      return state
  }
}