import altPicture from '../../../altPicture.jpg'

export const Photo = (props) => {
    let { picture, startDay } = props

    if (!picture) {
        picture = altPicture
    }

    return (
        <div className="photo">
            <img src={ picture } alt="" className="photo__src" />
            <div className="approved-stamp" data-info = { startDay }>
                <img 
                    src="https://i.pinimg.com/originals/8a/73/d8/8a73d86a9ce6df332d3f4feb6374e5e3.png" 
                    alt="" 
                    className="approved-stamp__src" 
                />
            </div>
        </div>
    )
}