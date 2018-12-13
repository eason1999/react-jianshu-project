import { fromJS } from 'immutable';
import axios from './../../../utils/http';
import { GET_FOCUS_LIST } from './actionTypes'; 

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/recommendations/users').then(res => {
      console.log(res)
      dispatch({
        type: GET_FOCUS_LIST,
        list: fromJS(res.records)
      })
    })
  }
}
