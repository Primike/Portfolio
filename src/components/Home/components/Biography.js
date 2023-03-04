import prince from "./assets/Prince.JPG"

function Biography() {
    return (
        <div className='container-fluid p-5' id='biodiv'>
            <div className='row align-items-center gx-5'>
                <div className='col-md-6 p-3 text-center'>
                    <img className="img" id='biophoto' src={prince}/>
                </div>
                <div className='col-md-6'>
                    <h1 className='d' id='biotitle'>Prince Avecillas</h1>
                    <p className='s' id='bioparagraph'>Big Chungus refers to an image of the cartoon character Bugs Bunny, usually captioned with the phrase "Big Chungus" and presented as a game for PlayStation 4 console. The word "chungus" was coined by video game journalist Jim Sterling several years before the meme became popular. Starting in July 2019, the meme regained ironic popularity on iFunny and certain parts of Reddit, particularly as a part of Reddit Moment memes.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Biography