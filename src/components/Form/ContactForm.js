import { Fragment } from "react";

function ContactForm(props) {
    return (
        <Fragment>
            <div className="page-section" id='contact' style={{marginTop: '20px'}}>
                <div className="container" >
                    <div className="row text-center align-items-center" >
                        <div className="col-lg-4 py-3">
                            <div className="display-4 text-center text-primary"><span className="mai-pin"></span></div>
                            <p className="mb-3 font-weight-medium text-lg">Address</p>
                            <p className="mb-0 text-secondary">203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div className="col-lg-4 py-3">
                            <div className="display-4 text-center text-primary"><span className="mai-call"></span></div>
                            <p class="mb-3 font-weight-medium text-lg">Phone</p>
                            <p class="mb-0"><a href="#" className="text-secondary">+1 232 3235 324</a></p>
                            <p class="mb-0"><a href="#" className="text-secondary">+00 1122 3344 5566</a></p>
                        </div>
                        <div className="col-lg-4 py-3">
                            <div className="display-4 text-center text-primary"><span className="mai-mail"></span></div>
                            <p className="mb-3 font-weight-medium text-lg">Email Address</p>
                            <p className="mb-0"><a href="#" className="text-secondary">support@seogram.com</a></p>
                            <p className="mb-0"><a href="#" className="text-secondary">hello@seogram.com</a></p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-4">
                    <div >
                        <div>
                            <form action="#" className="contact-form py-5 px-lg-5">
                                <h2 className="mb-4 font-weight-medium text-secondary">Get in touch</h2>
                                <div className="row form-group">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="text-black" for="fname">First Name</label>
                                        <input type="text" id="fname" className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="text-black" for="lname">Last Name</label>
                                        <input type="text" id="lname" className="form-control" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" for="email">Email</label>
                                        <input type="email" id="email" className="form-control" />
                                    </div>
                                </div>

                                <div className="row form-group">

                                    <div className="col-md-12">
                                        <label className="text-black" for="subject">Subject</label>
                                        <input type="text" id="subject" className="form-control" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" for="message">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="5" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                                    </div>
                                </div>

                                <div className="row form-group mt-4">
                                    <div className="col-md-12">
                                        <input type="submit" value="Send Message" className="btn btn-primary" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <div className="col-lg-6 px-0">
                            <div className="maps-container"><div id="google-maps"></div></div>
                        </div> */}
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default ContactForm;