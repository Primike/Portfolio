function Separator() {
    let text = ["Swift", "Javascript", "React", "Python", "Ruby"]
    let emojis = ['📱', '📄', '💻', '🐍', '💎']

    let list = text.map((text, index) => {
        return (
            <div className="col">
                <h1>{emojis[index]}</h1>
                <h1>{text}</h1>
            </div>
        )
    })

    return (
        <div className="container-fluid text-center bg-info-subtle">
            <div className="row align-items-center" id="separatorrow">
                {list}
            </div>
        </div>
    )
}

export default Separator