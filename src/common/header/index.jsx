import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  HeaderDiv,
  InnerDiv,
  LogoDiv,
  WriteBtn,
  RegisterDiv,
  LoginDiv,
  ModeDiv,
  Nav,
  NavItem,
  SearchInput,
  SearchWrap,
  SearchTop,
  HotSearch,
  Change,
  SearchTag,
  Tag
} from './style';
import { headerAction } from './store';
import { CSSTransition } from 'react-transition-group';
const logoUrl = require('./../../static/img/logo.png');

class Header extends Component {
  render() {
    const {
      list,
      currentPage,
      pageSize,
      focused,
      mouseIn,
      handleFocus,
      handleBlur,
      handleMouseOver,
      handleMouseOut,
      handleClick
    } = this.props;

    let newList = list.toJS(), searchList = [];

    for (let i = (currentPage - 1) * 10, total = currentPage * 10; i < total; i++) {
      searchList.push(
        <Tag key={i}>{newList[i]}</Tag>
      )
    }

    const searchWrap = () => {
      return (
        <SearchWrap onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <SearchTop>
            <HotSearch>热门搜索</HotSearch>
            <Change onClick={() => handleClick(currentPage, pageSize)}><i className="iconfont icon-xunhuan"></i>换一批</Change>
          </SearchTop>
          <SearchTag>
            {searchList}
          </SearchTag>
        </SearchWrap>
      )
    }
    return (
      <HeaderDiv>
        <InnerDiv>
          <LogoDiv logoUrl={logoUrl} />
          <Nav>
            <NavItem className="first">
              <i className="icon iconfont icon-zhinanzhenfaxiandaohangdizhiweizhi"></i>首页
            </NavItem>
            <NavItem className="second">
              <i className="icon iconfont icon-ai231"></i>下载App
            </NavItem>
            <NavItem className="third">
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide">
                <Fragment>
                  <SearchInput
                    className={focused ? 'ipt-focused' : ''}
                    onFocus={() => handleFocus(list)}
                    onBlur={handleBlur}></SearchInput>
                  <i className={focused ? 'iconfont icon-fangdajing focused' : 'iconfont icon-fangdajing'}></i>
                </Fragment>
              </CSSTransition>
              {(() => {
                if (focused || mouseIn) {
                  return searchWrap();
                }
                return null
              })()}
            </NavItem>
          </Nav>
          <WriteBtn>
            <i className="iconfont icon-weibiaoti1"></i>写文章
          </WriteBtn>
          <RegisterDiv>注册</RegisterDiv>
          <LoginDiv>登录</LoginDiv>
          <ModeDiv>
            <i className='iconfont icon-Aa'></i>
          </ModeDiv>
        </InnerDiv>
      </HeaderDiv>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    currentPage: state.getIn(['header', 'currentPage']),
    pageSize: state.getIn(['header', 'pageSize'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(list) {
      if (!list.size) {
        dispatch(headerAction.requestSearchKeyWord())
      }
      dispatch(headerAction.inputFoucs())
    },
    handleBlur() {
      dispatch(headerAction.inputBlur())
    },
    handleMouseOver() {
      dispatch(headerAction.mouseIn())
    },
    handleMouseOut() {
      dispatch(headerAction.mouseOut())
    },
    handleClick(currentPage, pageSize) {
      dispatch(headerAction.addPageSize(currentPage, pageSize))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);