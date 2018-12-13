import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Authorlist from './components/authorlist';
import styled from './styled.css';

class Recommend extends Component {

  render() {
    return (
      <div className={styled.recommendPage}>
        <div className={styled.recommendTitle}>
          <Link to="/"><i className="iconfont icon-iconfontwenhao1"></i>如何成为签约作者</Link>
        </div>
        <Authorlist></Authorlist>
      </div>
    )
  }

}

export default Recommend;