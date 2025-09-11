import Blog from "../Home/Blog";
import Inspiring from "../Home/Inspiring";
import Press from "../Home/Press";
import Palomablancabridal from "../Home/palomablancabridal";
import Newsletter from "../footer/NEWSLETTER";
import Footer from "../footer/footer";
import Mikaellanavbar from "../header/Mikaella_navbar";
import SS24collection from "./SS24_Collection";
import Mikaellabanner from "./mikaella_banner";

const Mikaella=()=>{
    return(
        <>
        <Mikaellanavbar/>
        <Mikaellabanner/>
        <SS24collection/>
        <Inspiring/>
        <Blog/>
        <Press/>
        <Palomablancabridal/>
        <Newsletter/>
        <Footer/>
        </>
    )
}
export default Mikaella;