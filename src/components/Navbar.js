import React, { useState } from 'react';
import { Menu, Image } from 'semantic-ui-react'

const Navbar = () => {

  const [activeItem, setActiveItem] = useState('Accordion');

  const handleItemClick = (name) => setActiveItem(name)

  return (
    <Menu size='massive' stackable className = "menuitems" color={"blue"} inverted widths={4}>
        <Menu.Item header>
            <Image circular size = "small" src = "https://outreach.engineering.asu.edu/wp-content/uploads/2021/03/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.jpg"/>
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
            name ='Project'
            active = {activeItem === 'Projects'}
            onClick = {() => handleItemClick('Projecs')} 
        />
      </Menu>
  );
};

export default Navbar;