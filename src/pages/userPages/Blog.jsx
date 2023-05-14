import React from "react";

export const Blog = () => {
    return (
        <section className="blog section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 py-5 mt-5 mb-3 text-center">

                        <h1 className="mb-4" data-aos="fade-up">Digital Trend Blog</h1>
                    </div>

                    <div className="col-lg-7 col-md-7 col-12 mb-4">
                        <div className="blog-header" data-aos="fade-up" data-aos-delay="100">
                            <img src="images/blog/blog-header-image.jpg" className="img-fluid" alt="blog header"/>

                            <div className="blog-header-info">
                                <h4 className="blog-category text-info">Creative</h4>

                                <h3><a href="blog-detail.html">The Key to Creative Work is Knowing When to Walk
                                    Away</a></h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5 col-12 mb-4">
                        <div className="blog-sidebar d-flex justify-content-center align-items-center"
                             data-aos="fade-up" data-aos-delay="200">
                            <img src="images/blog/blog-sidebar-image.jpg" className="img-fluid" alt="blog"/>

                            <div className="blog-info">
                                <h4 className="blog-category text-danger">Design</h4>

                                <h3><a href="blog-detail.html">Why Truly Accessible Design Benefits Everyone</a>
                                </h3>
                            </div>
                        </div>

                        <div className="blog-sidebar py-4 d-flex justify-content-center align-items-center"
                             data-aos="fade-up" data-aos-delay="300">
                            <img src="images/blog/blog-sidebar-image01.jpg" className="img-fluid" alt="blog"/>

                            <div className="blog-info">
                                <h4 className="blog-category text-success">lifestyle</h4>

                                <h3><a href="blog-detail.html">Be Humble About What You Know</a></h3>
                            </div>
                        </div>

                        <div className="blog-sidebar d-flex justify-content-center align-items-center"
                             data-aos="fade-up" data-aos-delay="200">
                            <img src="images/blog/blog-sidebar-image02.jpg" className="img-fluid" alt="blog"/>

                            <div className="blog-info">
                                <h4 className="blog-category text-primary">Coding</h4>

                                <h3><a href="blog-detail.html">The Mistakes I Made As a Coding Beginner</a></h3>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-5 ml-auto mt-5 pt-5 col-md-6 col-12">

                        <img src="images/newsletter.png" data-aos="fade-up" data-aos-delay="100" className="img-fluid"
                             alt="newsletter"/>
                    </div>

                    <div className="col-lg-5 mr-auto mt-5 pt-5 col-md-6 col-12 newsletter-form">
                        <h4 data-aos="fade-up" data-aos-delay="200">Email Newsletter</h4>

                        <h2 data-aos="fade-up" data-aos-delay="300">Let’s stay up-to-date. We'll share you all good
                            stuffs.</h2>
                        <form action="#" method="get" encType="multipart/form-data">
                            <div className="form-group mt-4" data-aos="fade-up" data-aos-delay="400">
                                <input name="email" type="email" className="form-control"
                                       id="email" aria-describedby="emailHelp" placeholder="Please enter your email"
                                       required/>

                                <small id="emailHelp" className="form-text text-muted">We'll NOT share your email
                                    address to anyone else.</small>

                            </div>

                            <div className="form-group form-check" data-aos="fade-up" data-aos-delay="500">
                                <input name="monthly" type="checkbox" className="form-check-input" id="monthly"/>

                                <label className="form-check-label" htmlFor="monthly">Please send me a monthly
                                    newsletter.</label>
                            </div>

                            <button type="submit" data-aos="fade-up" data-aos-delay="500"
                                    className="btn w-100 mt-3">Sign up
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}