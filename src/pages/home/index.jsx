import React, { Component } from 'react';
import { Homediv, Contentdiv, Asidediv } from './style';
import Asideauthor from './components/asideauthor';
import Asideborder from './components/asideborder';
import Banner from './components/banner';
import Contentlist from './components/cotentlist';

class Home extends Component {

  render() {
    return (
      <Homediv>
        <Contentdiv>
          <Banner />
        </Contentdiv>
        <Asidediv></Asidediv>
      </Homediv>
    )
  }

}

export default Home;