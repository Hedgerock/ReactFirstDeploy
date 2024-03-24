import { useState } from "react"
import Logo from "./Logo";
import MenuSetUp from "./MenuSetup";
import Layout from "./Layout";
import Catalog from "./Catalog";
import Cart from "./Cart";
import SearchForm from "./SearchForm";
import LanguageBox from "./LanguageBox";

const Header = () => {
    const [burgerIsOpen, burger] = useState(false);
    const [catalogIsOpen, catalog] = useState(false);
    const [cartIsOpen, cart] = useState(false);

    const menuIsOpen = () => { burger(prev => !prev) }
    const catalIsOpen = () => { catalog(prev => !prev) }
    const cartIsOpened = () => { cart(prev => !prev) }

    return (
        <div className="header">
            { catalogIsOpen &&
                <Layout onClick = { catalIsOpen } layoutClassName = "catalog-layout" />
            }
            <div className="header-box container1536">
                <button onClick={ menuIsOpen } className="burger-btn">
                    <i className="fa-solid fa-bars"></i>
                </button>

                { burgerIsOpen && <MenuSetUp func={ menuIsOpen }/> }

                <Logo />
                
                <button onClick={ catalIsOpen } className="catalog">Каталог</button>

                { catalogIsOpen && <Catalog />}

                <SearchForm />
                <LanguageBox />

                <button className="authorization-btn">
                    <i className="fa-solid fa-user"></i>
                </button>

                <button className="cart-btn" onClick={ cartIsOpened }>
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>

                { cartIsOpen && <Cart onClick = { cartIsOpened }/> }
            </div>
        </div>
    )
}

export default Header