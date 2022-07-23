import { Fragment } from "react";
import svgOne from '../public/assets/img/services/service-1.svg';
// import svgTwo from '../public/assets/img/services/service-2.svg';
// import svgThree from '../public/assets/img/services/service-3.svg';


function Services(props) {
    return (
        <Fragment>
            <div className="page-section">
            <h3 style={{textAlign: 'center', marginBottom: '3rem'}}>Discover our services</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" style={{marginLeft: '24em'}}>
                            <div className="card-service wow fadeInUp">
                                <div className="header">
                                    <img src={svgOne} alt="" />
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">Digital PR</h5>
                                    <p>Increase your brand awareness and rank higher 
                                        in search with powerful backlinks from mentions on the top websites in your niche.</p>
                                    <a href="service.html" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4">
                            <div className="card-service wow fadeInUp">
                                <div className="header">
                                    <img src={svgTwo} alt="" />
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">Linkable assets</h5>
                                    <p>Supercharge your content marketing with linkable assets that naturally attract backlinks and social shares.</p>
                                    <a href="service.html" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-service wow fadeInUp">
                                <div className="header">
                                    <img src={svgThree} alt="" />
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">Content Strategy</h5>
                                    <p>We help you define your SEO objective & develop a realistic strategy with you</p>
                                    <a href="service.html" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Services;