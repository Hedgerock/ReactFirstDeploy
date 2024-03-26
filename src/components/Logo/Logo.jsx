import './Logo.css'

export const Logo = (props) => {
    const { onClick } = props

    return (
        <a href="ReactFirstDeploy#" className="logo" onClick={ onClick }>
            <img src="https://content.rozetka.com.ua/mb_logo/image_site_light_theme/original/345645615.svg" alt="" />
        </a>
    )
}