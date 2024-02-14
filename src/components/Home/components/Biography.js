import prince from "./assets/Prince.JPG"

function Biography() {
    return (
        <div className='container-fluid p-5' id='biodiv'>
            <div className='row align-items-center gx-5'>
                <div className='col-md-6 p-3 text-center'>
                    <img className="img" id='biophoto' src={prince} alt="prince"/>
                </div>
                <div className='col-md-6'>
                    <h1 className='d' id='biotitle'>Prince Avecillas</h1>
                    <p className='s' id='bioparagraph'>Hello i'm Prince. My coding journey started in college when I worked with arduino hardware during advanced physics lab. I also took a numerical methods class which used python to iterate through math functions until a solution was found. I then joined Flatiron school and I learned React JS and Ruby on Rails. Afterwards I joined Wiley, learned swift and swiftUI and worked onsite at JP Morgan Chase as a iOS developer. I continue to learn new technologies and improve my curent skills. </p>
                </div>
            </div>
            
        </div>
    )
}

export default Biography