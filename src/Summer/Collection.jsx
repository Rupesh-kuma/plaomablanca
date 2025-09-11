import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Collection = () => {
    const [coll, setColl] = useState(null);
    useEffect(() => {
        const colls = async () => {
            try {
                const response = await fetch("./data/collection.json");
                if (!response.ok) {
                    throw new Error("network is not response");
                }
                const datacoll = await response.json();
                setColl(datacoll);
            }
            catch (error) {
                console.error("response is not found", error);
            }
        };
        colls();

    }, []);
    console.log("coll",coll);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <>
            <div className="container">
                <div className="mt-5 w-50">
                    <img src="../Home page/PNG/mainLogo.png" alt="mainLogo" className="w-50" />
                </div>
                <div className="d-flex">
                    <span className="d-block inspiring_border_span w-50"></span>
                    <h2 className="w-100 d-block text-center">From Our Sister Collection</h2>
                    <span className="d-block inspiring_border_span w-50"></span>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4 my-5">
                    {coll && coll.map((item,index) => (
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
                        ))
                    }

                </div>
                <div className="d-flex justify-content-cente  my-3" >
                    <Link to="/collection_all" className="nav-link border p-3 collection_hover_button" style={{marginLeft:"auto",marginRight:"auto"}}>DISCOVER THE COLLECTION</Link>
                </div>
            </div>
        </>
    )
}
export default Collection;