import React, { Component } from 'react';
import ToggleButton from './SideDrawer/ToggleButton';
import icon from './../img/seko_icon.svg';
import './Toolbar.css';

class Toolbar extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
      }
      resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 200,
          headerEl = document.getElementById("tb"),
          logo = document.getElementById("logo");
    
        if (distanceY > shrinkOn) {
          headerEl.classList.remove("toolbar");
          headerEl.classList.add("smaller");
          logo.classList.remove("logo-big");
          logo.classList.add("logo-small");
        } else {
          headerEl.classList.remove("smaller");
          headerEl.classList.add("toolbar");
          logo.classList.remove("logo-small");
          logo.classList.add("logo-big");
        }
      }
      render(){
          return (
            <header className='toolbar' id='tb'>
                <nav className="toolbar-nav">
                    <div className="toolbar-logo"><a href="/"><img id="logo" className='logo-big' src={icon} alt='SEKO'/></a></div>
                    <div className="spacer"></div>
                    <ul className="toolbar-nav-items"> 
                        <li><a href='/'>Home</a></li>
                        <li><a href='/products/neue_rove'>Product Information</a></li>
                        <li><a href='/down_load'>Document Download</a></li>
                        <li><a href='/request'>Request</a></li>
                        <li><a href='/about'>About Us</a></li>
                    </ul>
                    <div className='toggleButton'>
                        <ToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                </nav>
            </header>
          );
      }
}
// const toolbar = props =>(
//     <header className='toolbar'>
//         <nav className="toolbar-nav">
//             <div className="toolbar-logo"><a href="/">The Logo</a></div>
//             <div className="spacer"></div>
//             <ul className="toolbar-nav-items"> 
//                 <li><a href='/'>Home</a></li>
//                 <li><a href='/products/neue_rove'>Product Information</a></li>
//                 <li><a href='/down_load'>Document Download</a></li>
//                 <li><a href='/request'>Request</a></li>
//                 <li><a href='/about'>About Us</a></li>
//             </ul>
//             <div className='toggleButton'>
//                 <ToggleButton click={props.drawerClickHandler}/>
//             </div>
//         </nav>
//     </header>
// );

export default Toolbar;