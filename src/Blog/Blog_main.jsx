import Newsletter from "../footer/NEWSLETTER";
import Footer from "../footer/footer";
import Navbar from "../header/navbar";
import Blogjson from "./Blog_json";
import Palomablog from "./Paloma_blog";

const Blogmain=()=>{
    return(
        <>
        <Navbar/>
        <Palomablog/>
        <Blogjson/>
        <Newsletter/>
        <Footer/>
        </>
    )
}
export default Blogmain;