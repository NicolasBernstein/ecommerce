import instagram from '../images/instagram.svg';
import facebook from '../images/facebook.svg';
import whatsapp from '../images/whatsapp.svg';
import phone from '../images/phone.svg';
import email from '../images/email.svg';
export default function Footer() {

    return (
        <footer className="d-flex flex-column">
            <div id="social" className="w-100 footerflex justify-content-center mt-2">
                <a className="mx-4 " href={`https://www.google.com/`} target='_blank'><img className="imgsfoot" src={instagram}></img></a>
                <a className="mx-4 " href={`https://www.google.com/`} target='_blank'><img className="imgsfoot" src={facebook}></img></a>
            </div>
            <div id='phone' className="w-100 footerflex d-flex flex-row justify-content-center mt-4">
                <div className='mx-4 border-none'><img className="imgsfoot" src={whatsapp}></img><span>+54 11-1111-1111</span></div>
                <div className='mx-3'><img className="imgsfoot" src={phone}></img> <span>11-1111-1111.</span></div>
            </div>
            <div className="w-100 footerflex d-flex flex-row justify-content-center mt-4">
                <div>© Copyright Optica tu vision</div>
                <div className='mx-3'><img className="imgsfoot" src={email}></img> <span>opticatuvision@gmail.com.</span></div>
            </div>

        </footer>

    )
}