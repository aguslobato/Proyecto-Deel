import './Components.css'
import g2 from '../images/g2.png'

function Footer () {
    return (
        <footer className='bg-dark py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-5">
                        <div className="row text-start">
                            <div className="col-1"><img src={g2} alt="" className="img-fluid" /></div>
                            <div className="col-11 align-self-center">
                                <h3>Mira lo que dicen los clientes de Deel</h3>
                                <p>Based on <a href="">3784+ reviews</a></p>
                            </div>
                        </div>
                        <div className="row text-start">
                            <div className="d-flex overflow-x-auto mini-cards-color">
                                <div className="col-12 col-md-6 me-4 my-3">
                                    <div className="card card-transparent border-0 d-flex flex-column p-4">
                                        <h5>Usuario verificado en telecomunicaciones</h5>
                                        <span>★★★★★</span>
                                        <p>Deel ha revolucionado la forma en que gestiono la nómina. Es confiable, fácil de usar y rentable, por lo que también es indispensable...</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 me-4 my-3">
                                    <div className="card card-transparent border-0 d-flex flex-column p-4">
                                        <h5>Usuario verificado en telecomunicaciones</h5>
                                        <span>★★★★</span>
                                        <p>Deel ha sido un cambio radical para mí. Su plataforma es increíblemente fácil de usar. Desde la optimización de mi proceso de nómina hasta...</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 me-4 my-3">
                                    <div className="card card-transparent border-0 d-flex flex-column p-4">
                                        <h5>Usuario verificado en telecomunicaciones</h5>
                                        <span>★★★★★</span>
                                        <p>La plataforma es increíblemente intuitiva, lo que me facilita navegar y hacer las cosas de forma eficiente. Además de eso, su...</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 me-4 my-3">
                                    <div className="card card-transparent border-0 d-flex flex-column p-4">
                                        <h5>Usuario verificado en telecomunicaciones</h5>
                                        <span>★★★★★</span>
                                        <p>Hasta ahora ha sido muy fácil navegar por Deel y todo está diseñado con elegancia para que sea fácil de seguir.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 my-3">
                                    <div className="card card-transparent border-0 d-flex flex-column p-4">
                                        <h5>Usuario verificado en telecomunicaciones</h5>
                                        <span>★★★★★</span>
                                        <p>Es fácil de usar y la seguridad es fabulosa.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 me-4 my-3">
                                    <div className="card card-transparent border-0 d-flex flex-column p-4">
                                        <h5>Usuario verificado en telecomunicaciones</h5>
                                        <span>★★★★★</span>
                                        <p>Deel ha revolucionado la forma en que gestiono la nómina. Es confiable, fácil de usar y rentable, por lo que también es indispensable...</p>
                                    </div>
                                </div>
                            </div>                                
                        </div>
                    </div>
                    <div className="col-12 py-5 border-bottom">
                        <div className="row text-start">
                            <div className="col-12 col-lg-6">
                                <h2>Deel.</h2>
                                <ul class="nav col-12 col-md-9">
                                    <li class="nav-item">
                                        <a class="nav-link rounded-5 me-2 link-black" aria-current="page" href="#"><i class='bx bxl-twitter'></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link rounded-5 me-2" href="#"><i class='bx bxl-linkedin' ></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link rounded-5 me-2" href="#"><i class='bx bxl-facebook'></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link rounded-5" href="#"><i class='bx bxl-instagram' ></i></a>
                                    </li>
                                </ul>                            
                            </div>
                            <div className="d-none d-lg-block col-lg-2">
                                <h5>Como funciona</h5>
                                <ul className='px-0'>
                                    <li><a href="">Contratar empleados</a></li>
                                    <li><a href="">Contratar trabajadores independientes</a></li>
                                    <li><a href="">Ejecuta los Pagos Globales</a></li>
                                    <li><a href="">App Store</a></li>
                                    <li><a href="">API de Deel</a></li>
                                </ul>
                            </div>
                            <div className="d-none d-lg-block col-lg-2">
                                <h5>Soluciones</h5>
                                <ul className='px-0'>
                                    <li><a href="">Compliance</a></li>
                                    <li><a href="">Pagos</a></li>
                                    <li><a href="">Para equipos financieros</a></li>
                                    <li><a href="">Para equipos legales</a></li>
                                    <li><a href="">Para recursos humanos</a></li>
                                    <li><a href="">Startup</a></li>
                                    <li><a href="">Empresas</a></li>
                                    <li><a href="">Deel Solutions: España</a></li>
                                    <li><a href="">Deel Solutions: Francia</a></li>
                                </ul>
                            </div>
                            <div className="d-none d-lg-block col-lg-2">
                                <h5>Recursos</h5>
                                <ul className='px-0'>
                                    <li><a href="">Sobre Deel</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Centro de soporte</a></li>
                                    <li><a href="">Guia de Contratacion Global</a></li>
                                    <li><a href="">Programa de partners</a></li>
                                    <li><a href="">Afiliados</a></li>
                                    <li><a href="">Casos de Exito</a></li>
                                    <li><a href="">Trabaja con nosotros</a></li>
                                    <li><a href="">Glosario</a></li>
                                    <li><a href="">Press (Prensa)</a></li>
                                    <li><a href="">Estado del servicio</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row py-5">
                            <div className="col-12 d-lg-none">
                                <div class="accordion bg-dark text-start" id="accordionExample">
                                    <div class="accordion-item bg-dark">
                                        <h2 class="accordion-header bg-dark">
                                        <button class="accordion-button bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <h5>Como funciona</h5>
                                        </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div class="accordion-body bg-dark">
                                                <ul className='px-0'>
                                                    <li><a href="">Contratar empleados</a></li>
                                                    <li><a href="">Contratar trabajadores independientes</a></li>
                                                    <li><a href="">Ejecuta los Pagos Globales</a></li>
                                                    <li><a href="">App Store</a></li>
                                                    <li><a href="">API de Deel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item bg-dark">
                                        <h2 class="accordion-header bg-dark">
                                        <button class="accordion-button bg-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <h5>Soluciones</h5>
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body bg-dark">
                                                <ul className='px-0'>
                                                    <li><a href="">Compliance</a></li>
                                                    <li><a href="">Pagos</a></li>
                                                    <li><a href="">Para equipos financieros</a></li>
                                                    <li><a href="">Para equipos legales</a></li>
                                                    <li><a href="">Para recursos humanos</a></li>
                                                    <li><a href="">Startup</a></li>
                                                    <li><a href="">Empresas</a></li>
                                                    <li><a href="">Deel Solutions: España</a></li>
                                                    <li><a href="">Deel Solutions: Francia</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item bg-dark">
                                        <h2 class="accordion-header bg-dark">
                                        <button class="accordion-button bg-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <h5>Recursos</h5>
                                        </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body bg-dark">
                                                <ul className='px-0'>
                                                    <li><a href="">Sobre Deel</a></li>
                                                    <li><a href="">Blog</a></li>
                                                    <li><a href="">Centro de soporte</a></li>
                                                    <li><a href="">Guia de Contratacion Global</a></li>
                                                    <li><a href="">Programa de partners</a></li>
                                                    <li><a href="">Afiliados</a></li>
                                                    <li><a href="">Casos de Exito</a></li>
                                                    <li><a href="">Trabaja con nosotros</a></li>
                                                    <li><a href="">Glosario</a></li>
                                                    <li><a href="">Press (Prensa)</a></li>
                                                    <li><a href="">Estado del servicio</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12">

                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;