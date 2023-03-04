import TypeWriter from "typewriter-effect"
import prince from "./assets/Prince.JPG"

function Intro() {
    return (
        <div className='container-fluid' id='introdiv'>
            <div className='row align-items-center gx-5'>
                <div className='col-md-7'>
                    <h1 className='display-4' id='hometext'>Bienvenidos🖐</h1>
                    <h1 className='display-4' id='hometext'>Soy La</h1>
                    <h1 className='display-4' id='hometext'>Dra. Marcia Gomezcoello</h1>
                    <div className='display-6' id='hometext'>
                        <TypeWriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: ["Marcela!", "No Mas", "CD DVD 💿"],
                            }}
                        />
                    </div>
                </div>
                <div className='col-md-5 p-3'>
                    <img className='img' id='profilepicture' src={prince}/>
                </div>
            </div>
        </div>
    )
}

export default Intro