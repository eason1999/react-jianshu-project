import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ContnentListWrap } from './../../style';
import styled from './../../styled.css';
import { homeActionCreators } from './../../store';

class Contentlist extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    const {
      list,
      handleGetList
    }  = this.props;
    const contentList = list.toJS();
    return (
      <ContnentListWrap>
        <ul className={styled.contentList}>
          {
            contentList.map((item, index) => {
              return (
                <li key={index} className={styled.li}>
                  <div className={styled.contentWrap}>
                    <h2 className={styled.title} onClick={() => {this.context.router.history.push({
                      pathname: 'detail',
                      state: {
                        id: item.id
                      }
                    })}}>{item.title}</h2>
                    <p className={styled.content}>{item.content}</p>
                    <div className={styled.author}>
                      <a href="javascript:void(0);">{item.author}</a>
                      <a href="javascript:void(0);"><i className="iconfont icon-duihuaxinxitianchong"></i>{item.comment}</a>
                      <span><i className="iconfont icon-aixin"></i>{item.praise}</span>
                    </div>
                  </div>
                  <div className={styled.imgWrap} onClick={() => {this.props.history.push({
                    pathname: 'detail',
                    state: {
                      id: item.id
                    }
                  })}}>
                    <img className={styled.img} src={item.imgSrc} alt=""/>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <a className={styled.readBtn} href="javascript:void(0);" onClick={handleGetList}>阅读更多</a>
      </ContnentListWrap>
    )
  }

  componentDidMount() {
    this.props.handleGetList()
  }

}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'contentList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetList() {
      dispatch(homeActionCreators.getList())
    }
  }
}


Contentlist.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Contentlist);