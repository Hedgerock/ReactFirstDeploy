import { useState } from "react"
import './Header.css';
import { Cart } from "../Cart";
import { Layout } from "../Layout";
import { MenuSetUp } from "../MenuSetUp";
import { SearchForm } from "../SearchForm";
import { LanguageBox } from "../LanguageBox";
import { Catalog } from "../Catalog";
import { Logo } from '../Logo';
import { useMenuState } from "../../hooks/useMenuState";

export const Header = () => {
    const [catalogIsOpen, setCatalogIsOpen] = useState(false);
    const [cartIsOpen, setCartIsOpen] = useState(false);

    const { burgerMenuIsOpen, burgerMenuHandler } = useMenuState();

    const catalogHandler = () => { 
        setCatalogIsOpen(prev => !prev)
    }
    const cartHandler = () => { 
        setCartIsOpen(prev => !prev)
        setCatalogIsOpen(false);
    }

    return (
        <div className="header">
            { catalogIsOpen &&
                <Layout onClick = { catalogHandler } layoutClassName = "catalog-layout" />
            }
            <div className="header-box container1536">
                <button onClick={ () => burgerMenuHandler(setCatalogIsOpen, setCartIsOpen) } className="burger-btn">
                    <i className="fa-solid fa-bars"></i>
                </button>

                { burgerMenuIsOpen && 
                    <MenuSetUp func={ burgerMenuHandler }/> 
                }

                <Logo />
                
                <button onClick={ catalogHandler } className="catalog">Каталог</button>

                { catalogIsOpen && <Catalog /> }

                <SearchForm />
                <LanguageBox />

                <button className="authorization-btn">
                    <i className="fa-solid fa-user"></i>
                </button>

                <button className="cart-btn" onClick={ cartHandler }>
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>

                { cartIsOpen && 
                    <Cart onClick = { cartHandler }/> 
                }
            </div>
        </div>
    )
}