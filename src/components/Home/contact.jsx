export default function Contact() {

    return (
        <div>
            <form className="d-flex flex-column w-100 justify-content-center align-items-center mt-2 mb-2" id="contact">
                <h2>Contacto</h2>
                <label htmlFor="nombre" className="imgsfoot text-center w-100 d-flex flex-column align-items-center m-3">Nombre <input type="text" className="w-25 contactinputs"></input></label>
                <label htmlFor="nombre" className="imgsfoot text-center w-100 d-flex flex-column align-items-center m-3">Email <input type="text" className="w-25 contactinputs"></input></label>
                <label htmlFor="nombre" className="imgsfoot text-center w-100 d-flex flex-column align-items-center m-3">Telefono <input type="text" className="w-25 contactinputs"></input></label>
                <label htmlFor="nombre" className="imgsfoot text-center w-100 d-flex flex-column align-items-center m-3 textarea">Mensaje <textarea className="w-25 contactinputs"></textarea></label>
            </form>
            <div className="w-100 d-flex flex-column align-items-center">
                <h2 className="text-center mb-3">Recibi todas nuestras ofertas</h2>
                <input type="email" placeholder="Email" className="w-25"></input>
            </div>
        </div>


    )
}