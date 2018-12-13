import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { detailActionCreators } from '../../store';
import styled from '../../styled.css';

class CommentList extends Component {
  

  render() {

    const { list, onShowSizeChange, onPageChange } = this.props;
    const commentList = list.toJS();
    console.log(commentList, 77788)
    return (
      <div className={styled.commentWrap}>
        <div className={styled.titleWrap}>
          <div className={styled.commentTotal}>47条评论</div>
          <div className={styled.commentRange}>
            <span>按时间倒序</span>
            <span>按时间正序</span>
          </div>
        </div>
        <ul className={styled.list}>
          {
            commentList.map((item, index) => {
              return (
                <li key={item.user_id} className={styled.li}>
                  <div className={styled.nameWrap}>
                    <img src={item.user.avatar} alt=""/>
                    <div className={styled.authorName}>
                      <h2>{item.user.nickname}</h2>
                      <div className={styled.commentStatus}>
                        <span>{item.floor}楼</span>
                        <span>{item.created_at}</span>
                      </div>
                    </div>
                  </div>
                  <p className={styled.commentCon}>{item.compiled_content}</p>
                  <div className={styled.supportWrap}>
                    <span><i className="iconfont icon-zan1"></i>{item.liked_count}赞</span>
                    <span><i className="iconfont icon-huihua"></i>回复</span>
                  </div>
                  {
                    (() => {
                      if (item.children.length) {
                        return (
                          <div className={styled.callList}>
                            {
                              item.children.map((data, index) => {
                                return (
                                  <div className={styled.callLi}
                                  key={data.id}>
                                    <div className={styled.callCon}><Link to="">{data.user.nickname}</Link>: {data.compiled_content}</div>
                                    <div className={styled.callTime}>
                                      <span>{data.created_at}</span>
                                      <span><i className="iconfont icon-huihua"></i>回复</span>
                                    </div>
                                  </div>
                                )
                              })
                            }
                            <div className={styled.subComment}>
                              <i className="iconfont icon-bi"></i>添加新评论
                            </div>
                          </div>
                        )
                      }
                      return null
                    })()
                  }
                </li>
              )
            })
          }
        </ul>
        <Pagination className={styled.pageWrap} showSizeChanger onChange={onPageChange} onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
      </div>
    )
  }

  componentDidMount() {
    this.props.getList()
  }

}
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['detail', 'commentList'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getList() {
      dispatch(detailActionCreators.getCommentList())
    },
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize)
    },
    onPageChange(page, pageSize) {
      console.log(page, pageSize)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentList);