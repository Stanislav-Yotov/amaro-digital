import '../public/assets/css/bootstrap.css';
import '../public/assets/css/maicons.css';
import '../public/assets/css/theme.css';
import './Header.css';

function Header(props) {
    return (
        <header>
<nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="300">
  <div className="container">
    <a href="#" className="navbar-brand">Amaro&nbsp;<span class="text-primary">Digital</span></a>

    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="navbar-collapse collapsed" id="navbarContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="index.html">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="about.html">About</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="service.html">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="blog.html">Blog</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="contact.html">Contact</a>
        </li>
        {/* <li className="nav-item" style={{marginLeft: '5rem'}}>
          <a className="btn btn-primary ml-lg-2" href="#">Let's Chat</a>
        </li> */}
      </ul>
    </div>

  </div>
</nav>

{/* <div className="container">
  <div className="page-banner">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-md-6">
        <nav aria-label="Breadcrumb">
          <ul className="breadcrumb justify-content-center py-0 bg-transparent">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active">Contact</li>
          </ul>
        </nav>
        <h1 className="text-center">Contact Us</h1>
      </div>
    </div>
  </div>
</div> */}
</header>
    );
};

export default Header;
