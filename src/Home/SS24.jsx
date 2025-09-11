import { Link } from "react-router-dom";

const SS24 = () => {
    return (

        <>
            <div className="container">
                <div className="ss24_paddig py-5">
                    <h2 className="my-3 py-4">SS24 Collection</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card border-0">
                                <img src="../Home page/img2.jpg" className="card-img-top" alt="img2" />
                                <div className="card-body">
                                    <p className="card-text">Clean lines, eye-catching details, and multi-textured fabrics lead the way to elevated silhouettes and glamorous wedding day looks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0">
                                <div className="card-body">
                                    <p className="card-text">Each and every Paloma Blanca wedding gown is designed and produced in-house, in Toronto, Canada. Handmade with love for today’s beautiful brides.</p>
                                </div>
                                <img src="../Home page/img1.jpg" className="card-img-top" alt="img1" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0">
                                <img src="../Home page/img3.jpg" className="card-img-top" alt="img3" />
                                <div className="d-flex justify-content-cente  my-3" >
                                    <Link to="/collection_all" className="nav-link border p-3 collection_hover_button" style={{ marginLeft: "auto", marginRight: "auto" }}>DISCOVER THE COLLECTION</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SS24;