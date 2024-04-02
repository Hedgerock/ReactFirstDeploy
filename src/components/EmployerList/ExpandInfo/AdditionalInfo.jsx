export const AdditionalInfo = (props) => {
    const { data } = props
    const { name, surname, middleName } = data

    return (
        <div className="additional-info">
            <div className="full-name">
                <span className="additional-info__value">First name: { name }</span>
                <span className="additional-info__value">Last name: { surname }</span>
                {middleName &&
                    <span className="additional-info__value">Middle name: { middleName }</span>
                }
            </div>
        </div>
    )
}