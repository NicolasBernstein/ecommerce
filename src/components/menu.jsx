import { useGlobalState } from "./hooks";
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
                <li>
                    <img src={home} alt="Imagen de cuenta" />
                    Inicio
                </li>
                <li>
                    <img src={user} alt="Imagen de cuenta" />
                    Tu cuenta
                </li>
                <li>
                    <img src={favs} alt="Imagen de cuenta" />
                    Favoritos
                </li>
                <li>
                    <img src={glass} alt="Imagen de cuenta" />
                    Productos
                </li>
                <li>
                    <img src={contact} alt="Imagen de cuenta" />
                    Contacto
                </li>
            </ul>
        </div>

    )

}