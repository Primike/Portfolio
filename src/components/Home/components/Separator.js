function Separator() {
    let text = ["Doctora", "Autora", "Poeta", "Cantante", "Youtuber"]
    let emojis = ['👩‍⚕️💉', '📖', '📃', '🎤', '🎥']

    let list = text.map((text, index) => {
        return (
            <div className="col">
                <h1>{emojis[index]}</h1>
                <h1>{text}</h1>
            </div>
        )
    })

    return (
        <div className="container-fluid text-center">
            <div className="row align-items-center" id="separatorrow">
                {list}
            </div>
        </div>
    )
}

export default Separator