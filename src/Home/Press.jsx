import { useState, useEffect } from 'react';
// import './ImageSlider.css';

const ImageSlider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000); // Change slide every 3 seconds (adjust the interval as needed)

        return () => {
            clearInterval(intervalId);
        };
    }, [images.length]);

    return (
        <div className="slider-container height_slider">
            <div className="slider height_slider">
                <div
                    className="slides"
                    style={{ transform: `translateX(${-currentSlide * (100 / images.length)}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="slide">
                            <img src={image} alt={`slide ${index + 1}`} className='slilder_image' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
const Press = () => {
    const images = [
        '../Home page/PNG/image-5.png',
        '../Home page/PNG/mainLogo.png',
        '../Home page/PNG/martha-stewart-weddings.png',
        '../Home page/PNG/Mikaella-Logo.png',
        '../Home page/PNG/mwl2-600x54.png',
        '../Home page/PNG/PinClipart.png',
        '../Home page/PNG/press-1.png',
        '../Home page/PNG/press-2.png',
        '../Home page/PNG/press-3.png',
        '../Home page/PNG/press-4.png',
        '../Home page/PNG/The-knot-logo-2.png',
    ];
    return (
        <>
            <div className="marging_top_press">
                <div className="container">
                    <div className="d-flex">
                        <h2 className="w-50">In The Press</h2>
                        <span className="inspiring_border_span d-block "></span>
                    </div>
                    <div className='height_slider my-5 pt-5'>
                        <ImageSlider images={images} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Press;