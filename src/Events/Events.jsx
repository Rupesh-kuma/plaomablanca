import Newsletter from "../footer/NEWSLETTER";
import Footer from "../footer/footer";
import Navbar from "../header/navbar";
import Upcoming from "./Upcoming_events";
import Dropdown from "./dropdown";
import View from "./view";

const Events=()=>{
    return(
        <>
        <Navbar/>
        <Upcoming/>
        <Dropdown/>
        <View/>
        <Newsletter/>
        <Footer/>
        </>
    )
}
export default Events;