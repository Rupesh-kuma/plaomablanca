import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <>
        <div className="container py-5">
            <div className="row">
                <div className="col-8">
                    <div className="pe-5">
                        <div className="pt-5 pb-2 w-50">
                            <Link className="nav-link" to="/mikaella"> <img src="../Home page/PNG/Mikaella-Logo.png" alt="mikaella" style={{width:"300px"}} /></Link>
                        </div>
                        <p>We are passionate about the art of dressmaking, and it shows! Every Mikaella bridal gown made is deeply important to us and this is why we dedicate all our efforts and talent into design and quality. By creating and producing all of our bridal gowns in our manufacturing centre in Toronto, Canada, we are easily able to conduct the quality control checks necessary to ensure every dress is finished impeccably, tastefully and to perfection.</p>
                        <div className="pb-5 pt-3 w-50">
                            <Link className="nav-link" to="/"> <img src="../Home page/PNG/mainLogo.png" alt="mainlogo" style={{width:"300px"}} /></Link>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <ul className="list lh-lg">
                        <li className="list-group-item pb-4"><b>Explore</b></li>
                        <li className="list-group-item"><Link className="nav-link" to="/our_story">About</Link></li>
                        <li className="list-group-item"><Link className="nav-link" to="/collection_all">Collections</Link></li>
                        <li className="list-group-item"><Link className="nav-link" to="/events">Upcoming Events</Link></li>
                        <li className="list-group-item"><Link className="nav-link" to="/become">Become a retailer</Link></li>
                        <li className="list-group-item"><Link className="nav-link" to="/retailer">Retailers Dashboard</Link></li>
                    </ul>
                </div>
                <div className="col-2">
                <ul className="list lh-lg">
                        <li className="list-group-item pb-4"><b>Support</b></li>
                        <li className="list-group-item"><Link className="nav-link" to="/about">Contact Us</Link></li>
                        <li className="list-group-item"><Link className="nav-link" to="/collections">FAQ</Link></li>
                        <li className="list-group-item"><Link className="nav-link" to="/upcoming-Events">Privacy Policy</Link></li>
                        <li className="list-group-item"><Link className="nav-link" to="/become">Shop Locator</Link></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row  g-4">
  <div className="col-2">
    <div className="card border-0">
      {/* <div className="card-body"> */}
      <ul className="d-flex list">
        <li className="list-group-item"><Link className="fs-4 me-2 nav-link" to="/"> <i className="fa-brands fa-facebook-f"></i></Link></li>
        <li className="list-group-item"><Link className="fs-4 me-2 nav-link" to="/"><i className="fa-brands fa-twitter"></i></Link></li>
        <li className="list-group-item"><Link className="fs-4 me-2 nav-link" to="/"><i className="fa-brands fa-square-instagram"></i></Link></li>
        <li className="list-group-item"><Link className="fs-4 me-2 nav-link" to="/"><i className="fa-brands fa-pinterest-p"></i></Link></li>
        <li className="list-group-item"><Link className="fs-4 me-2 nav-link" to="/"><i className="fa-brands fa-youtube"></i></Link></li>
      </ul>
      {/* </div> */}
    </div>
  </div>
  <div className="col-8">
    {/* <div className="card"> */}
      <div className="text-center">
        <p className="card-text">Legal | Blue Bird Dress of Toronto Corp. © 2007-2024 | All Rights Reserved</p>
      </div>
    {/* </div> */}
  </div>
  <div className="col-2">
    {/* <div className="card"> */}
      <div className=" text-end">
        <button className="bg-transparent"><a href="#top" className="nav-link">BACK TO TOP <i className="fa-solid fa-angle-up"></i></a></button>
      {/* </div> */}
    </div>
  </div>
</div>
        </div>
        </>
    )
}
export default Footer;