const CloseBtn = (props) => {
    const { onClick } = props

    return (
        <button onClick={ onClick } className="close-btn">X</button>
    )
}

export default CloseBtn;