function Separator() {
    let text = ["Swift", "Javascript", "React", "Python", "Ruby"]
    let emojis = ['📱', '📄', '💻', '🐍', '💎']

    let list = text.map((text, index) => {
        return (
            <div className="col">
                <h1 id="separatortext">{emojis[index]}</h1>
                <h1 id="separatortext">{text}</h1>
            </div>
        )
    })

    return (
        <div className="container-fluid text-center bg-info-subtle" id="separatorcontainer">
            <div className="row align-items-center" id="separatorrow">
                {list}
            </div>
        </div>
    )
}

export default Separator