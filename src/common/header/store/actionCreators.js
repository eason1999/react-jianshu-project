
import { fromJS } from 'immutable';
import { INPUT_FOCUS, INPUT_BLUR, MOUSE_IN, MOUSE_OUT, ADD_KEY_LIST, ADD_PAGE_SIZE } from './actionTypes';
import axios from './../../../utils/http';

export const inputFoucs = () => ({
  type: INPUT_FOCUS
})

export const inputBlur = () => ({
  type: INPUT_BLUR
})

export const mouseIn = () => ({
  type: MOUSE_IN
})

export const mouseOut = () => ({
  type: MOUSE_OUT
})

export const addPageSize = (currentPage, pageSize) => {
  currentPage += 1
  if (currentPage > pageSize) {
    currentPage = 1
  }
  return {
    type: ADD_PAGE_SIZE,
    currentPage
  }
}
export const requestSearchKeyWord = () => {
  return (dispatch) => {
    axios.get('/api/trending_search').then(res => {
      dispatch({
        type: ADD_KEY_LIST,
        list: fromJS(res.records)
      })
    })
  }
}
