import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from './../../styled.css';
import { homeActionCreators } from './../../store';

class Asideauthor extends Component {

  render() {
    const { list, handleClick }  = this.props;
    const authorList = list.toJS();
    return (
      <div className={styled.recommendWrap}>
        <div className={styled.titleWrap}>
          <span>推荐作者</span>
          <span className={styled.changeIcon} onClick={() => {handleClick(this.spinIcon)}}><i ref={(icon) => {this.spinIcon = icon}} className="iconfont icon-xunhuan"></i>换一批</span>
        </div>
        <ul className={styled.recommendList}>
        {
          authorList.map((item, index) => {
            return (
              <li key={index} className={styled.recommendLi}>
                <img className={styled.img} src={item.avatar_source} alt="" />
                <div className={styled.content}>
                  <a href="javascript:void(0);" className={styled.title}>{item.nickname}</a>
                  <p className={styled.num}>写了{item.total_wordage}k字，{item.total_likes_count}k喜欢</p>
                </div>
                <a className={styled.focus} href="javascript:void(0);">+关注</a>
              </li>
            )
          })
        }
        </ul>
        <Link className={styled.searchBtn} to='/recommend'>查看全部 ></Link>
      </div>
    )
  }

  componentDidMount() {
    this.props.getList()
  }

}


let num = 1

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'authorList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getList() {
      dispatch(homeActionCreators.getAuthorList())
    },
    handleClick(spin) {
      num++
      spin.style.transform = `rotate(${360*num}deg)`
      dispatch(homeActionCreators.getAuthorList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Asideauthor);