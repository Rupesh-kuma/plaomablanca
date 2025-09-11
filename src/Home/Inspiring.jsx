import { Link } from "react-router-dom";

const Inspiring = () => {
    return (
        <>
            <div className="inspiring py-5">
                <div className="d-flex px-5">
                    <span className="d-block inspiring_border_span "></span>
                    <h2 className="w-100 text-center">Inspiring New Beginnings Since 1937</h2>
                    <span className="d-block inspiring_border_span"></span>
                </div>
                <div className="container">
                    <p className="mb-5 mt-3">Magnificently crafted from the highest quality fabrics, lace, beads and embellishments, our gowns offer the look, feel, and elegance of high-fashion couture at an attractive price.</p>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <img src="../Home page/Read_more/c3.jpg" className="card-img-top" alt="..." />
                                <div className="card-body p-4">
                                    <p className="card-text">Every Paloma Blanca wedding gown is designed and made with love in Toronto, Canada.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <img src="../Home page/Read_more/b2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <span className="inspiring_border_span out_border d-block mt-3"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <img src="../Home page/Read_more/c1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="text-end">PALOMA BLANCA</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="text-center my-5 pt-5">
                        <Link to="/our_story" className=" btn border p-4">READ MORE ABOUT US</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Inspiring;