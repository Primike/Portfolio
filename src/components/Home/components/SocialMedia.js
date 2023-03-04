function SocialMedia() {
    let socialMediaIcons = ["fab fa-linkedin-in", "fab fa-github", "fab fa-instagram"]
    let socialMediaNames = [" Linkedin", " Github", " Instagram"]
    let socialMediaLinks = ["https://www.linkedin.com/in/prince-avecillas-0a936a101/", 
                            "https://github.com/Primike", 
                            "",]

    let socialMedia = socialMediaIcons.map((icon, index) => {
        return (
            <a className="btn btn-outline-dark" href={socialMediaLinks[index]}>
                <i className={icon}>{socialMediaNames[index]}</i>
            </a>
        )
    })

    return (
        <div className='container-fluid p-5 bg-info-subtle text-center' id="social-media">
            <div className="row text-center">
                <h1>Social Media</h1>
            </div>
            <div className="btn-group gap-3 p-3">
                {socialMedia}
            </div>
        </div>
    )
}

export default SocialMedia