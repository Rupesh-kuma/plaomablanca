import { useEffect, useState } from "react";
import Aside from "./aside";
import Navbar from "../header/navbar";
import Banner from "./summer_banner";
import Collection from "./Collection";
import Newsletter from "../footer/NEWSLETTER";
import Footer from "../footer/footer";

const Satinfaille = () => {
    const [filter, setfilter] = useState(null);
    useEffect(() => {
        const filters = async () => {
            try {
                const response = await fetch("./data/Satin_Faille.json");
                if (!response.ok) {
                    throw new Error("Network is not response");
                }
                const datafilter = await response.json();
                setfilter(datafilter);
            }
            catch (error) {
                console.error("response is not found", error);
            }
        };
        filters();
    }, []);

    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <>
        <Navbar/>
        <Banner/>
            <div className="container my-4">
                <div className="row g-2">
                    <div className="col-3">
                        <Aside/>
                    </div>
                    <div className="col-9">
                        <div className="card border-0 p-0">
                            <div className="card-body">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    {filter && filter.map((item, index) => (
                                        <div className="col" key={index} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                                            <div className="card">
                                                <img
                                                    src={hoveredIndex === index ? item.hover : item.url}
                                                    className="card-img-top"
                                                    alt={item.name}
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Collection/>
            <Newsletter/>
            <Footer/>
        </>
    )
}
export default Satinfaille;