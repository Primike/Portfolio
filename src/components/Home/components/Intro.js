import TypeWriter from "typewriter-effect"
import space from "./assets/space.jpg"

function Intro() {
    return (
        <div className='container-fluid' id='introdiv'>
            <div className='row align-items-center gx-5'>
                <div className='col-md-7'>
                    <h1 className='display-4' id='hometext'>Welcome🖐</h1>
                    <h1 className='display-4' id='hometext'>My Name Is</h1>
                    <h1 className='display-4' id='hometext'>Prince Avecillas</h1>
                    <div className='display-6' id='hometext'>
                        <TypeWriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 30,
                                strings: ["iOS Developer", "FrontEnd Developer", "And Other Stuff", "I like getting people bonuses hint hint"],
                            }}
                        />
                    </div>
                </div>
                <div className='col-md-5 p-3'>
                    <img className='img' id='profilepicture' src={space} alt="space"/>
                </div>
            </div>
        </div>
    )
}

export default Intro