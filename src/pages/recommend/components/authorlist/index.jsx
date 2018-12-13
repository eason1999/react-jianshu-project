import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from './../../styled.css';
import { authorActionCreators } from './../../store';

class Authorlist extends Component {

  render() {
    const {
      list,
      handleGetList
    } = this.props;
    const foucsList = list.toJS();
    console.log(foucsList, 6767)
    return (
      <div className={styled.listWrap}>
        <ul className={styled.list}>
          {
            foucsList.map((item, index) => {
              return (
                <li key={index} className={styled.li}>
                  <div className={styled.innerLi}>
                      <img src={item.avatar} alt="" className={styled.img}/>
                      <h2 className={styled.title}>{item.name}<i></i></h2>
                      <p className={styled.desc}>{item.description}</p>
                      <a className={styled.btn} href="javascript:void(0);">+关注</a>
                      <div className={styled.updateWrap}>
                        <hr/>
                        <span className={styled.updateTitle}>最近更新</span>
                        {
                          item.update.map((data, i) => {
                            return (
                              <a key={i} href="javascript:void(0);">{data.title}</a>
                            )
                          })
                        }
                      </div>
                    </div>
                </li>
              )
            })
          }
        </ul>
        <a href='javascript:void(0);' onClick={handleGetList} className={styled.moreBtn}>加载更多</a>
      </div>
    )
  }

  componentDidMount() {
    this.props.handleGetList()
  }

}


const mapStateToProps = (state) => {
  return {
    list: state.getIn(['author', 'foucsList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetList() {
      dispatch(authorActionCreators.getList())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authorlist);