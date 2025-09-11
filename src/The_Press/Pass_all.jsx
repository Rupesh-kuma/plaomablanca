import { useEffect, useState } from "react";

const All = () => {
    const [alldata, setAlldata] = useState(null);
    useEffect(() => {
        const all = async () => {
            try {
                const response = await fetch("../data/all.json");
                if (!response.ok) {
                    throw new Error("Network Response was not ok");
                }
                const jsonData = await response.json();
                setAlldata(jsonData);
            }
            catch (error) {
                console.error("Error fetching data:", error)
            }
        };
        all()
    }, []);
    console.log(alldata);
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        (alldata && alldata.map((itme, i) => {
                            return (
                                <div className="col" key={i} style={{height:"100%"}}>
                                    <div className="card position-relative press_ho">
                                        <img src={itme.url} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body position-absolute align-middle text-light text-center press_hover">
                                            <h5 className="card-title">{itme.title}</h5>
                                            <p className="card-text">{itme.pararaph1}</p>
                                            <p className="card-text">{itme.pararaph2}</p>
                                            <div className="d-flex gap-5  justify-content-center">
                                                <i className="fa-solid fa-magnifying-glass-plus rounded-circle bg-dark text-light d-flex justify-content-center " style={{ width: "50px", height: "50px", alignItems: "center" }}></i>
                                                <i className="fa-solid fa-link rounded-circle rounded-circle bg-dark text-light d-flex justify-content-center " style={{ width: "50px", height: "50px", alignItems: "center" }} ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }))
                    }
                </div>
            </div>
        </>
    )
}
export default All;