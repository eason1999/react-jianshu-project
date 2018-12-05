import styled  from 'styled-components';

export const HeaderDiv = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 56px;
  width: 100%;
  line-height: 56px;
  border-bottom: 1px solid #e7e7e7;
  background: #fff;
`

export const InnerDiv = styled.div`
  height: 100%;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
`

export const LogoDiv = styled.a.attrs({
  href: '/'
})`
  float: left;
  width: 100px;
  height: 56px;
  background: url(${props => props.logoUrl});
  background-size: cover;
`

export const WriteBtn = styled.a.attrs({
  // eslint-disable-next-line
  href: 'javascript:;'
})`
  float: right;
  width: 100px;
  height: 40px;
  margin: 8px 15px 0;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
  text-decoration: none;
  text-align: center;
  line-height: 40px;
`

export const RegisterDiv = styled.a.attrs({
  // eslint-disable-next-line
  href: 'javascript:;'
})`
  float: right;
  width: 80px;
  height: 38px;
  line-height: 38px;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  text-decoration: none;
  text-align: center;
  background-color: transparent;
`

export const LoginDiv = styled.a.attrs({
  // eslint-disable-next-line
  href: 'javascript:;'
})`
  float: right;
  color: #969696;
  margin: 0 6px 0 10px;
  font-size: 15px;
  text-decoration: none;
  line-height: 56px;
`

export const ModeDiv = styled.a.attrs({
  // eslint-disable-next-line
  href: 'javascript:;'
})`
  float: right;
  line-height: 56px;
  height: 56px;
  padding: 0 10px 0 15px;
  color: #969696;
  text-decoration: none;
  .icon-Aa {
    font-size: 24px;
  }
`

export const Nav = styled.div`
  oversflow: hidden;
  max-width: 960px;
  margin: 0 auto;
`

export const NavItem = styled.div`
  float: left;
  line-height: 56px;
  font-size: 16px;
  color: #777;
  margin-right: 40px;
  .icon {
    font-size: 20px;
    vertical-align: top;
    margin-right: 2px;
  }
  &.first {
    color: #EA6F5A;
  }
  &.third {
    position: relative;
  }
  .icon-fangdajing {
    position: absolute;
    top: 2px;
    right: 10px;
    z-index: 10px;
  }
  .focused {
    display: inline-block;
    background: #969696;
    color: #fff;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    text-align: center;
    line-height: 32px;
    top: 14px;
    right: 5px;
    cursor: pointer;
  }
  .slide-enter {
    transition: all .2s ease-out;
  }
  .slide-enter-active {
    width: 260px;
  }
  .slide-exit {
    transition: all .2s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
`

export const SearchInput = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border: none;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  border-radius: 50px;
  background: #EEEEEE;
  &::placeholder {
    color: #999;
  }
  &.ipt-focused {
    width: 260px;
  }
`
export const SearchWrap = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 250px;
  z-index: 50;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(100, 100, 100, .2);
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 20px;
    border: 8px solid transparent;
    border-bottom: 8px solid #fff;
  }
`
export const SearchTop = styled.div`
  height: 20px;
  line-height: 20px;
  margin-bottom: 10px;
`
export const HotSearch = styled.h3`
  float: left;
  font-size: 14px;
  color: #969696;
`
export const Change = styled.a.attrs({
  // eslint-disable-next-line
  href: 'javascript:;'
})`
  float: right;
  font-size: 13px;
  color: #969696;
  text-decoration: none;
  &:hover {
    color: #565656;
  }
  i {
    font-size: 14px;
    margin-right: 2px;
  }
`
export const SearchTag = styled.div`
  overflow: hidden;
`

export const Tag = styled.a.attrs({
  // eslint-disable-next-line
  href: 'javascript:;'
})`
  padding: 2px 6px;
  font-size: 12px;
  line-height: 14px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  display: inline-block;
  margin: 0 10px 10px 0;
  float: left;
  &:hover {
    color: #787878;
    border-color: #787878;
  }
`
