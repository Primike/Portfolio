import React, { useState } from 'react';
import "./Navbar.css"

function Navbar() {

    const tabNames = ["Home", "About", "Projects"]
    const hrefLinks = ["/", "about", "projects"]


    let list = tabNames.map((name, i) => {
        return (
            <div className="col" id="navbaritems">
                <a id="navbartext" href = {hrefLinks[i]}>{name}</a>
            </div>
        )
    })

    return (
        <nav className="container-fluid p-3k">
            <div className='row align-items-center'>
                <div className="col-md-6 fs-2 text-center fw-bold" id="navbartitle">Prince Avecillas 💼</div>
                <div className="col-md-6 gx-5 p-3">
                    <div className='row'>
                        {list}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar