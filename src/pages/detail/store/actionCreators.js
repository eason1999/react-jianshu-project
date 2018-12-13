import { fromJS } from 'immutable';
import axios from './../../../utils/http';
import { GET_COMMENT_LIST } from './actionTypes';

export const getCommentList = () => {
  return (dispatch) => {
    axios.get('/api/comments/list').then(res => {
      console.log(res)
      dispatch({
        type: GET_COMMENT_LIST,
        list: fromJS(res.records)
      })
    })
  }
}