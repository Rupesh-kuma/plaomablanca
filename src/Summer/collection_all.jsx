import { useEffect, useState } from "react";
import Navbar from "../header/navbar";
import Newsletter from "../footer/NEWSLETTER";
import Footer from "../footer/footer";
import Aside from "../Summer/aside";
import Collection from "../Summer/Collection";

const Collectionall = () => {
    const [filter, setfilter] = useState(null);
    useEffect(() => {
        const filters = async () => {
            try {
                const response = await fetch("./data/Discover_the_collection.json");
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
    console.log(filter);

    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <>
        <Navbar/>
        <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card border-0 bg-transparent">
                            <div className="card-body">
                                <h2 className="card-title" style={{lineHeight:"50px"}}>Discover your perfect Mikaella wedding gown. <b className="border-bottom border-dark border-3">Made with love</b> in Toronto, Canada.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col border-start">
                        <div className="card border-0 bg-transparent">
                            <div className="card-body">
                                <h3 className="card-title mb-0">Gowns</h3>
                                <p className="card-text">Mikaella / Gowns</p>
                                <p className="card-text">Featuring our full collection of Mikaella wedding dresses.</p>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
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
export default Collectionall;