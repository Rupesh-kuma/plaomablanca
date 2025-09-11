const Blog = () => {
    return (
        <>
            <div className="container py-5">
                <div className="d-flex my-5 pe-5">
                    <h2 className="w-50">From The Blog</h2>
                    <span className="d-block inspiring_border_span"></span>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card border-0 position-relative">
                            <img src="../Home page/cover-image-cropped-3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body position-absolute blog_marging">
                                <h3 className="card-title">Elevate Your Elegance: The Essential Shapewear Guide for 2024 Brides</h3>
                                <p className="card-text">So You Found Your Dream Wedding Dress! Now What? We scoured the internet and...</p>
                                <button className="btn border p-3">READMORE</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0 position-relative">
                            <img src="../Home page/cover-image-.jpg" className="card-img-top" alt="..." />
                            <div className="card-body position-absolute blog_marging">
                                <h3 className="card-title">Paloma Blanca Fall 2022 Collection Launch</h3>
                                <p className="card-text">Paloma Blanca’s Fall Winter 2022 Collection Offers A Twist On Timeless Paloma Blanca’s new...</p>
                                <button className="btn border p-3">READMORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog;