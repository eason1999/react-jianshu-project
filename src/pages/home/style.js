import styled from 'styled-components';

export const Homediv = styled.div`
  width: 960px;
  height: 100%;
  margin: 80px auto 40px;
`

export const Backtop = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  z-index: 100;
  width: 50px;
  height: 50px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-align: center;
  line-height: 50px;
  background: #fff;
  cursor: pointer;
  i {
    font-size: 18px;
  }
`

export const Contentdiv = styled.div`
  float: left;
  width: 625px;
  height: 100%;
`

export const Asidediv = styled.div`
  float: right;
  width: 280px;
  height: 100%;
`
// banner相关
export const Bannerdiv = styled.div `
  width: 625px;
  height: 270px;
  .ant-carousel {
    width: 100%;
    height: 100%;
  }
  .slick-slide {
    text-align: center;
    height: 100%;
    line-height: 270px;
    background: #364d79;
    overflow: hidden;
  }
  .slick-slider {
    height: 100%;
  }
  .slick-list {
    border-radius: 10px;
    height: 100%;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`

// 内容list相关
export const ContnentListWrap = styled.div`
  width: 100%;
  margin-top: 30px;
  padding-top: 10px;
  border-top: 1px solid #eee;
`
// 侧边栏 二维码
export const Codewrap = styled.div`
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  overflow: hidden;
  .codeWrap {
    float: left;
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }
  img {
    display: block;
    height: 100%;
    width: 100%;
  }
  .codeContent {
    margin-top: 10px;
  }
  p {
    font-size: 15px;
    color: #333;
    margin: 0;
  }
  p:last-child {
    font-size: 13px;
    color: #999;
  }
`

