import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Bannerdiv } from './../../style';

class Banner extends Component {

  render() {
    return (
      <Bannerdiv>
        <Carousel autoplay>
          <div><img src={require("./../../../../static/img/banner1.jpg")} alt=""/></div>
          <div><img src={require("./../../../../static/img/banner2.jpg")} alt=""/></div>
          <div><img src={require("./../../../../static/img/banner3.jpg")} alt=""/></div>
        </Carousel>
      </Bannerdiv>
    )
  }

}

export default Banner;