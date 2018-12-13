import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Homediv,
  Contentdiv,
  Asidediv,
  Codewrap,
  Backtop
} from './style';
import Asideauthor from './components/asideauthor';
import Asideborder from './components/asideborder';
import Banner from './components/banner';
import Contentlist from './components/cotentlist';
import { homeActionCreators } from './store';

class Home extends Component {

  constructor(props) {
    super(props)
    this.backUp = this.backUp.bind(this)
  }

  render() {
    const { isShow } = this.props;
    return (
      <Homediv>
        <Contentdiv>
          <Banner />
          <Contentlist></Contentlist>
        </Contentdiv>
        <Asidediv>
          <Asideborder></Asideborder>
          <Codewrap>
            <div className="codeWrap">
              <img src={require('./../../static/img/code.png')} alt=""/>
            </div>
            <div className="codeContent">
              <p>下载简书手机App ></p>
              <p>随时随地发现和创作内容</p>
            </div>
          </Codewrap>
          <Asideauthor></Asideauthor>
        </Asidediv>
        {
          (() => {
            if (isShow) {
              return (
                <Backtop onClick={this.backUp}><i className="iconfont icon-arrow-up"></i></Backtop>
              )
            }
            return null
          })()
        }
      </Homediv>
    )
  }

  backUp() {
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.props.doToggleShow, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.doToggleShow, false)
  }

}
const mapStateToProps = (state) => {
  return {
    isShow: state.getIn(['home', 'isShow'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doToggleShow() {
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop > 200) {
        dispatch(homeActionCreators.toggleShow(true))
      } else {
        dispatch(homeActionCreators.toggleShow(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);