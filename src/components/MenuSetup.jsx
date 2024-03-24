import menu from "../data"
import CloseBtn from "./CloseBtn"
import Layout from "./Layout"
import Logo from "./Logo"
import MenuEl from "./MenuEl"

const MenuSetUp = (props) => {
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

export default MenuSetUp