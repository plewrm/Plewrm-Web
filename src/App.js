import homeImage from '../src/Images/pi1.gif'
import midImage from '../src/Images/pi2.gif'
import prodImage from '../src/Images/pi3.gif'
import testImageF from '../src/Images/pi4.gif'
import testImageS from '../src/Images/pi5.gif'
import socialProdF from '../src/Images/di1.png'
import socialProdS from '../src/Images/di2.png'
import socialProdT from '../src/Images/di3.png'
import socialProdE from '../src/Images/di4.png'
import socialImageF from '../src/Images/si1.gif'
import socialIageS from '../src/Images/si2.gif'
import socialIageT from '../src/Images/si3.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faBookOpen, faBookOpenReader, faStar, faStarEmpty, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import "./Styles/style.css"
import Footer from './Footer'
function App() {
  return (
    <div >
      {/* <div className="App"> */}
      <nav class="navbar navbar-expand-lg bg-color py-5 pt-lg-5">
        <div class="container">
          {/* <div class="container-fluid"> */}
          {/* here flude are use all area and only container make maintained sapce around */}
          <a class="navbar-brand text-white" href="#">PLEWRM</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0"> */}
              {/* Home/Link are movie to start position */}
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-capitalize" href="#online-section">services</a>
              </li><li class="nav-item">
                <a class="nav-link text-capitalize" href="#about-services">about </a>
              </li><li class="nav-item">
                <a class="nav-link text-capitalize" href="#contact-us">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section class="bg-main bg-color hero-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 mt-5 mt-lg-0 text-center text-lg-start order-lg-0 order-1 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
              <h1 class="text-capitalize fw-bolder text-white">Hello BootStrap Design World</h1>
              <p class="mt-3 mb-5 para-width text-light-grey">Pepper CMP helps marketing teams ideate,
                create and distribute content fast and at scale with the power of generative AI and our expert talent network</p>
              <div class="text-center w-100 text-md-start">
                <button type="button" class="btn btn-secondary px-4 py-2"
                  data-bs-toggle="tooltip" data-bs-placement="top"
                  data-bs-custom-class="custom-tooltip"
                  data-bs-title="This top tooltip is themed via CSS variables.">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col-12 order-lg-1 order-0 col-md-12 col-lg-6">
              <div className="text-center text-lg-end">
                <img src={homeImage} alt='Not Dispaly' class="object-fit-contain hero-video--section" autoplay></img>


              </div>
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1689170019">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
      </section>
      {/* service section */}
      <section class="services-section" id="about-services">
        <div class="container text-center common-title fw-bold">
          <h2 class="common-heading mt-5"> What will we do About</h2>
          <hr class="w-25 mx-auto" />
        </div>
        <div className="container mt-5">
          <div className="row g-5">
            <div className="col-xxl-4 col-lg-4 col-12">
              <div className="text-center card-box shadow rounded-2 p-5">
                <img src={socialImageF} alt='linking' className='img-flude' width="200px" />
                <h4 class="my-3 fw-normal">Connect people</h4>
                <p class='mb-5'>Social media are interactive technologies that facilitate the creation and sharing of information, ideas, interests, and other forms of expression through virtual communities and networks.</p>
                <div className="d-flex justify-content-center align-items-center">
                  <a href='#services'>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-4 col-12">
              <div className="text-center card-box shadow rounded-2 p-5">
                <img src={socialIageS} alt='linking' className='img-flude' width="200px" autoplay />
                <h4 class="my-3 fw-normal">Gathering Information</h4>
                <p class='mb-5'>As Boyd also describes, when Facebook initially launched in 2004, it solely targeted college students and access was intentionally limited.</p>
                <div className="d-flex justify-content-center align-items-center">
                  <a href='#services'>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-4 col-12">
              <div className="text-center card-box shadow rounded-2 p-5">
                <img src={socialIageT} alt='linking' className='img-flude' width="200px" autoplay />
                <h4 class="my-3 fw-normal">Share Easily</h4>
                <p class='mb-5'>The term social in regard to media suggests that platforms are user-centric and enable communal activity.</p>
                <div className="d-flex justify-content-center align-items-center">
                  <a href='#services'>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* second design section */}
      <section class="bg-color more-info-section">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-12 col-lg-6 img-section">
              <div className="text-center text-lg-start mb-5">
                <img src={midImage} alt='Not Dispaly' class="object-fit-contain image-flude " autoplay></img>
              </div>
            </div>
            <div className="col-12 col-md-12 text-center text-lg-start col-lg-6 d-flex flex-column justify-content-center align-items-start">
              <h1 class="text-capitalize fw-bolder text-white common-heading">BootStrap Design World Hello, welcome</h1>
              <p class="mt-3 mb-5 para-width text-light-grey">Pepper CMP helps marketing teams ideate,
                create and distribute content fast and at scale with the power of generative AI and our expert talent network</p>
              <div class="text-center w-100 text-md-start">
                <button type="button" class="btn btn-secondary px-4 py-2"
                  data-bs-toggle="tooltip" data-bs-placement="top"
                  data-bs-custom-class="custom-tooltip"
                  data-bs-title="This top tooltip is themed via CSS variables.">
                  Visit Now
                </button>
              </div>
            </div>

          </div>
        </div>

      </section>
      {/* Production /commpn section */}
      <section class="common-section business-section" id='online-section'>
        <div class="container text-center common-title fw-bold">
          <h2 class="common-heading text-capitalize"> our Barnding, Production's And Services</h2>
          <hr class="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-m-12 col-lg-6">
              <div className=" d-flex px-3 py-5 shadow">
              {/* <img src={socialProdF} alt='Not Dispaly' class="d-md-block  img-flude mx-3 " width="150px" autoplay></img> */}
                <img src={socialProdF} alt='Not Dispaly' class="d-md-block d-none img-flude mx-3 " width="150px" autoplay></img>
                <div >
                  <p className="mb-3 fw-bolder">Debate over use in academic settings  </p>
                  <p>Social media content, like most content on the web, will continue to persist unless the user deletes it. This brings up the inevitable question of what to do once a social media user dies, and no longer has access to their content.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-m-12">
              <div className=" d-flex px-3 py-5 shadow">
                {/* <img src={socialProdS} alt='Not Dispaly' class="d-md-block  img-flude mx-3 " width="150px" autoplay></img> */}
                <img src={socialProdS} alt='Not Dispaly' class="d-md-block d-none  img-flude mx-3 " width="150px" autoplay></img>
                <div >
                  <p className="mb-3 fw-bolder">Settings use in academic settings content  </p>
                  <p>Social media content,content on the web, will like mostcademic settings content content on the web, the user deletes it. This brings up the inevitable question of what to do once a social media user dies, and no longer has access to their content.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-m-12 ">
              <div className=" d-flex px-3 py-5 shadow">
                <img src={socialProdT} alt='Not Dispaly' class="d-md-block d-none img-flude mx-3 " width="150px" autoplay></img>
                {/* <img src={socialProdT} alt='Not Dispaly' class="d-md-block  img-flude mx-3 " width="150px" autoplay></img> */}
                <div >
                  <p className="mb-3 fw-bolder">Like most content onin academic settings  </p>
                  <p>Social media content, like most content on the web, will continue to persist unless the user deletes it. This brings up the inevitable question of what to do once a social media user dies, and no longer has access to their content.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-m-12 ">
              <div className=" d-flex px-3 py-5 shadow">
                <img src={socialProdE} alt='Not Dispaly' class="d-md-block d-none  img-flude mx-3 " width="150px" autoplay></img>
                {/* <img src={socialProdE} alt='Not Dispaly' class="d-md-block  img-flude mx-3 " width="150px" autoplay></img> */}
                <div >
                  <p className="mb-3 fw-bolder">continue to persist use in academic settings  </p>
                  <p>Social media content, will continue to persist unless cademic settings content  cademic settings content the user deletes it. This brings up the inevitable question of what to do once a social media user dies, and no longer has access to their content.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* testimonial section here  */}

      <section class="services-section mb-5 pt-5 bg-color">
        <div class="container text-center common-title fw-bold">
          <h2 class="common-heading text-capitalize text-white">The Client Suggetions</h2>
          <hr class="w-25 mx-auto text-white" />
        </div>

        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="container">
                <div className="row g-5">
                  <div className="col-12 col-lg-4 ">
                    <div className="d-flex justify-content-center align-items-center">
                      <div class="card p-3" style={{ width: 300 }}>
                        <img src={testImageS} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title mb-3">UI/UX Design</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <div className="mt-3">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 ">
                    <div className="d-flex justify-content-center align-items-center">
                      <div class="card p-3" style={{ width: 300 }}>
                        <img src={testImageS} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title mb-3">Design Front-End</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <div className="mt-3">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 ">
                    <div className="d-flex justify-content-center align-items-center">
                      <div class="card p-3" style={{ width: 300 }}>
                        <img src={testImageS} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title mb-3">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <div className="mt-3">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="carousel-item">
              <div className="container">
                <div className="row g-5">
                  <div className="col-12 col-lg-4 ">
                    <div className="d-flex justify-content-center align-items-center">
                      <div class="card p-3" style={{ width: 300 }}>
                        <img src={testImageS} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title mb-3">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <div className="mt-3">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 ">
                    <div className="d-flex justify-content-center align-items-center">
                      <div class="card p-3" style={{ width: 300 }}>
                        <img src={testImageS} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title mb-3">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <div className="mt-3">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 ">
                    <div className="d-flex justify-content-center align-items-center">
                      <div class="card p-3" style={{ width: 300 }}>
                        <img src={testImageS} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title mb-3">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <div className="mt-3">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="container">
                <div className="row g-5">
                  <div className="col-12 col-lg-4 ">
                    <div className="d-flex justify-content-center align-items-center">
                      <div class="card p-3" style={{ width: 300 }}>
                        <img src={testImageS} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title mb-3">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <div className="mt-3">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 ">
                    <div className="d-flex justify-content-center align-items-center">
                      <div class="card p-3" style={{ width: 300 }}>
                        <img src={testImageS} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title mb-3">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <div className="mt-3">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 ">
                    <div className="d-flex justify-content-center align-items-center">
                      <div class="card p-3" style={{ width: 300 }}>
                        <img src={testImageS} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title mb-3">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <div className="mt-3">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* expert detail and read more information section */}
      <section class="services-section mb-5 pt-5 ">
        <div class="container text-center common-title fw-bold">
          <h2 class="common-heading text-capitalize ">Read More About Pannel</h2>
          <hr class="w-25 mx-auto " />
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="d-flex justify-content-center align-items-center">
                <div class="card" style={{ width: 300 }}>
                  <img src={testImageS} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="d-flex justify-content-between">
                      <p class="small text-grey">
                        <FontAwesomeIcon icon={faBookOpenReader} /> :$500
                      </p>
                      <p class="small text-grey"> Jully 11, 2023</p>

                    </div>
                    <h5 class="card-title mt-3">Web Care</h5>
                    <p class="card-text mt-2 mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark px-3">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="d-flex justify-content-center align-items-center">
                <div class="card" style={{ width: 300 }}>
                  <img src={testImageS} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="d-flex justify-content-between">
                      <p class="small text-grey">
                        <FontAwesomeIcon icon={faBookOpenReader} /> :$500
                      </p>
                      <p class="small text-grey"> Jully 11, 2023</p>

                    </div>
                    <h5 class="card-title mt-3">Web Care</h5>
                    <p class="card-text mt-2 mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark px-3">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="d-flex justify-content-center align-items-center">
                <div class="card" style={{ width: 300 }}>
                  <img src={testImageS} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="d-flex justify-content-between">
                      <p class="small text-grey">
                        <FontAwesomeIcon icon={faBookOpenReader} /> :$500
                      </p>
                      <p class="small text-grey"> Jully 11, 2023</p>

                    </div>
                    <h5 class="card-title mt-3">Web Care</h5>
                    <p class="card-text mt-2 mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark px-3">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="d-flex justify-content-center align-items-center">
                <div class="card" style={{ width: 300 }}>
                  <img src={testImageS} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="d-flex justify-content-between">
                      <p class="small text-grey">
                        <FontAwesomeIcon icon={faBookOpenReader} /> :$500
                      </p>
                      <p class="small text-grey"> Jully 11, 2023</p>

                    </div>
                    <h5 class="card-title mt-3">Web Care</h5>
                    <p class="card-text mt-2 mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark px-3">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* contact section design */}

      <section class="services-section contact-section bg-color text-white  pt-5 " id="contact-us">
        <div class="custom-shape-divider-top-1689071027">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>

        <div class="container text-center common-title fw-bold">
          <h2 class="common-heading text-capitalize  text-white">Contact Us</h2>
          <hr class="w-25 mx-auto " />
        </div>

        <div className="container ">
          <div className="form-section mx-auto">
            <form>
              <div class="mb-3">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <label for="exampleInputFirstName" class="form-label">First Name</label>
                    <input type="text"  required class="form-control" id="exampleInputFirstName" aria-describedby="firstnamehelp" />
                    {/* <div id="firstnamehelp" class="form-text text-grey">We'll never share your email with anyone else.</div> */}
                  </div>
                  <div className="col-lg-6 col-12">
                    <label for="exampleInputLastName" class="form-label">Last Name</label>
                    <input type="text" required class="form-control" id="exampleInputLastName" aria-describedby="lastnamehelp" />
                    {/* <div id="lastnamehelp" class="form-text text-grey">We'll never share your email with anyone else.</div> */}
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" required class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="text-center">
                <button type="submit"  class="btn btn-secondary  ">Submit</button>
              </div>
            </form>
          </div>
        </div>

      </section>

      <section class="contact-section" >
        {/* <div class="container text-center common-title fw-bold">
          <h2 class="common-heading text-capitalize ">Read More About Pannel</h2>
          <hr class="w-25 mx-auto " />
        </div> */}
        <Footer/>
      </section>
    </div>
  );
}

export default App;
