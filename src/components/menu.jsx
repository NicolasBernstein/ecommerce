import { useGlobalState } from "./hooks";
import { Link } from "react-router-dom";
import user from '../images/user.png';
import favs from '../images/heart.png';
import products from '../images/products.png';
import glass from '../images/anteojo.png';
import home from '../images/home.png';
import contact from '../images/contact.png'
export default function Menu() {
    const { Menu } = useGlobalState();

    return (
        <div id="menu" className={`menu-content ${Menu ? "visible" : "hidden"}`}>
            <h2 id="menutitle">Hola, Nicolas</h2>
            <ul>
                <Link to={'/'}>
                    <img src={home} alt="Imagen de cuenta" />
                    Inicio

                </Link>
                <Link>
                    <img src={user} alt="Imagen de cuenta" />
                    Tu cuenta
                </Link>
                <Link>
                    <img src={favs} alt="Imagen de cuenta" />
                    Favoritos
                </Link>
                <Link>
                    <img src={glass} alt="Imagen de cuenta" />
                    Productos
                </Link>
                <Link>
                    <img src={contact} alt="Imagen de cuenta" />
                    Contacto
                </Link>
            </ul>
        </div>

    )

}