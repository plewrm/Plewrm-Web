import React from 'react'
import "../Styles/style.css"
import testImageS from '../Assets/Images/pi5.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faBookOpen, faBookOpenReader, faStar, faStarEmpty, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const ExpertOpenionSection = () => {
    return (
        <>
            <div>
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
                {/* expert detail and read more information section */}
            </div>
        </>
    )
}

export default ExpertOpenionSection
