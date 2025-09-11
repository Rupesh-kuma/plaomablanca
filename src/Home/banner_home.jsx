const BanneHome = () => {
    return (
        <>
            <div className="banner_img position-relative " id="top">
                <div className="container">
                    <div className="row position-absolute top-50 end-0 start-0">
                        <div className="col-6 hover_banner1">
                            <div className="d-flex justify-content-center">
                                <div className="p-5 banner_view">
                                    <b className="d-block mb-3">SPRING/SUMMER</b>
                                    <h3 className="mb-3">Paloma Blanca 2024</h3>
                                    <i className="d-block mb-3">Explore The New Collection</i>
                                    <button>View Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 hover_banner2">
                            <div className="d-flex justify-content-center">
                                <div className="p-5 banner_view">
                                    <b className="d-block mb-3">SPRING/SUMMER</b>
                                    <h3 className="mb-3">Mikaella Bridal 2024</h3>
                                    <i className="d-block mb-3">Explore The New Collection</i>
                                    <button>View Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default BanneHome;