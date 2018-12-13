import { fromJS } from 'immutable';
import axios from './../../../utils/http';
import { GET_CONTENT_LIST, GET_AUTHOR_LIST, TOGGLE_SHOW } from './actionTypes'; 

export const getList = () => {
  return (dispatch) => {
    axios.post('/api/trending_notes/list').then(res => {
      console.log(res)
      dispatch({
        type: GET_CONTENT_LIST,
        list: fromJS(res.records)
      })
    })
  }
}

export const getAuthorList = () => {
  return (dispatch) => {
    axios.get('/api/users/recommended').then(res => {
      console.log(res)
      dispatch({
        type: GET_AUTHOR_LIST,
        list: fromJS(res.records)
      })
    })
  }
}

export const toggleShow = (bool) => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_SHOW,
      bool
    })
  }
}