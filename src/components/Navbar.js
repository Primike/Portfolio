import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'

const Navbar = () => {

  const [activeItem, setActiveItem] = useState('Accordion');

  const handleItemClick = (name) => setActiveItem(name)

  return (
    <Menu>
        <Menu.Item header>
            <img src = "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F013%2F564%2Fdoge.jpg"/>
        </Menu.Item>
        <Menu.Item  
            href = "/"      
            name = 'Home'
            active = {activeItem === 'Home'}
            onClick = {() => handleItemClick('Home')}
        />
        <Menu.Item  
            href = "/about"       
            name = 'About'
            active = {activeItem === 'About'}
            onClick = {() => handleItemClick('About')} 
        />
        <Menu.Item     
            href = "/projects" 
            name ='Projects'
            active = {activeItem === 'Projects'}
            onClick = {() => handleItemClick('Projecs')} 
        />
      </Menu>
  );
};

export default Navbar;