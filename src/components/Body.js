import '../public/assets/css/bootstrap.css';
import '../public/assets/css/maicons.css';
import '../public/assets/css/theme.css';
import './Body.css';
import banner from '../public/assets/img/banner_image_1.svg';
import { Fragment } from 'react';
import { Link } from 'react-scroll';

function Body(props) {
  return (
    <Fragment>
    {/* <div className="container"> */}
      <div className="page-banner home-banner">
        <div className="row align-items-center flex-wrap-reverse h-100">
          <div className="col-md-6 py-5 wow fadeInLeft">
            <h1 className="mb-4" style={{marginLeft: '5rem'}}>We build links that move the needle.</h1>
            <p className="text-lg text-grey mb-5" style={{marginLeft: '5rem'}}>Amaro Digital is a boutique digital PR agency that works with a handful of businesses to deliver exceptional results.</p>
            <a href="#" className="btn btn-primary ml-lg-2">Let's Chat</a>
          </div>
          <div className="col-md-6 py-5 wow zoomIn">
            <div className="img-fluid text-center">
              <img src={banner} />
            </div>
          </div>
        </div>
        <Link 
        to="contact"
        spy={true}
        hashSpy={true}
        smooth={true}
        offset={-70}
        duration={500}
         className="btn-scroll" data-role="smoothscroll"><span className="mai-arrow-down"></span></Link>
      </div>
    {/* </div> */}
    </Fragment>
  );
};

export default Body;