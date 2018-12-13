import React, { Component } from 'react';
import styled from './../../styled.css';

class Asideborder extends Component {

  render() {

    const borderList = [
      {
        imgSrc: require('./../../../../static/img/border-1.png')
      },
      {
        imgSrc: require('./../../../../static/img/border-2.png')
      },
      {
        imgSrc: require('./../../../../static/img/border-3.png')
      },
      {
        imgSrc: require('./../../../../static/img/border-4.png')
      },
      {
        imgSrc: require('./../../../../static/img/border-5.png')
      },
    ]
    return (
      <div className={styled.borderWrap}>
        <ul className={styled.borderList}>
          {
            borderList.map((item, index) => {
              return (
                <li key={index} className={styled.borderLi}>
                  <img src={item.imgSrc} alt="" />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

}

export default Asideborder;