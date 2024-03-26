export const Counter = (props) => {
    const { length, text } = props

    return (
        <p className="employer-list-count">
            { text }: <span>{ length }</span>
        </p>
    )
}