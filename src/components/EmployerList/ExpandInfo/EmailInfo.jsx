export const EmailInfo = (props) => {
    const { email } = props;

    if (!email) {
        return
    }

    return (
        <div className="email-box">
            <h4>Contact { email.length > 1 ? 'emails' : 'email' }:</h4>
                { email.length > 0
                    ? email.map((item, index) => 
                        <span className="email-box__value" key={ index }>
                            { item }
                        </span>)
                    : <span>Currently empty</span>
                }
        </div>
    )
}