import Press from "../Home/Press";
import Newsletter from "../footer/NEWSLETTER";
import Footer from "../footer/footer";
import Navbar from "../header/navbar";
import Ourfamily from "./Our_family";
import Ourpassion from "./Our_passion";
import Ourtalent from "./Our_talent";
import Our from "./our";

const Ourstory=()=>{
    return(
        <>
        <Navbar/>
        <Our/>
        <Ourfamily/>
        <Ourpassion/>
        <Ourtalent/>
        <Press/>
        <Newsletter/>
        <Footer/>
        </>
    )
}
export default Ourstory;