// import Navbar from "../../header/navbar";
import Newsletter from "../footer/NEWSLETTER";
import Footer from "../footer/footer";
import Navbar from "../header/navbar";
import Collection from "./Collection";
import Filter from "./Filter";
import Banner from "./summer_banner";

const Summer=()=>{
    return(
        <>
        {/* <Navbar/> */}
        <Navbar/>
        <Banner/>
        <Filter/>
        <Collection/>
        <Newsletter/>
        <Footer/>
        </>
    )
}
export default Summer;