import './Components.css'


function Footer () {
    return (
        <footer className='bg-dark py-5'>
            <div className="container">
                <div className="row border-bottom py-5 text-start">
                    <div className="col-12 col-md-auto py-2 my-3 my-md-0"><a href="" className='link-black'><i class='bx bx-world me-2'></i>Español</a></div>
                    <div className="col-auto py-2"><a className='text-decoration-none' href="">Acerca de nosotros</a></div>
                    <div className="col-auto py-2"><a className='text-decoration-none' href="">Customer Reviews</a></div>
                    <div className="col-auto py-2"><a className='text-decoration-none' href="">Centro de ayuda</a></div>
                    <div className="col-auto py-2"><a className='text-decoration-none' href="">Documentacion de la API</a></div>
                    <div className="col-auto py-2"><a className='text-decoration-none' href="">Integraciones</a></div>
                    <div className="col-auto py-2"><a className='text-decoration-none' href="">Blog de Deel</a></div>
                    <div className="col-auto py-2"><a className='text-decoration-none' href="">Biblioteca de recursos</a></div>
                    <div className="col-auto py-2"><a className='text-decoration-none' href="">Trabaja con nosotros</a></div>
                </div>
                <div className="row py-4 text-start border-bottom">
                    <div className="col-12 col-md-3">
                        <div className="row">
                            <h6 className='fw-bold'>Empieza a usar Deel</h6>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">Precios</a></div>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">Nomina de EE. UU.</a></div>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">PEO</a></div>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">Deel Contratista registrado</a></div>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">Gestiona las fuerzas de trabajo globales</a></div>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">Contrata empleados</a></div>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">Contrata trabajadores independientes</a></div>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">Reubica trabajadores</a></div>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">API de Deel</a></div>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">Estado del servicio</a></div>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">Press (Prensa)</a></div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <ul className='p-0'>
                            <li className='my-0 mb-3'>
                                <h6 className='fw-bold'>La ventaja de Deel</h6>
                            </li>
                            <li className='my-0 mb-3'><a className='text-decoration-none' href="">Compliance</a></li>
                            <li className='my-0 mb-3'><a className='text-decoration-none' href="">Seguridad de datos</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="row">
                            <h6 className='fw-bold'>Para industrias</h6>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">Fintech</a></div>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">Tecnologia educativa</a></div>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">Servicios de TI</a></div>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">Marketing y publicidad</a></div>
                            <div className="col-6 col-md-12 my-2"><a className='text-decoration-none' href="">Todas las industrias</a></div>
                        </div>
                    </div>
                </div>
                <div className="row py-5 text-start border-bottom">
                    <div className="col-12 col-md-4 col-xl-2 my-2">
                        <img src="https://deel-website-media-prod.s3.amazonaws.com/logo_revamp_white_3237bd2303.svg" className='img-fluid' alt="" />
                        <div className="d-flex my-4">
                            <a className='link-black rounded-5 p-0 me-3' href=""><img className='img-fluid' src="https://www.deel.com/_next/static/media/twitter-filled.8731c38f.svg" alt="" /></a>
                            <a className='link-black rounded-5 p-0 me-3' href=""><img className='img-fluid' src="https://www.deel.com/_next/static/media/linkedin-filled.7436820c.svg" alt="" /></a>
                            <a className='link-black rounded-5 p-0 me-3' href=""><img className='img-fluid' src="https://www.deel.com/_next/static/media/facebook-filled.9dee679d.svg" alt="" /></a>
                            <a className='link-black rounded-5 p-0 me-3' href=""><img className='img-fluid' src="https://www.deel.com/_next/static/media/instagram-filled.a70f7d56.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-xl-5 my-2">
                        <h4 className='fw-semibold'>Recibe directamente en tu bandeja de entrada la informacion mas reciente sobre el mundo laboral actual.</h4>
                    </div>
                    <div className="col-12 col-xl-5 my-2">
                        <input type="email" class="form-control p-3 rounded-5 mb-3" id="exampleFormControlInput1" placeholder="What's your e-mail?"/>
                        <span className='color-grey'>I confirm that I have read <a className='text-decoration-none' href="">Deel's Privacy Policy</a> and agree with it.</span>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-12 col-lg-6 py-3 text-start">
                        <span className='color-grey'>Copyright 2024. Todos los derechos reservados.</span>
                    </div>
                    <div className="col-lg-6 py-3">
                        <div className="row">
                            <div className="col-auto"><a className='color-grey text-decoration-none' href="">Aviso legal</a></div>
                            <div className="col-auto"><a className='color-grey text-decoration-none' href="">Politica de privacidad</a></div>
                            <div className="col-auto"><a className='color-grey text-decoration-none' href="">Terminos del servicio</a></div>
                            <div className="col-auto"><a className='color-grey text-decoration-none' href="">Whistleblower Policy</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;