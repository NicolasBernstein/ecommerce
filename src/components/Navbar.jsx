import { Link } from "react-router-dom";
import Menuimg from "../images/menu.png";
import { useGlobalState } from "./hooks";
import cart from '../images/cart.png';
export default function Navbar() {
    const { Menu, SetMenu } = useGlobalState();

    const toggleMenu = () => {
        SetMenu(!Menu);
    };
    return (
        <nav className="d-flex justify-content-between sticky-top align-items-center" id="menunav">
            <div className="h-100">
                <button className="imgbutton" onClick={ev => toggleMenu()}>  <img src={Menuimg} alt="Menu" className="menu-img" /> </button>
            </div>
            <div id="logotext" className="h2 text-center ">
                Optica tu visión
            </div>
            <div>
                <button className="imgbutton imgbutton2"><img src={cart} className="menu-img2" ></img></button>
            </div>
        </nav>

    )

}