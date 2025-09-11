import Newsletter from "../footer/NEWSLETTER";
import Footer from "../footer/footer";
import Navbar from "../header/navbar";

const Video = () => {
    return (
        <>
            <Navbar />
            <div className="video_padding">
                <div className="container" style={{ padding: "150px 0" }}>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <div className="card-body">
                                    <iframe className="elementor-video" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="FW 2022 Bridal Collection by Paloma Blanca" src="https://www.youtube.com/embed/IyUZNuqBQ-Y?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fpalomablanca.com&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-9="true" style={{ height: "360px", width: "100%" }}></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-transparent  position-relative">
                                <div className="card-body position-absolute text-light" style={{ top: "115px" }}>
                                    <h1 className="card-title">Fall/Winter 2022 Collection</h1>
                                    <i className="card-text">Paloma Blanca</i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container" style={{ padding: "150px 0" }}>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card border-0 bg-transparent position-relative">
                                <div className="card-body position-absolute text-light" style={{ top: "115px" }}>
                                    <h1 className="card-title">Spring/Summer 2021 Collection</h1>
                                    <i className="card-text">Paloma Blanca</i>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <div className="card-body">
                                    <iframe width="100%" height="360" src="https://www.youtube.com/embed/dcOBwtM7Tvc?si=Zkucln1I2J_EHGW4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ padding: "150px 0" }}>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <div className="card-body">
                                    <iframe width="100%" height="360" src="https://www.youtube.com/embed/9rSKhs1xR54?si=A6Ywhrjj8y2qqyDx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-transparent position-relative">
                                <div className="card-body position-absolute text-light" style={{ top: "115px" }}>
                                    <h1 className="card-title">Fall/Winter 2021 Collection</h1>
                                    <i className="card-text">Paloma Blanca</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ padding: "150px 0" }}>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card border-0 bg-transparent position-relative">
                                <div className="card-body position-absolute text-light" style={{ top: "115px" }}>
                                    <h1 className="card-title">Spring/Summer 2021 Collection</h1>
                                    <i className="card-text">Paloma Blanca</i>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <div className="card-body">
                                <iframe width="100%" height="360" src="https://www.youtube.com/embed/dcOBwtM7Tvc?si=hnKT9A3G3F1p1a-l" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter/>
            <Footer/>
        </>
    )
}
export default Video;