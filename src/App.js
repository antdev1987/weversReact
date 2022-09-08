import { useReducer } from 'react';

import { Fade } from 'react-reveal';
import Slide from 'react-reveal/Slide';

const initialState = {
  viewModal: false,
  modalEscoger: true,
  modalEmpresa: false,
  modalPersona: false,
  modalTrabajando: false,
};

const popUp = (state = initialState, { type }) => {
  switch (type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalEscoger: true,
        viewModal: !state.viewModal,
        modalTrabajando: false,
      };

    case 'EMPRESA':
      return {
        ...state,
        modalEmpresa: true,
        modalPersona: false,
        modalTrabajando: false,
      };

    case 'PERSONA':
      return {
        ...state,
        modalEmpresa: false,
        modalPersona: true,
        modalTrabajando: false,
      };

    case 'TRABAJO':
      return {
        ...state,
        viewModal: true,
        modalEscoger: false,
        modalEmpresa: false,
        modalPersona: false,
        modalTrabajando: true,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(popUp, initialState);

  return (
    <>
      {/* menu */}
      <nav className="nav" id="nav">
        <div className="nav__content container">
          <img
            src="images/MENU/Menu logo wevers.png"
            alt="logo wevers"
            loading="lazy"
            className="nav__logo"
          />

          <ul className="nav__container">
            {/* box */}
            <li className="nav__links-box">
              <a href="#nosotros" className="nav__links">
                {' '}
                nosotros{' '}
              </a>
            </li>
            {/* box */}

            {/* box */}
            <li className="nav__links-box">
              <a href="#roadMap" className="nav__links">
                {' '}
                road map{' '}
              </a>
            </li>
            {/* box */}

            {/* box */}
            <li className="nav__links-box">
              <a href="#partners" className="nav__links">
                {' '}
                partners{' '}
              </a>
            </li>
            {/* box */}

            {/* box */}
            <li className="nav__links-box">
              <button
                className="nav__links"
                onClick={() => {
                  dispatch({ type: 'TOGGLE_MODAL' });
                }}
              >
                contactanos
              </button>
            </li>
            {/* box */}
          </ul>

          <div className="hamburguer">
            <a href="#nav" className="hamburguer__open">
              <img src="images/menu.svg" alt="" />
            </a>
            <a href="#des" className="hamburguer__close">
              <img src="images/close.svg" alt="" />
            </a>
          </div>
        </div>
      </nav>
      {/* menu */}

      {/* decorative */}
      <div>
        <Slide left>
          <img
            src="images/TRIBE HUB/tribe hub w1.png"
            alt=""
            loading="lazy"
            className="fade decorative__w decorative__w--1"
          />
        </Slide>
      </div>

      <div>
        <Slide right>
          <img
            src="images/TRIBE HUB/tribe hub w2.png"
            alt=""
            loading="lazy"
            className="fade decorative__w decorative__w--2"
          />
        </Slide>
      </div>

      <div>
        <Slide left>
          <img
            src="images/TRIBE HUB/3.png"
            alt=""
            loading="lazy"
            className="fade decorative__w decorative__w--3"
          />
        </Slide>
      </div>

      <div>
        <Slide right>
          <img
            src="images/TRIBE HUB/tribe hub w4.png"
            alt=""
            loading="lazy"
            className="fade decorative__w decorative__w--4"
          />
        </Slide>
      </div>
      {/* decorative */}

      {/* modal */}
      {state.viewModal && (
        <div id="myModal" className="modal">
          {/* Modal content */}
          <div className="modal-content">
            <span
              className="close"
              onClick={() => {
                dispatch({ type: 'TOGGLE_MODAL' });
              }}
            >
              &times;
            </span>

            {state.modalEscoger && (
              <Fade top>
                <div className="modal__option" id="modalescoger">
                  <div className="modal__escoger">
                    <button
                      className="option"
                      id="empresa"
                      onClick={() => dispatch({ type: 'EMPRESA' })}
                    >
                      Comunidad / Empresa
                    </button>
                    <button
                      className="option"
                      id="persona"
                      onClick={() => dispatch({ type: 'PERSONA' })}
                    >
                      Persona
                    </button>
                  </div>
                </div>
              </Fade>
            )}

            {state.modalEmpresa && (
              <Fade left>
                <div className="modal__option" id="modalempresa">
                  <div className="text-center">
                    <img
                      src="images/WEVERS CENTRAL/wevers central logo.png"
                      alt=""
                      className="nav__logo"
                    />
                  </div>

                  <form>
                    <div className="modal__flex">
                      <div className="modal__box">
                        <div>
                          <label htmlFor="#">Nombre y Apellido</label>
                          <input type="text" placeholder="Escribe tu nombre" />
                        </div>

                        <div className="mT-3">
                          <label htmlFor="#">Tipo de Comunidad / Empresa</label>
                          <input type="text" placeholder="Selecciona" />
                        </div>

                        <div className="mT-3">
                          <label htmlFor="#">Comunidad / Empresa</label>
                          <input
                            placeholder="Escribe tu Comunidad / Empresa"
                            list="trabajos"
                          />

                          <datalist id="trabajos">
                            <option value="red">red</option>
                            <option value="white">white</option>
                            <option value="yellow">yellow</option>
                          </datalist>
                        </div>

                        <div className="mT-3">
                          <label htmlFor="#">
                            No. Personas de su Comunidad / Empresa
                          </label>
                          <input type="text" placeholder="1,2,3..." />
                        </div>
                      </div>

                      <div className="line"></div>

                      <div className="modal__box">
                        <div>
                          <label htmlFor="#">¿Cómo conociste Wevers?</label>
                          <input
                            type="text"
                            placeholder="Escribe tu respuesta"
                          />
                        </div>

                        <div className="mT-3">
                          <label htmlFor="#">
                            ¿Pórque deseas pertenecer a Wevers?
                          </label>
                          <textarea></textarea>
                        </div>

                        <div className="two-columns mT-3">
                          <div>
                            <label htmlFor="#">WebSite</label>
                            <input type="" placeholder="www..." />
                          </div>
                          <div>
                            <label htmlFor="#">Celular +</label>
                            <input type="text" placeholder="123..." />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mT-3">
                      <button className="submit" type="submit">
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </Fade>
            )}

            {state.modalPersona && (
              <Fade right>
                <div className="modal__option" id="modalpersona">
                  <div className="text-center">
                    <img
                      src="images/WEVERS CENTRAL/wevers central logo.png"
                      alt=""
                      className="nav__logo"
                    />
                  </div>

                  <form>
                    <div className="modal__flex">
                      <div className="modal__box">
                        <div>
                          <label htmlFor="#">Nombre y Apellido</label>
                          <input type="text" placeholder="Escribe tu nombre" />
                        </div>

                        <div className="mT-3">
                          <label htmlFor="#">¿Cómo conociste Wevers?</label>
                          <input
                            type="text"
                            placeholder="Escribe tu respuesta"
                          />
                        </div>
                      </div>

                      <div className="line"></div>

                      <div className="modal__box">
                        <div>
                          <label htmlFor="#">
                            ¿Pórque deseas pertenecer a Wevers?
                          </label>
                          <input
                            type="text"
                            placeholder="Escribe tu respuesta"
                          />
                        </div>

                        <div className="two-columns mT-3">
                          <div>
                            <label htmlFor="#">Celular +</label>
                            <input type="text" placeholder="123..." />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mT-3">
                      <button className="submit" type="submit">
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </Fade>
            )}

            {state.modalTrabajando && (
              <Fade bottom>
                <div className="modal__option" id="modaltrabajando">
                  <div className="text-center">
                    <img
                      src="images/WEVERS CENTRAL/wevers central logo.png"
                      alt=""
                      className="nav__logo"
                    />
                  </div>

                  <form>
                    <div className="modal__flex">
                      <div className="modal__box">
                        <div>
                          <label htmlFor="#">Nombre y Apellido</label>
                          <input type="text" placeholder="Escribe tu nombre" />
                        </div>

                        <div className="mT-3">
                          <label htmlFor="#">Profesión</label>
                          <input
                            type="text"
                            placeholder="Escribe tu respuesta"
                          />
                        </div>

                        <div className="mT-3">
                          <label htmlFor="#">¿Cómo conociste Wevers?</label>
                          <input
                            type="text"
                            placeholder="Escribe tu respuesta"
                          />
                        </div>
                      </div>

                      <div className="line"></div>

                      <div className="modal__box">
                        <div>
                          <label htmlFor="#">
                            ¿Pórque deseas pertenecer a Wevers?
                          </label>
                          <textarea></textarea>
                        </div>

                        <div className="two-columns mT-3">
                          <div>
                            <label htmlFor="#">WebSite</label>
                            <input type="" placeholder="www..." />
                          </div>
                          <div>
                            <label htmlFor="#">Celular +</label>
                            <input type="text" placeholder="123..." />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mT-3">
                      <button className="submit" type="submit">
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </Fade>
            )}
          </div>
        </div>
      )}
      {/* modal */}

      {/* header */}
      <header className="header container">
        <h3 className="title title--sub gray">BIENVENIDOS A WEVERS</h3>

        <h1 className="title title--main">
          LA MEJOR FORMA DE CONECTAR TU COMUNIDAD EN EL METAVERSO
        </h1>

        <h3 className="title title--sub">
          Somos el Hub de las comunidades del Metaverso
        </h3>

        <iframe
          src="https://player.vimeo.com/video/739808589?h=2734ada04f"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="vimeo"
        ></iframe>

        <div className="unete">
          <h2 className="unete__title">Únete a la tribu!</h2>

          <ul className="unete__container">
            {/* li */}
            <li>
              <a href="http://assets.virbela.com/installer/wevers/Wevers.dmg">
                <img
                  src="images/UNETE  NOSOTROS GENERAL/unete a nosotros mac.png"
                  alt="unete a nosotros decargar apple"
                  loading="lazy"
                  className="btn"
                />
              </a>
            </li>
            {/* li */}

            {/* li */}
            <li>
              <a href=" http://assets.virbela.com/installer/wevers/WeversSetup.exe">
                <img
                  src="images/UNETE  NOSOTROS GENERAL/unete a nosotros windows.png"
                  alt="unete a nosotros decargar apple"
                  loading="lazy"
                  className="btn"
                />
              </a>
            </li>
            {/* li */}
          </ul>

          <div className="mT-5">
            <a
              href="https://calendly.com/estebanmerizalde/30min?month=2022-08&back=1"
              className="submit"
              target="_blank"
              rel="noreferrer"
            >
              Agenda una reunión
            </a>
          </div>
        </div>
      </header>
      {/* header */}

      {/* main */}
      <main className="container container--small mT-15">
        {/* que hacemos article */}
        <article className="queHacemos text-center">
          <img
            src="images/QUE HACEMOS/que hacemos titulo.png"
            alt="que hacemos"
            loading="lazy"
            className="img-title"
          />

          <p className="parrafo mT-3">
            Conectamos comunidades en una Tribu que contribuye a un crecimiento
            mutuo en una economía colaborativa de alto impacto
          </p>
        </article>
        {/* que hacemos section */}

        {/* tribu */}
        <article className="tribu mT-15">
          <div className="fade text-center">
            <Slide bottom>
              <img
                src="images/TRIBE HUB/tribe hub titulo.png"
                alt="tribe hub"
                className="img-title--small"
              />
            </Slide>
          </div>

          <Slide left>
            <div className="animation-element slide-left tribu--container-small container mT-15">
              <h2 className="title title--main">Enterprise:</h2>

              <div className="parrafo">
                <p>Innovación y presencia web3 para tu compañía</p>

                <p className="mT-3">
                  Todos los colaboradores de tu empresa dentro de tu oficina
                  virtual, salas de reuniones, auditorios y eventos en un
                  metaverso exclusivamente de negocios, donde la economía
                  colaborativa es parte de la cultura para crear un crecimiento
                  de alto impacto en conjunto con nuestra TRIBU MUNDIAL.
                </p>
              </div>
            </div>
          </Slide>

          <Slide right>
            <div className="animation-element slide-right tribu--container-small text-end mT-15">
              <h2 className="title title--main">Entrepreneurship:</h2>

              <div className="parrafo">
                <p className="fw-500">Tu Coworking en el Metaverso</p>

                <p className="mT-3">
                  Conecta con gente alrededor del mundo con tu misma mentalidad
                  emprendedora
                </p>

                <ul className="list-style-none mT-3">
                  <li>
                    <p>
                      -Wevers Labs te ayudará a acelerar tu idea y convertirla
                      en realidad
                    </p>
                  </li>
                  <li className="mT-3">
                    <p>
                      -Wevers Ventures te ayudará a escalar y capitalizar tu
                      emprendimiento.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Slide>

          <Slide left>
            <div className="animation-element slide-left tribu--container-small mL-auto mT-15">
              <h2 className="title title--main">Educación:</h2>

              <div className="parrafo">
                <p>
                  Lleva la experiencia de educación para tus estudiantes al
                  siguiente nivel.
                </p>

                <p className="mT-3">
                  Contamos con tecnología lista para llevar la educación a un
                  nuevo nivel de experiencia, innovación e interacción para
                  Universidades, escuelas y academias de todo el mundo.
                </p>

                <p className="mT-3">
                  Puedes tener tu Campus exclusivo o unirte a nuestro campus de
                  educación con un ambiente de valores, crecimiento social e
                  intelectual en nuestra comunidad.
                </p>
              </div>
            </div>
          </Slide>

          <Slide right>
            <div className="animation-element slide-right tribu--container-small text-end mT-15">
              <h2 className="title title--main">Innovación Social:</h2>

              <div className="parrafo">
                <p>
                  Nuestro objetivo es impactar y colaborar con organizaciones
                  sociales en su misión.
                </p>

                <p className="mT-3">
                  Nuestro metaverso es una herramienta tecnológica que permite
                  unir comunidades globales para generar apoyo a <br />
                  las causas sociales en el mundo. Eventos, Expos, Recaudación
                  de fondos, Oficinas para tu organización mundial en el
                  metaverso , salas de reuniones y mucho más.
                </p>
              </div>
            </div>
          </Slide>

          <Slide left>
            <div className="animation-element slide-left tribu--container-small container mT-15">
              <h2 className="title title--main">Trading y Crypto:</h2>

              <div className="parrafo">
                <p>
                  Unimos las comunidades, brokers, academias más prestigiosas en
                  el metaverso.
                </p>

                <p className="mT-3">
                  Web3 y metaverso juntas son una fórmula muy poderosa, el
                  trading se está convirtiendo en una de las habilidades y
                  conocimientos mejor pagados del mundo, por esta razón creamos
                  nuestro metaverso exclusivo de Trading y Crypto “Bullfy” con
                  las mayores comunidades, Academias, Brokers y traders del
                  mundo en un mismo lugar en el metaverso.
                </p>
              </div>
            </div>
          </Slide>

          <Slide right>
            <div className="animation-element slide-right tribu--container-small text-end mT-15">
              <h2 className="title title--main">
                Deportes y <span className="d-block">Entretenimiento:</span>
              </h2>

              <div className="parrafo">
                <p>
                  Contamos con Estadios para conciertos, eventos, predicciones
                  deportivas y personalizaciones a medida en realidad virtual.
                </p>
              </div>
            </div>
          </Slide>

          <Slide left>
            <div className="animation-element slide-left tribu--container-small mL-auto mT-15">
              <h2 className="title title--main">Insurtech:</h2>

              <div className="parrafo">
                <p>
                  Potenciamos la industria Insurtech llevándola a la web3 y al
                  metaverso.
                </p>

                <p className="mT-3">
                  Campus exclusivamente para aseguradoras, brokers y agentes
                  alrededor del mundo, donde si eres cliente o dueño de negocio
                  podrás encontrar el ecosistema perfecto de oficinas,
                  auditorios, ferias de exposición y educación en torno al gran
                  mundo INSURTECH.
                </p>
              </div>
            </div>
          </Slide>

          <Slide right>
            <div className="animation-element slide-right tribu--container-small text-end mT-15">
              <h2 className="title title--main">LegalTech</h2>

              <div className="parrafo">
                <p>
                  Los beneficios de nuestras herramientas legaltech permiten a
                  los abogados ser más eficientes y les invita a vivir una nueva
                  forma de ejercer su profesión.
                </p>

                <p className="mT-3">
                  De la misma manera, permite a miles de clientes y usuarios de
                  servicios jurídicos alrededor del mundo obtener el acceso a
                  éstos servicios de forma rápida, dinámica y sencilla. El
                  metaverso facilita y potencializa las relaciones virtuales,
                  rompiendo todas las barreras físicas, permitiendo que casi
                  todo tipo de negocios puedan llevarse a cabo allí.
                </p>

                <p className="mT-3">
                  Es imperioso convertirte en un abogado digital y la forma más
                  sencilla y rápida para lograrlo es con la ayuda de nuestras
                  herramientas legaltech y nuestra consultoría.
                </p>

                <p className="mT-3">
                  Ahora tienes la oportunidad de ser parte de la mayor comunidad
                  de abogados digitales del mundo
                </p>
              </div>
            </div>
          </Slide>
        </article>
        {/* tribu */}
      </main>
      {/* main */}

      {/* section */}
      <section className="bg-purple container">
        <Slide bottom>
          <div className="unete fade mT-15">
            <h2 className="unete__title">¿TIENES UNA COMUNIDAD?</h2>

            <div className="mT-3">
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                className="openModal"
                onClick={() => dispatch({ type: 'TOGGLE_MODAL' })}
              >
                <img
                  src="images/TIENES UNA COMUNIDAD/¿Tienes una comunidad_ unete a la tribu.png"
                  alt="unete a la tribu"
                  loading="lazy"
                  className="btn--small"
                />
              </button>
            </div>

            <div className="fade text-center title mT-7">
              <img
                src="images/wevers tu trib,tu lugar en el metaverso.png"
                alt="tu tribu tu lugar en el metaverso"
                className="img-title"
              />
            </div>
          </div>
        </Slide>
      </section>
      {/* section */}

      {/* section */}
      <section className="nuestro mT-15">
        <div className="text-center">
          <img
            src="images/NUESTRO METAVERSO/nuestro metaverso titulo.png"
            alt="nuestro metaverso"
            loading="lazy"
            className="img-title"
          />
        </div>

        <div>
          <img
            src="images/NUESTRO METAVERSO/NUESTRO METAVERSO IMAGEN.png"
            alt="metaverso"
            className="w-100"
          />
        </div>

        <div className="unete mT-3">
          <h2 className="unete__title">Únete a la tribu!</h2>

          <ul className="unete__container">
            {/* li */}
            <li>
              <a href="http://assets.virbela.com/installer/wevers/Wevers.dmg">
                <img
                  src="images/UNETE  NOSOTROS GENERAL/unete a nosotros mac.png"
                  alt="unete a nosotros decargar apple"
                  loading="lazy"
                  className="btn"
                />
              </a>
            </li>
            {/* li */}

            {/* li */}
            <li>
              <a href=" http://assets.virbela.com/installer/wevers/WeversSetup.exe">
                <img
                  src="images/UNETE  NOSOTROS GENERAL/unete a nosotros windows.png"
                  alt="unete a nosotros decargar apple"
                  loading="lazy"
                  className="btn"
                />
              </a>
            </li>
            {/* li */}
          </ul>
          <div className="mT-5">
            <a
              href="https://calendly.com/estebanmerizalde/30min?month=2022-08&back=1"
              className="submit"
              target="_blank"
              rel="noreferrer"
            >
              Agenda una reunión
            </a>
          </div>
        </div>
      </section>
      {/* section */}

      {/* section */}
      <section className="ecosistema container text-center">
        <video autoPlay muted playsInline>
          <source src="ecosistema animacion 2.mp4" />
        </video>
      </section>
      {/* section */}

      {/* road Map */}
      <section className="roadMap" id="roadMap">
        <img src="images/ROADMAP/road map titulo.png" alt="" className="bg3" />
        <div className="text-center">
          <h2 className="title title--main">RoadMap</h2>
        </div>
        <div className="roadMap__content container parrafo">
          <ul className="roadMap__ul roadMap__ul--2">
            <li className="text-center title mT-7">
              <h2 className="title title--sub">QUARTER 2 2022</h2>
            </li>
            <li>
              <Fade top>
                <p className="fade">1ª EDICIÓN METAVERSO WEVERS</p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  IMPLEMENTACIÓN DE LA ESTRUCTURA LEGAL WEVERS
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  RONDA DE INVERSIÓN WEVERS FAMILIA Y AMIGOS
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  ACCESO ANTICIPADO A LOS FUNDADORES DEL METAVERSO WEVERS
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  PRE LANZAMIENTO E INVITACIÓN A COMUNIDADES, EMPRESAS Y EVENTOS
                  EDUCATIVOS
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  LANZAMIENTO ESTRATEGIA DE RELACIONES PÚBLICAS Y REDES SOCIALES
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  LANZAMIENTO ECOSISTEMA WEVERS: BULLFY - LEGALTECH - INSURTECH
                  - ENTERPRISE- INNOVACION SOCIAL- ENTREPRENEURSHIP- EDUCACIÓN
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  EXPANSIÓN DE TALENTO Y EQUIPO - APERTURA OFICINAS EN MIAMI
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  LANZAMIENTO PROGRAMA DE AFILIADOS Y MARKETPLACE WEVERS
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">VENTA PRIVADA DE TOKEN WEVERS</p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  LANZAMIENTO ECOSISTEMA FINTECH PARA LA COMUNIDAD DE WEVERS
                </p>
              </Fade>
            </li>
          </ul>

          <ul className="roadMap__ul roadMap__ul--3">
            <li className="text-center title mT-7">
              <h2 className="title--sub">QUARTER 3 2022</h2>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  COMIENZA WHITELIST DE LA PRIMERA COLECCIÓN WEVERS NFT
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  MINT DE LA LISTA BLANCA DE LA PRIMERA COLECCIÓN DE WEVERS NFT
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  MINT PÚBLICA DE LA PRIMERA COLECCIÓN DE WEVERS NFT
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  BULLFY LANZA 1ª EXPO WEB3 EN EL METAVERSO
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  LANZAMIENTO DEL METAVERSO “ PLANETA W” (VENTA DE TIERRAS EN EL
                  METAVERSO)
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">WEVERS SUMMIT EUROPA EN BARCELONA</p>
              </Fade>
            </li>
          </ul>

          <ul className="roadMap__ul roadMap__ul--4">
            <li className="text-center title mT-7">
              <h2 className="title title--sub">QUARTER 4 2022</h2>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  LANZAMIENTO DE WEVERSLAB & WEVERS VENTURES
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  LANZAMIENTO “BULLFY APP” PARA LAS COMUNIDADES
                </p>
              </Fade>
            </li>
          </ul>

          <ul className="roadMap__ul roadMap__ul--5">
            <li className="text-center title mT-7">
              <h2 className="title title--sub">QUARTER 1 2023</h2>
            </li>
            <li>
              <Fade top>
                <p className="fade">WEVERS SUMMIT LATINOAMÉRICA EN CANCÚN</p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  COMIENZA EL WHITELIST DE LA SEGUNDA COLECCIÓN WEVERS NFT
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  MINT DE LA LISTA BLANCA DE LA SEGUNDA COLECCIÓN DE WEVERS NFT
                </p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">
                  MINT PUBLICO WEVERS SEGUNDA COLECCIÓN DE WEVERS NFT
                </p>
              </Fade>
            </li>
          </ul>

          <ul className="roadMap__ul roadMap__ul--6">
            <li className="text-center title mT-7">
              <h2 className="title title--sub">QUARTER 2</h2>
            </li>
            <li>
              <Fade top>
                <p className="fade">WEVERS SUMMIT MUNDIAL EN DUBAI</p>
              </Fade>
            </li>
            <li>
              <Fade top>
                <p className="fade">REVELACIÓN ROADMAP 2.0</p>
              </Fade>
            </li>
          </ul>
        </div>
      </section>
      {/* road Map */}

      {/* section */}
      <section className="weversCentral">
        <div className="bg2"></div>
        <img
          src="../images/WEVERS CENTRAL/wevers central fondo.png"
          alt=""
          className="bg"
        />

        <div className="unete container">
          <img
            src="images/WEVERS CENTRAL/wevers central logo.png"
            alt=""
            className="nav__logo"
          />

          <h2 className="unete__title">Únete a la tribu!</h2>

          <ul className="unete__container">
            {/* li */}
            <li>
              <a href="http://assets.virbela.com/installer/wevers/Wevers.dmg">
                <img
                  src="images/UNETE  NOSOTROS GENERAL/unete a nosotros mac.png"
                  alt="unete a nosotros decargar apple"
                  loading="lazy"
                  className="btn"
                />
              </a>
            </li>
            {/* li */}

            {/* li */}
            <li>
              <a href=" http://assets.virbela.com/installer/wevers/WeversSetup.exe">
                <img
                  src="images/UNETE  NOSOTROS GENERAL/unete a nosotros windows.png"
                  alt="unete a nosotros decargar apple"
                  loading="lazy"
                  className="btn"
                />
              </a>
            </li>
            {/* li */}
          </ul>
        </div>
      </section>
      {/* section */}

      {/* section */}
      <section className="equipo container">
        <div className="text-center">
          <img
            src="images/NUESTRO EQUIPO/nuestro quipo titulo.png"
            alt=""
            className="equipo__logo"
          />
        </div>

        <div className="equipo__box mT-7">
          <div className="equipo__content">
            <div>
              <img src="images/equipo/Nelson.png" alt="" />
            </div>

            <div>
              <h2>Nelson Espinoza</h2>
              <p>CEO & Fundador</p>
            </div>
          </div>

          <div className="equipo__content">
            <div>
              <img src="images/equipo/esteban.png" alt="" />
            </div>

            <div>
              <h2>Esteban Merizalde</h2>
              <p>Vicepresidente de Desarrollo de Negocios & Fundador</p>
            </div>
          </div>

          <div className="equipo__content">
            <div>
              <img src="images/equipo/Rodolfo.png" alt="" />
            </div>

            <div>
              <h2>Rodolfo Rodríguez</h2>
              <p>
                Vicepresidente de ventas & <br />
                Fundador
              </p>
            </div>
          </div>

          <div className="equipo__content">
            <div>
              <img src="images/equipo/David.png" alt="" />
            </div>

            <div>
              <h2>David Treus</h2>
              <p>CMO & Fundador</p>
            </div>
          </div>

          <div className="equipo__content">
            <div>
              <img src="images/equipo/hazma.png" alt="" />
            </div>

            <div>
              <h2>Hamza Fathallah</h2>
              <p>CFO & Tecnología</p>
            </div>
          </div>
        </div>
      </section>
      {/* section */}

      {/* section */}
      <section className="partners container mT-15" id="partners">
        <div className="text-center">
          <img
            src="images/NUESTROS PARTNERS/nestros partners titulo.png"
            alt=""
            className="equipo__logo equipo__logo--small"
          />
        </div>

        <div className="text-center mT-3">
          <img
            src="images/NUESTROS PARTNERS/nestros partners logos.png"
            alt=""
            className="equipo__logo"
          />
        </div>
      </section>
      {/* section */}

      {/* section */}
      <section className="container">
        <div className="unete mT-15">
          <h2 className="unete__title">¿TIENES UNA COMUNIDAD?</h2>

          <div className="mT-3">
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              className="openModal"
              onClick={() => dispatch({ type: 'TOGGLE_MODAL' })}
            >
              <img
                src="images/TIENES UNA COMUNIDAD/¿Tienes una comunidad_ unete a la tribu.png"
                alt="unete a la tribu"
                loading="lazy"
                className="btn--small"
              />
            </button>
          </div>
        </div>
      </section>
      {/* section */}

      {/* footer */}
      <footer className="footer">
        <img
          src="images/IMAGEN METAVERSO FINAL.png"
          alt="logo wevers"
          className="footer__w"
        />

        <div className="footer__container container">
          <div>
            <img
              src="images/FOOTER/footer wevers logo.png"
              alt=""
              className="footer__logo"
            />

            <ul className="footer__ul mT-3">
              <li>
                <a
                  href="https://www.instagram.com/weversoficial/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="images/FOOTER/footer instagram.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/wevers.club/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="images/FOOTER/footer facebook.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Weversoficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="images/FOOTER/footer twitter.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@wevers.club"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="images/FOOTER/footer tik tok.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/wevers-oficial/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="images/FOOTER/footer linkedin.png" alt="" />
                </a>
              </li>
            </ul>

            <p className="parrafo mT-3">@2022 MB Masterbusiness Inc.</p>
          </div>

          <div>
            <h3 className="footer__sub">Únete</h3>

            <ul className="footer__box">
              <li>
                <a href="#unete" rel="noreferrer">
                  Únete a nuestra tribu
                </a>
              </li>
              <li>
                <a href="#programa">Programa de afiliados</a>
              </li>
              <li>
                <a href="#alianza">Alianzas de Tecnologías</a>
              </li>
              <li>
                <a href="#wever">Wevers Studio</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__sub">Explora</h3>

            <ul className="footer__box">
              <li>
                <a href="#eventos">Eventos</a>
              </li>

              <li>
                <a href="#blog">Blog</a>
              </li>

              <li>
                <a href="#pregunta">Preguntas frecuentes</a>
              </li>
            </ul>
          </div>

          <div>
            <button
              id="trabaja"
              className="submit"
              onClick={() => {
                dispatch({ type: 'TRABAJO' });
              }}
            >
              Trabaja con nosotros
            </button>
          </div>
        </div>
      </footer>
      {/* footer */}
    </>
  );
}

export default App;
