import { Link } from "react-router-dom";

const Mikaellanavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand border-end pe-3" to="/">Paloma Blanca</Link>
          <Link className="navbar-brand" to="/mikaella">Mikaella</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{alignItems:"center"}}>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/collecttons" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  COLLECTIONS
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/ss_2024">SS 2024</Link></li>
                  <li><Link className="dropdown-item" to="/curvy_brides">Curvy Brides</Link></li>
                  <li><Link className="dropdown-item" to="/all_dresses">All Dresses</Link></li>
                  <li><Link className="dropdown-item" to="/accessories">Accessories</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/shop_locator">SHOP LOCATOR</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/events">EVENTS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/mikaella"><img src="../Home page/PNG/Mikaella-Logo.png" alt="main" className="logo" /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/our_story">OUR STORY</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/real_brides">REAL BRIDES</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/media" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MEDIA
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                  <li><Link className="dropdown-item" to="/in_the_press">In the press</Link></li>
                  <li><Link className="dropdown-item" to="/videos">Videos</Link></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex ms-auto">
              <ul className="navbar-nav md-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/contact">CONTACT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/lick"><i className="fa-regular fa-heart"></i></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Mikaellanavbar;