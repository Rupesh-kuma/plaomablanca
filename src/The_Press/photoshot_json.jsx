import { useEffect, useState } from "react";

const Photoshoot=()=>{
    const [photos, setPhotos]=useState(null);
    useEffect(()=>{
        const Photoshot=async()=>{
            try{
                const response=await fetch("../data/photoshoots.json");
                if(!response.ok){
                    throw new Error("Network not response ok");
                }
                const photo= await response.json();
                setPhotos(photo);
            }
            catch(error){
                console.error("response not found",error);
            }
        }
        Photoshot();
    },[])
    console.log(photos);
    return(
        <>
        <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        (photos && photos.map((itme,i)=>{
                            return(
                                <div className="col" key={i}>
                        <div className="card">
                            <img src={itme.url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{itme.title}</h5>
                                <p className="card-text">{itme.paragraph}</p>
                                <p className="card-text">{itme.paragraph2}</p>
                                <div className="d-flex">
                                    <i className="fa-solid fa-magnifying-glass-plus rounded-circle bg-dark text-light d-flex justify-content-center " style={{width:"50px", height:"50px",alignItems:"center"}}></i>
                                    <i className="fa-solid fa-link rounded-circle"></i>
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
export default Photoshoot;