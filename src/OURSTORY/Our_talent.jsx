const Ourtalent = () => {
    return (
        <>
            <div className="py-5">
                <div className="container my-5">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <h3 className="card-title w-100 py-3">Our Talent. Our People.</h3>
                                        <span className="inspiring_border_span pe-4  d-block w-100"></span>
                                    </div>
                                    <p className="card-text">At Paloma Blanca, we know that in every business, people make the difference. Our team is our family. More than 150 individuals make up the Paloma Blanca family from designers, sewers, cutters, hand beaders and finishers to controllers and distribution, sales and office personnel.</p>
                                    <p className="card-text">Our gifted designers continuously study the latest fashion trends and work passionately to create beautiful styles for the most discerning brides. Our design team carefully hand-selects beautiful fabrics and elegant lace and create stunning embroidery and beading patterns that make every Paloma Blanca design special, unique and everlasting. Our seasoned professionals also create exquisite veils to complement any gown.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col pb-5">
                            <div className="card border-0 bg-transparent">
                                <div className="card-body">
                                    <div id="carouselExampleIndicators" className="carousel slide w-100" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="../Home page/Read_more/c1.jpg" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="../Home page/Read_more/c2.jpg" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="../Home page/Read_more/c3.jpg" className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <p className="px-3">Thanks to the talented work and steadfast dedication of our solid team, Paloma Blanca received the Canadian Wedding Industry Awards (CWIA) Canadian Gown Designer of the Year for 2014, and in past years has also received the Distinctive Excellence in the Bridal Industry (DEBI) Award for Bridal-Better/Designer of the Year. The award voted on by bridal retailers recognizes stellar contributions made to the bridal industry.</p>
                </div>
            </div>
        </>
    )
}
export default Ourtalent;