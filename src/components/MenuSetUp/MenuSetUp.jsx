import "./MenuSetUp.css";
import { MenuEl } from "./MenuEl";
import menu from "../../data/menu";
import { Layout } from "../Layout";
import { Logo } from "../Logo";
import { CloseBtn } from "../CloseBtn";

export const MenuSetUp = (props) => {
    const { func } = props
    return (
        <div className="menu-setup">
            <div className="menu-box">
                <div className="logo-box">
                    <Logo onClick={ func }/>
                    <CloseBtn onClick={ func }/>
                </div>
                <ul className="menu">
                { menu.map(item => 
                    <MenuEl 
                        key={ item.id } 
                        title={ item.title } 
                        childClassName="menu-el" 
                        link={ item.link }
                        onClick = { func }
                    />) 
                }
                </ul>
            </div>
            <Layout onClick ={ func } layoutClassName = "menu-layout"/>
        </div>
    )
}