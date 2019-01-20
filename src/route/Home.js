import React, { Component } from 'react';
import './Home.css';
import HomeCarousel from './../components/Carousel/Carousel'

class Home extends Component {
  componentDidMount(){
    document.title = 'Home | SEKO';
  }
  render() {
    return (
      <div>
        <HomeCarousel className='carousel'></HomeCarousel>
        <div className='intro'>
          
        </div>
      </div>
    );
  }
}

export default Home;
