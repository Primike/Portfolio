import React from 'react'
import { Menu } from 'semantic-ui-react'

function Navbar () {
    
    const items = [
        { key: 'editorials', name: 'Home',},
        { key: 'review', name: 'About' },
        { key: 'events', name: 'Projects' },
      ]

    return (
        <>
            <Menu items={items} />
        </>
    )
}


export default Navbar
