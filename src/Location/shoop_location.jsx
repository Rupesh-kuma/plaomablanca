import Newsletter from "../footer/NEWSLETTER";
import Footer from "../footer/footer";
import Navbar from "../header/navbar";
import Map from "./map";
import Search from "./search_location";
import Shops from "./shoops";

const Shoop=()=>{
    return(
        <>
            <Navbar/>
            <Shops/>
            <Search/>
            <Map/>
            <Newsletter/>
            <Footer/>
        </>
    )
}
export default Shoop;