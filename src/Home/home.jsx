import Newsletter from "../footer/NEWSLETTER";
import Footer from "../footer/footer";
import Navbar from "../header/navbar";
import Blog from "./Blog";
import Inspiring from "./Inspiring";
import Press from "./Press";
import SS24 from "./SS24";
import BanneHome from "./banner_home";
import "./home.css"
import Palomablancabridal from "./palomablancabridal";
const Homemain=()=>{
    return(
        <>
        <Navbar/>
        <BanneHome/>
        <SS24/>
        <Inspiring/>
        <Blog/>
        <Press/>
        <Palomablancabridal/>
        <Newsletter/>
        <Footer/>
        </>
    )
}
export default Homemain;