import './CloseBtn.css'

export const CloseBtn = (props) => {
    const { onClick } = props

    return (
        <button onClick={ onClick } className="close-btn">X</button>
    )
}