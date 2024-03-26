import { CloseBtn } from "../CloseBtn";
import { Layout } from "../Layout";
import './Cart.css';

export const Cart = (props) => {
    const { onClick } = props

    return (
        <div className="cart-setup">
            <div className="cart">
                <div className="cart-header">
                    <h3 className="cart-header__title">Кошик</h3>
                    <CloseBtn onClick = { onClick } />
                </div>
                <div className="cart-main-part">
                    <div className="cart-empty">
                        <img src="https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg" alt="" />
                    </div>
                </div>
            </div>
            <Layout onClick = { onClick } layoutClassName="cart-layout"/>
        </div>
    )
}
