import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/products/neue_rove'>Product</a></li>
            <li><a href='/down_load'>Document</a></li>
            <li><a href='/request'>Request</a></li>
            <li><a href='/about'>About Us</a></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;