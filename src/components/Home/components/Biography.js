import prince from "./assets/Prince.JPG"

function Biography() {
    return (
        <div className='container-fluid p-5 bg-danger-subtle' id='biodiv'>
            <div className='row align-items-center gx-5'>
                <div className='col-md-6 p-3 text-center'>
                    <img className="img" id='biophoto' src={prince}/>
                </div>
                <div className='col-md-6'>
                    <h1 className='d' id='biotitle'>Dra. Marcia Gomezcoello</h1>
                    <p className='s' id='bioparagraph'>Sadhguru (born Jagadish Vasudev, 3 September 1957) is the founder and head of the Isha Foundation, based in Coimbatore, India. The foundation, established in 1992, operates an ashram and yoga centre that carry out educational and spiritual activities. Sadhguru is an Indian yoga guru and a proponent of spirituality. He has been teaching yoga since 1982. He is the author of several books and a frequent speaker at international forums. In 2017, he received the Padma Vibhushan, India's second-highest civilian award, for his contributions to social welfare.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Biography