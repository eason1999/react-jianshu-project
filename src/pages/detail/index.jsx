import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from './styled.css';
import CommentList from './components/commentlist';

class Detail extends Component {
  
  render() {
    return <div className={styled.detailWrap}>
        <h1>小姑子被老公当女儿养，我亲手把她送给了老男人</h1>
        <div className={styled.authorWrap}>
          <img className={styled.avatar} src="//upload.jianshu.io/users/upload_avatars/13720421/600b6692-1aa7-42ac-b597-8df0bff2b4f8.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="" />
          <div className={styled.descWrap}>
            <div className={styled.info}>
              <span>心眼师傅</span>
              <img src="//cdn2.jianshu.io/assets/badges/excellent-34cdda4de26ee9910f190239ffecf886c24045136468fa26f041b0156a143cd9.png" alt="" />
              <a>+关注</a>
            </div>
            <div className={styled.content}>
              <span>2018.09.18 17:20</span>
              <span>字数 1561</span>
              <span>阅读 234</span>
              <span>评论 43</span>
              <span>喜欢 32</span>
            </div>
          </div>
        </div>
        <div className={styled.artical}>
          <span>
            我跟老公的生活本来还是挺恩爱的，直到小姑子住进了我家，让我的生活鸡飞狗跳的。以前小姑子跟我们家并没有多少往来，只不过前两年公公过世了，老公就承担起了照顾和抚养小姑子的责任。那时候我也没有多大意见，毕竟长兄如父，再说小姑子也即将毕业，就是老公要照顾她，也就是那两年的时间了。哪知道，我的悲惨生活却刚刚开始。
          </span>
          <span>
            我跟老公的生活本来还是挺恩爱的，直到小姑子住进了我家，让我的生活鸡飞狗跳的。以前小姑子跟我们家并没有多少往来，只不过前两年公公过世了，老公就承担起了照顾和抚养小姑子的责任。那时候我也没有多大意见，毕竟长兄如父，再说小姑子也即将毕业，就是老公要照顾她，也就是那两年的时间了。哪知道，我的悲惨生活却刚刚开始。
          </span>
          <img src="//upload-images.jianshu.io/upload_images/13720421-10e7a7ae72a3e202.png" alt=""/>
          <span>
            我跟老公的生活本来还是挺恩爱的，直到小姑子住进了我家，让我的生活鸡飞狗跳的。以前小姑子跟我们家并没有多少往来，只不过前两年公公过世了，老公就承担起了照顾和抚养小姑子的责任。那时候我也没有多大意见，毕竟长兄如父，再说小姑子也即将毕业，就是老公要照顾她，也就是那两年的时间了。哪知道，我的悲惨生活却刚刚开始。
          </span>
          <span>
            我跟老公的生活本来还是挺恩爱的，直到小姑子住进了我家，让我的生活鸡飞狗跳的。以前小姑子跟我们家并没有多少往来，只不过前两年公公过世了，老公就承担起了照顾和抚养小姑子的责任。那时候我也没有多大意见，毕竟长兄如父，再说小姑子也即将毕业，就是老公要照顾她，也就是那两年的时间了。哪知道，我的悲惨生活却刚刚开始。
          </span>
        </div>
        <div className={styled.supportWrap}>
          <p>小礼物走一走，来简书关注我</p>
          <a>赞赏支持</a>
        </div>
        <CommentList></CommentList>
      </div>
  }

  componentDidMount() {
    console.log(this.context.router.history.location.state, 565)
  }

}

Detail.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Detail;