import './Layout.css'

export const Layout = (props) => {
    const { onClick, layoutClassName } = props

    return (
        <div className={ layoutClassName || '' } onClick={ onClick }></div>
    )
}