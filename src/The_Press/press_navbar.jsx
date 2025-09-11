// import { Link } from "react-router-dom";

import {  useState } from "react";
import Coverjson from "../ON_THE_COVER/coverjson";
import Editorial from "../EDITORIAL/editorialjson";
import All from "./Pass_all";
import Photoshoot from "./photoshot_json";
import Television from "./Television_json";
import Movies from "./movies_json";

const PressNavbar = () => {
    const [activeCollapse, setActiveCollapse] = useState(null);

    const handleButtonClick = (collapseId) => {
        setActiveCollapse((prevActiveCollapse) => (prevActiveCollapse === collapseId ? null : collapseId));
    };

    
    return (
        <>
            <div className="container my-5">
                <div>
                    <p className="d-flex justify-content-center gap-4">
                        <a
                            className={`btn border px-3 py-2 ${activeCollapse === 'collapseExample' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('collapseExample')}
                        >
                            ALL
                        </a>
                        <a
                            className={`btn border px-3 py-2 ${activeCollapse === 'collapseExampleone' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('collapseExampleone')}
                        >
                            ON THE COVER
                        </a>
                        <a
                            className={`btn border px-3 py-2 ${activeCollapse === 'collapseExampletwo' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('collapseExampletwo')}
                        >
                            EDITORIAL
                        </a>
                        <a
                            className={`btn border px-3 py-2 ${activeCollapse === 'collapseExamplethree' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('collapseExamplethree')}
                        >
                            PHOTOSHOOTS
                        </a>
                        <a
                            className={`btn border px-3 py-2 ${activeCollapse === 'collapseExamplefour' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('collapseExamplefour')}
                        >
                            TELEVISION
                        </a>
                        <a
                            className={`btn border px-3 py-2 ${activeCollapse === 'collapseExamplefive' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('collapseExamplefive')}
                        >
                            MOVIES
                        </a>
                    </p>

                    <div className={`collapse ${activeCollapse === 'collapseExample' ? 'show' : ''}`} id="collapseExample">
                        <div className="card card-body">
                        <All/>
                        </div>
                    </div>

                    <div className={`collapse ${activeCollapse === 'collapseExampleone' ? 'show' : ''}`} id="collapseExampleone">
                        <div className="card card-body">
                            <Coverjson/>
                        </div>
                    </div>

                    <div className={`collapse ${activeCollapse === 'collapseExampletwo' ? 'show' : ''}`} id="collapseExampletwo">
                        <div className="card card-body">
                            <Editorial/>
                        </div>
                    </div>
                    <div className={`collapse ${activeCollapse === 'collapseExamplethree' ? 'show' : ''}`} id="collapseExamplethree">
                        <div className="card card-body">
                            <Photoshoot/>
                        </div>
                    </div>
                    <div className={`collapse ${activeCollapse === 'collapseExamplefour' ? 'show' : ''}`} id="collapseExamplefour">
                        <div className="card card-body">
                           <Television/>
                        </div>
                    </div>
                    <div className={`collapse ${activeCollapse === 'collapseExamplefive' ? 'show' : ''}`} id="collapseExamplefive">
                        <div className="card card-body">
                            <Movies/>
                        </div>
                    </div>


                    {/* Add more collapses as needed */}

                </div>
            </div>
        </>
    )
}
export default PressNavbar;