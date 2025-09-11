const Ourfamily = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card border-0">
                            <div className="card-body">
                                <h5 className="card-title">Our Family. Our Story.</h5>
                                <p className="card-text">Founded in 1937 by Manny Bernstein, Paloma Blanca was first known as Blue Bird Dress. With its original location in downtown Toronto, Canada on the popular Spadina Avenue, the company began with a bridal gown and evening wear division. Manny’s brother Harry Bernstein also worked for the company and eventually took over the business from his brother. Continuing in the family tradition of offering unique bridal and evening wear designs and high quality manufacturing, Harry helped to maintain Blue Bird Dress as a leading design house in Toronto, making a name for itself across Canada.</p>
                                <p className="card-text">In the late 70s, Harrys two sons Marty and Sydney Bernstein began working for the family business. Working within every area of the company, from shipping and marketing to sales and design, Harry’s sons envisioned expanding the business. Eager to spread their wings, Marty and Sydney worked together to increase distribution to hundreds of stores throughout the United States. This cross-border success ignited a new vision – Blue Bird Dress became Paloma Blanca and the company soon started to focus exclusively on the creation of bridal gowns and accessories.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0">
                            <div className="card-body">
                                <div id="carouselExampleIndicators" className="carousel slide w-100" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="../Home page/Read_more/a1.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="../Home page/Read_more/a2.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="../Home page/Read_more/a3.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <p className="px-3">Today the company continues to be family owned and operated and remains 100% Canadian made. Paloma Blanca’s flattering and inspiring designs have garnered a number of prestigious bridal industry awards. With a renowned reputation for designing and producing high quality wedding gowns with impeccable attention to detail, styling, fit and best-in-class service to brides and retailers, Paloma Blanca has generated worldwide acclaim and respect within the bridal industry. Based on unique and innovative designs, an uncompromising commitment to quality and professionalism, a standard of service that is second-to-none and through the development of trusted relationships, Paloma Blanca has earned a loyal worldwide client base. Paloma Blanca bridal gowns can be found in the best bridal shops in over 200 major cities around the globe.</p>
            </div>
        </>
    )
}
export default Ourfamily