function SocialMedia() {
    let socialMediaIcons = ["fab fa-facebook-f", "fab fa-twitter", "fab fa-instagram"]
    let socialMediaNames = [" Facebook", " Twitter", " Instagram"]
    let socialMediaLinks = ["", "", "",]

    let socialMedia = socialMediaIcons.map((icon, index) => {
        return (
            <div className="">
                <a className="btn btn-outline-dark btn-lg" href={socialMediaLinks[index]}>
                    <i className={icon}>{socialMediaNames[index]}</i>
                </a>
            </div>
        )
    })

    return (
        <div className='container-fluid text-center p-5 bg-info-subtle' id="social-media">
            <div className="row text-center p-5">
                <h1>Social Media</h1>
            </div>
            <div className="btn-group gap-2 p-5">
                {socialMedia}
            </div>
        </div>
    )
}

export default SocialMedia