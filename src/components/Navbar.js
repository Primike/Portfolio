import "./Navbar.css"

function Navbar() {

    const tabNames = ["Home", "Projects"]
    const hrefLinks = ["/", "projects"]


    let list = tabNames.map((name, i) => {
        return (
            <div className="col" id="navbaritems">
                <a id="navbartext" href = {hrefLinks[i]}>{name}</a>
            </div>
        )
    })

    return (
        <nav className="container p-3">
            <div className='row align-items-center'>
                <div className="col-md-7 fs-2 text-center fw-bold" id="navbartitle">Prince Avecillas 💼</div>
                <div className="col-md-5">
                    <div className='row text-center'>
                        {list}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar