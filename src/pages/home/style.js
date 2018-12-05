import styled from 'styled-components';

export const Homediv = styled.div`
  width: 960px;
  height: 100%;
  margin: 80px auto 40px;
  background: lightblue;
  overflow: hidden;
`

export const Contentdiv = styled.div`
  float: left;
  width: 625px;
  height: 100%;
  background: lightgray;
`

export const Asidediv = styled.div`
  float: right;
  width: 280px;
  height: 100%;
  background: pink;
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
`

export const ContentListUl = styled.ul``
export const ContentListLi = styled.li``