import React from 'react'
import "../Styles/style.css"
import socialImageF from '../Assets/Images/si1.gif'
import socialIageS from '../Assets/Images/si2.gif'
import socialIageT from '../Assets/Images/si3.gif'

import { faArrowAltCircleRight, faBookOpen, faBookOpenReader, faStar, faStarEmpty, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServiceSection = () => {
    return (
        <>
            <div>
                {/* Service Section */}
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
                {/* Service Section */}
            </div>
        </>
    )
}

export default ServiceSection
