import './MenuEl.css';

export const MenuEl = (props) => {
    const { title, link, childClassName, onClick } = props

    return (
        <li className={ childClassName }>
            <a href={ link } onClick = { onClick }className={ `${childClassName}__link` }>{ title }</a>
        </li>
    )
}